import { useCounter } from '../hooks/useCounter'

function Stat({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const { value, elRef } = useCounter(target)
  return (
    <div className="stat-item">
      <h2>
        <span ref={elRef as React.RefObject<HTMLSpanElement>}>{value.toLocaleString()}</span>
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  )
}

export function StatsBanner() {
  return (
    <section className="stats-banner">
      <Stat target={847} suffix="+" label="Villains Defeated" />
      <Stat target={12} label="Cities Protected" />
      <Stat target={9} label="Years Active" />
      <Stat target={3} suffix="M" label="Fans Worldwide" />
    </section>
  )
}
