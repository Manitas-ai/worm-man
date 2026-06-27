import { useEffect } from 'react'

export function useScrollReveal(selector: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector)
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.animationDelay = `${i * 0.06}s`
    })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.animation = 'card-enter 0.5s ease forwards'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}
