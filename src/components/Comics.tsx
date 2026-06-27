interface Comic {
  issue: string
  icon: string
  title: string
  blurb: string
  tag: string
  featured?: boolean
}

const COMICS: Comic[] = [
  {
    issue: '#47',
    icon: '🪱',
    title: 'DEEP RISING',
    blurb: '"The Robin has poisoned the Soilville aquifer. The city has 48 hours. Worm-Man has one tunnel left."',
    tag: 'LATEST ISSUE',
    featured: true,
  },
  {
    issue: '#46',
    icon: '🌑',
    title: 'UNDER THE SOIL',
    blurb: '"The Tiller\'s rotary blades reach a depth Worm-Man cannot escape. Can Ellis Voss outrun his own tunnels?"',
    tag: 'PREVIOUS',
  },
  {
    issue: '#45',
    icon: '🫀',
    title: 'SECOND SKIN',
    blurb: '"Worm-Man\'s regeneration begins to slow. For the first time, a wound does not close. The city doesn\'t know it yet."',
    tag: 'PREVIOUS',
  },
]

export function Comics() {
  return (
    <section id="comics" className="comics-section">
      <h2 className="section-title">Latest Issues</h2>
      <p className="section-sub">The Worm-Man Universe &mdash; ongoing since 2017</p>

      <div className="comics-grid">
        {COMICS.map(c => (
          <div className={`comic-card${c.featured ? ' featured' : ''}`} key={c.issue}>
            <div className="comic-issue">{c.issue}</div>
            <div className="comic-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.blurb}</p>
            <span className="comic-tag">{c.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
