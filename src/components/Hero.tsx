import { useRef } from 'react'
import { useParticles } from '../hooks/useParticles'
import { useTypewriter } from '../hooks/useTypewriter'
import { useCounter } from '../hooks/useCounter'

const PHRASES = [
  'The Underground Avenger',
  'Faster. Deeper. Unstoppable.',
  "He Didn't Die. He Tunnelled Back.",
  'One Inch Changed Everything.',
]

function StatCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const { value, elRef } = useCounter(target)
  return (
    <span ref={elRef as React.RefObject<HTMLSpanElement>}>
      {value.toLocaleString()}{suffix}
    </span>
  )
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useParticles(canvasRef)
  const tagline = useTypewriter(PHRASES)

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="particles-canvas" />

      <div className="hero-content">
        <div className="hero-badge">⚡ MARVEL'S MOST TENACIOUS HERO ⚡</div>

        <h1 className="hero-title">
          WORM<span className="highlight">MAN</span>
        </h1>

        <p className="hero-tagline">
          {tagline}<span className="cursor" />
        </p>

        <p className="hero-sub">
          Part human. Part annelid. All legend. When Dr.&nbsp;Ellis Voss was swallowed whole by a
          genetically-altered Giant Gippsland Earthworm, he didn't dissolve &mdash; he&nbsp;
          <em>transformed.</em>
        </p>

        <div className="hero-btns">
          <a href="#origin" className="btn btn-primary">His Origin</a>
          <a href="#powers" className="btn btn-outline">His Powers</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <StatCounter target={847} />+
          <p>Villains Defeated</p>
        </div>
        <div className="hero-stat">
          <StatCounter target={12} />
          <p>Cities Protected</p>
        </div>
        <div className="hero-stat">
          <StatCounter target={100} suffix="%" />
          <p>Invincible</p>
        </div>
      </div>
    </section>
  )
}
