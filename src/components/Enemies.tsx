import { useRef, useEffect } from 'react'

interface Enemy {
  badge: string
  arch?: boolean
  icon: string
  name: string
  desc: string
  threat: number
}

const ENEMIES: Enemy[] = [
  {
    badge: 'ARCH ENEMY',
    arch: true,
    icon: '🦅',
    name: 'The Robin',
    desc: "Worm-Man's greatest nemesis. Genetically enhanced with a robin's targeting instincts — the one creature that has hunted Worm-Man since day one.",
    threat: 98,
  },
  {
    badge: 'VILLAIN',
    icon: '🪤',
    name: 'The Tiller',
    desc: "Wields a weaponised rotary tiller that disrupts Worm-Man's underground tunnels — collapsing his escape routes and sealing him underground.",
    threat: 75,
  },
  {
    badge: 'VILLAIN',
    icon: '👑',
    name: 'Mole King',
    desc: 'A crime lord who stole Worm-Man\'s regeneration enzymes and weaponised them. Now sells bio-serums to the highest bidder behind an army of subterranean henchmen.',
    threat: 80,
  },
  {
    badge: 'VILLAIN',
    icon: '🧪',
    name: 'Dr. Pesticide',
    desc: 'A fanatical soil-purity zealot who believes Worm-Man is a biological contamination. His precision toxin cocktails make him lethally unpredictable.',
    threat: 71,
  },
]

function EnemyCard({ enemy }: { enemy: Enemy }) {
  const barRef = useRef<HTMLDivElement>(null)
  const observed = useRef(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !observed.current) {
          observed.current = true
          el.style.width = enemy.threat + '%'
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [enemy.threat])

  return (
    <div className="enemy-card">
      <div className={`enemy-badge${enemy.arch ? ' arch' : ''}`}>{enemy.badge}</div>
      <span className="enemy-icon">{enemy.icon}</span>
      <h3>{enemy.name}</h3>
      <p>{enemy.desc}</p>
      <div className="threat-row">
        <span>THREAT</span>
        <div className="power-bar">
          <div className="power-fill threat" ref={barRef} />
        </div>
      </div>
    </div>
  )
}

export function Enemies() {
  return (
    <section id="enemies" className="enemies-section">
      <h2 className="section-title">The Rogues Gallery</h2>
      <p className="section-sub">Every legend needs a villain worth fearing</p>
      <div className="enemies-grid">
        {ENEMIES.map(e => <EnemyCard key={e.name} enemy={e} />)}
      </div>
    </section>
  )
}
