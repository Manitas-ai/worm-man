export function AlertBar() {
  const msg =
    '\u26A1 BREAKING: Worm-Man defeats The Exterminator — Soilville saved AGAIN \u00A0\u00A0\u26A1\u00A0\u00A0 ' +
    'The Mole King arrested — Worm-Man burrows twice in one night \u00A0\u00A0\u26A1\u00A0\u00A0 ' +
    'BREAKING: Worm-Man defeats The Exterminator — Soilville saved AGAIN \u00A0\u00A0\u26A1\u00A0\u00A0 ' +
    'The Mole King arrested — Worm-Man burrows twice in one night \u00A0\u00A0'

  return (
    <div className="alert-bar">
      <span className="marquee-text">{msg}</span>
    </div>
  )
}
