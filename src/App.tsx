import { useEffect, useState } from 'react'
import { AlertBar } from './components/AlertBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Origin } from './components/Origin'
import { Powers } from './components/Powers'
import { StatsBanner } from './components/StatsBanner'
import { Enemies } from './components/Enemies'
import { Comics } from './components/Comics'
import { Join } from './components/Join'
import { Footer } from './components/Footer'
import { ClickBurst } from './components/ClickBurst'
import { VsSnakeMan } from './components/VsSnakeMan'
import { useScrollReveal } from './hooks/useScrollReveal'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ⬆
    </button>
  )
}

export default function App() {
  useScrollReveal('.power-card, .enemy-card, .origin-panel, .comic-card, .stat-item')

  return (
    <>
      <ClickBurst />
      <AlertBar />
      <BackToTop />
      <Navbar />
      <Hero />
      <Origin />
      <Powers />
      <StatsBanner />
      <Enemies />
      <Comics />
      <VsSnakeMan />
      <Join />
      <Footer />
    </>
  )
}
