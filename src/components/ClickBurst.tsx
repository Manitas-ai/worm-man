import { useEffect } from 'react'

const BURST_WORDS = [
  'SQUIRM!', 'BURROW!', 'TUNNEL!', 'WIGGLE!',
  'COIL!',   'SLIME!',  'DODGE!',  'POW!',
  'WORM!',   'BITE!',
]

export function ClickBurst() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('a, button, input, label')) return

      const el = document.createElement('div')
      el.className = 'click-burst'
      el.textContent = BURST_WORDS[Math.floor(Math.random() * BURST_WORDS.length)]
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 900)
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
