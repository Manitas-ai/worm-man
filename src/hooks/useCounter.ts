import { useState, useEffect, useRef } from 'react'

export function useCounter(target: number, duration = 1800) {
  const [value, setValue] = useState(0)
  const elRef = useRef<HTMLElement | null>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true
            const start = performance.now()
            function tick(now: number) {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Math.floor(eased * target))
              if (progress < 1) requestAnimationFrame(tick)
              else setValue(target)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, elRef }
}
