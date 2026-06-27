import { useState } from 'react'

type Tab = 'outside' | 'inside'

const JOURNEY = [
  { icon: '✅', label: 'HTML + CSS + JS', note: 'Snake-Man born here', done: true },
  { icon: '✅', label: 'Git + GitHub + Netlify', note: 'deployment mastered', done: true },
  { icon: '⚡', label: 'React + TypeScript', note: 'Worm-Man born here', done: true, current: true },
  { icon: '🔒', label: 'Supabase', note: 'real data, real auth', done: false },
  { icon: '🔒', label: 'Tailwind + shadcn/ui', note: 'UI like the pros', done: false },
  { icon: '🔒', label: 'Full World 1 App', note: 'React + TS + Supabase', done: false },
  { icon: '🏆', label: 'Caffeine.ai style', note: 'the final boss', done: false },
]

export function VsSnakeMan() {
  const [tab, setTab] = useState<Tab>('outside')

  return (
    <section id="vs-snake" className="vs-section">

      <div className="vs-badge">⚗️ REAL VIBE-CODING EXPERIMENT — NOT FICTION</div>
      <h2 className="section-title">Worm vs Snake</h2>
      <p className="section-sub">Same look. Different DNA. Here is what we actually learned building both.</p>

      {/* Tab toggle */}
      <div className="vs-tabs">
        <button
          className={`vs-tab${tab === 'outside' ? ' active' : ''}`}
          onClick={() => setTab('outside')}
        >
          👁️ What you SEE
        </button>
        <button
          className={`vs-tab${tab === 'inside' ? ' active' : ''}`}
          onClick={() => setTab('inside')}
        >
          🧬 What's INSIDE
        </button>
      </div>

      {/* Comparison cards */}
      <div className="vs-grid">

        <div className="vs-card vs-snake">
          <div className="vs-card-header">
            <span className="vs-emoji">🐍</span>
            <div>
              <div className="vs-card-title">SNAKE-MAN</div>
              <div className="vs-card-stack">HTML · CSS · JavaScript</div>
            </div>
          </div>

          {tab === 'outside' ? (
            <div className="vs-content">
              <p className="vs-verdict vs-good">✔ Looks great in the browser</p>
              <p className="vs-verdict vs-good">✔ Fast to build</p>
              <p className="vs-verdict vs-good">✔ AI generates it cleanly</p>
              <p className="vs-verdict vs-good">✔ Zero setup required</p>
              <p className="vs-verdict vs-neutral">→ Lives at snake-lovers.netlify.app</p>
            </div>
          ) : (
            <div className="vs-content">
              <div className="vs-file-tree">
                <div className="vs-file">📄 index.html</div>
                <div className="vs-file">🎨 snake-lovers.css</div>
                <div className="vs-file vs-big">⚙️ snake-lovers.js
                  <span className="vs-note">← everything is in here<br/>navbar + hero + animations<br/>scroll effects + all logic<br/>grows into chaos at scale</span>
                </div>
              </div>
              <p className="vs-model">Mental model: <em>page → styles → script</em></p>
            </div>
          )}
        </div>

        <div className="vs-card vs-worm">
          <div className="vs-card-header">
            <span className="vs-emoji">🪱</span>
            <div>
              <div className="vs-card-title">WORM-MAN</div>
              <div className="vs-card-stack">React · TypeScript · Vite</div>
            </div>
          </div>

          {tab === 'outside' ? (
            <div className="vs-content">
              <p className="vs-verdict vs-good">✔ Looks identical in the browser</p>
              <p className="vs-verdict vs-good">✔ Scales to 100 screens</p>
              <p className="vs-verdict vs-good">✔ Same structure as Caffeine.ai</p>
              <p className="vs-verdict vs-warn">⚠ Requires Node.js + Vite setup</p>
              <p className="vs-verdict vs-neutral">→ You are looking at it right now</p>
            </div>
          ) : (
            <div className="vs-content">
              <div className="vs-file-tree">
                <div className="vs-file">📁 src/</div>
                <div className="vs-file vs-indent">⚙️ App.tsx <span className="vs-note-inline">← just 12 lines</span></div>
                <div className="vs-file vs-indent">📁 components/</div>
                <div className="vs-file vs-indent2">🧩 Navbar.tsx</div>
                <div className="vs-file vs-indent2">🧩 Hero.tsx</div>
                <div className="vs-file vs-indent2">🧩 Powers.tsx</div>
                <div className="vs-file vs-indent2 vs-muted">🧩 + 8 more...</div>
                <div className="vs-file vs-indent">📁 hooks/</div>
                <div className="vs-file vs-indent2 vs-muted">🔧 useScrollReveal.ts</div>
              </div>
              <p className="vs-model">Mental model: <em>UI = components + state</em></p>
            </div>
          )}
        </div>
      </div>

      {/* The honest truth */}
      <div className="vs-truth">
        <div className="vs-truth-icon">🤔</div>
        <h3>Why can't you see the difference?</h3>
        <p>
          Because the browser only speaks <strong>HTML, CSS, and JavaScript</strong> — always.
          React and TypeScript are compiled away before the browser ever sees them.
          What you see on screen is identical. What changes is everything <em>underneath</em>:
          how the code is organised, how it scales, and how AI tools like Caffeine.ai write it.
        </p>
        <p>
          The difference becomes visible the moment you add <strong>real data from a database</strong>,
          multiple pages, or user interactions that change the screen without reloading.
          That is exactly what comes next: Supabase.
        </p>
      </div>

      {/* Learning journey */}
      <div className="vs-journey">
        <h3 className="vs-journey-title">⚡ The Learning Journey</h3>
        <p className="vs-journey-sub">From Snake-Man to Caffeine.ai — one step at a time</p>
        <div className="vs-steps">
          {JOURNEY.map((step, i) => (
            <div key={i} className={`vs-step${step.done ? ' done' : ''}${step.current ? ' current' : ''}`}>
              <div className="vs-step-icon">{step.icon}</div>
              <div className="vs-step-body">
                <div className="vs-step-label">{step.label}</div>
                <div className="vs-step-note">{step.note}</div>
              </div>
              {i < JOURNEY.length - 1 && <div className="vs-step-line" />}
            </div>
          ))}
        </div>
      </div>

      {/* Goal callout */}
      <div className="vs-goal">
        <span className="vs-goal-icon">🏆</span>
        <div>
          <strong>The final objective:</strong> build World 1 apps with the exact same frontend
          structure Caffeine.ai uses — React + TypeScript + Tailwind + shadcn/ui —
          with Supabase instead of a Motoko canister. When that feels natural,
          the ICP backend becomes the only missing piece.
        </div>
      </div>

    </section>
  )
}
