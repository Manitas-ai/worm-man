const PANELS = [
  {
    num: '01',
    icon: '🔬',
    title: 'The Scientist',
    text: 'Dr. Ellis Voss was Soilville\'s foremost soil biologist — obsessed with unlocking the regenerative secrets of earthworm biology to heal damaged ecosystems.',
  },
  {
    num: '02',
    icon: '⚗️',
    title: 'The Experiment',
    text: 'A classified government lab. A genetically-modified Giant Gippsland Earthworm. One moment of containment failure. The tunnelling chamber breached at 3:12 AM.',
  },
  {
    num: '03',
    icon: '🫀',
    title: 'The Transformation',
    text: 'Instead of being crushed, the worm\'s enzymatic secretions rewrote his cellular structure from the outside in. He spent 21 days cocooned in soil, regenerating.',
  },
  {
    num: '04',
    icon: '🪱',
    title: 'The Birth',
    text: 'Worm-Man emerged. His limbs can elongate and burrow through solid earth. He regenerates severed tissue in seconds. He is flexible, relentless, and impossible to stop.',
  },
]

export function Origin() {
  return (
    <section id="origin" className="origin-section">
      <h2 className="section-title">The Origin</h2>
      <p className="section-sub">One worm. One man. One legend.</p>

      <div className="origin-grid">
        {PANELS.map(p => (
          <div className="origin-panel" key={p.num}>
            <div className="panel-number">{p.num}</div>
            <div className="panel-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
