import { useState, useEffect, useRef } from 'react'

export function useTypewriter(phrases: string[], startDelay = 1000) {
  const [display, setDisplay] = useState('')
  const phraseIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function step() {
      const current = phrases[phraseIdx.current]
      if (!deleting.current) {
        charIdx.current++
        setDisplay(current.slice(0, charIdx.current))
        if (charIdx.current === current.length) {
          deleting.current = true
          timer = setTimeout(step, 2400)
          return
        }
        timer = setTimeout(step, 60)
      } else {
        charIdx.current--
        setDisplay(current.slice(0, charIdx.current))
        if (charIdx.current === 0) {
          deleting.current = false
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length
          timer = setTimeout(step, 350)
          return
        }
        timer = setTimeout(step, 28)
      }
    }

    timer = setTimeout(step, startDelay)
    return () => clearTimeout(timer)
  }, [phrases, startDelay])

  return display
}
