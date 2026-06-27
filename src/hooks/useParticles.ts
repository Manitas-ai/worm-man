import { useEffect, useRef } from 'react'

const COLORS = ['#a8e063', '#d4a84b', '#ffffff', '#a8e063', '#c8f080']

interface Particle {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  life: number
  decay: number
  color: string
  tail: number
}

export function useParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function spawn(): Particle {
      return {
        x:     Math.random() * (canvas?.width ?? 800),
        y:     (canvas?.height ?? 600) * (0.2 + Math.random() * 0.8),
        r:     Math.random() * 2 + 0.8,
        vx:    (Math.random() - 0.5) * 2.5,
        vy:    -(Math.random() * 2.8 + 1),
        life:  1,
        decay: Math.random() * 0.008 + 0.004,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        tail:  Math.random() * 7 + 3,
      }
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (Math.random() < 0.4) particlesRef.current.push(spawn())
      particlesRef.current = particlesRef.current.filter(p => p.life > 0)
      for (const p of particlesRef.current) {
        ctx.globalAlpha = p.life * 0.85
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x - p.vx * p.tail, p.y - p.vy * p.tail)
        ctx.strokeStyle = p.color
        ctx.lineWidth = p.r
        ctx.shadowColor = p.color
        ctx.shadowBlur = 10
        ctx.stroke()
        p.x += p.vx
        p.y += p.vy
        p.life -= p.decay
      }
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef])
}
