import { useState, useEffect, useRef } from 'react'

interface Power {
  icon: string
  title: string
  desc: string
  level: number
}

const POWERS: Power[] = [
  { icon: '💪', title: 'Annelid Strength', desc: 'His worm-arms generate 12 tonnes of lateral compression. No wall, no vault, no enemy can withstand his burrowing grip.', level: 95 },
  { icon: '🧬', title: 'Regenerative Slime', desc: 'Secretes a bio-enzyme coating on command. One touch dissolves armour and neutralises even the toughest villain.', level: 90 },
  { icon: '🛡️', title: 'Peristaltic Armour', desc: 'Muscular body-wall rings contract to form living armour. He absorbs direct impacts from heavy weaponry without flinching.', level: 88 },
  { icon: '📡', title: 'Seismic Sense', desc: 'Detects vibrations and soil disturbances within a 600 m radius. He feels the villain\'s footsteps before they even form a plan.', level: 97 },
  { icon: '🔄', title: 'Segment Rebirth', desc: 'Severed segments regenerate into full limbs within minutes. Invincibility is not an exaggeration — it is a biological fact.', level: 100 },
  { icon: '🌑', title: 'Darkness Sight', desc: 'Eyes adapted for total subterranean darkness emit a hypnotic bio-light. One glance underground and enemies freeze in disorientation.', level: 82 },
]

function PowerCard({ power }: { power: Power }) {
  const [activated, setActivated] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)
  const observed = useRef(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !observed.current) {
          observed.current = true
          el.style.width = power.level + '%'
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [power.level])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -12
    const rotY = ((x - cx) / cx) * 12
    e.currentTarget.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget.style.transform = ''
  }

  return (
    <div
      className={`power-card${activated ? ' activated' : ''}`}
      onClick={() => setActivated(a => !a)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="power-glow" />
      <span className="power-icon">{power.icon}</span>
      <h3>{power.title}</h3>
      <p>{power.desc}</p>
      <div className="power-level">
        <span>POWER LEVEL</span>
        <div className="power-bar">
          <div className="power-fill" ref={barRef} />
        </div>
      </div>
    </div>
  )
}

export function Powers() {
  return (
    <section id="powers" className="powers-section">
      <h2 className="section-title">Worm Powers</h2>
      <p className="section-sub">Click a card to activate</p>
      <div className="powers-grid">
        {POWERS.map(p => <PowerCard key={p.title} power={p} />)}
      </div>
    </section>
  )
}
