export default function Graphic({ time, width, height, assets }) {
  // Section 4: a running search on the Scouting tab (ScoutingTab.tsx). GroupHeader: h-12 rounded-md bg-gray-50,
  // chevron (open), Search icon, title, muted Count, "Searching · 24s", then the ghost "Search actions" button
  // with its DropdownMenu open: Re-score, Stop search (only while running), Rerun search (disabled while
  // running), Download as CSV, Delete search (destructive). Two result rows (CompactScore: filled current, outlined potential, score-good = positive) and a
  // skeleton row below. 2x scale.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const BORDER = '#eeeeee';
  const GRAY50 = '#f4f3f3';
  const mi = (ic, label, opts) => (
    <div style={{ height: 32 * S, padding: `0 ${8 * S}px`, borderRadius: 4 * S, display: 'flex', alignItems: 'center', gap: 8 * S, fontSize: 14 * S, background: opts && opts.hover ? C.hover : 'transparent', color: opts && opts.red ? C.red : C.text, opacity: opts && opts.off ? 0.5 : 1 }}>
      {icon(ic, opts && opts.red ? C.red : C.text, 16 * S, 2)}{label}
    </div>
  );
  const GOOD = '#35973a';
  const score = (n, filled) => <div style={{ width: 24 * S, height: 24 * S, borderRadius: 9999, boxSizing: 'border-box', border: filled ? 'none' : `${1 * S}px solid ${GOOD}`, background: filled ? GOOD : 'transparent', color: filled ? '#f7f5f4' : GOOD, fontSize: 10 * S, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</div>;
  const row = (p, name, title, a, b) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 * S, height: 56 * S, borderBottom: `1px solid ${BORDER}`, padding: `0 ${12 * S}px`, fontSize: 14 * S }}>
      <span style={{ width: 16 * S, height: 16 * S, borderRadius: 4 * S, border: `1px solid ${C.inputBorder}` }} />
      {icon('bookmark', C.muted, 16 * S, 2)}
      {photo(p, 28 * S)}
      <div style={{ minWidth: 0, flex: 1 }}><div style={{ fontWeight: 500, color: C.text }}>{name}</div><div style={{ fontSize: 12 * S, color: C.muted }}>{title}</div></div>
      <div style={{ display: 'flex', gap: 2 * S }}>{score(a, true)}{score(b, false)}</div>
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 60, top: 56, width: 1080, height: 700, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: 16 * S }}>
        <div style={{ height: 48 * S, borderRadius: 6 * S, background: GRAY50, padding: `0 ${12 * S}px`, display: 'flex', alignItems: 'center', gap: 8 * S, fontSize: 14 * S, color: C.text }}>
          <span style={{ display: 'inline-flex', transform: 'rotate(90deg)' }}>{icon('chevronRight', C.muted, 16 * S, 2.5)}</span>
          {icon('search', C.muted, 16 * S, 2)}
          <span style={{ flex: 1, minWidth: 0, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Store managers in Oslo with retail experience</span>
          <span style={{ height: 18 * S, minWidth: 18 * S, padding: `0 ${6 * S}px`, borderRadius: 9999, background: '#ffffff', fontSize: 11 * S, fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>18</span>
          <span style={{ fontSize: 12 * S, color: C.muted, whiteSpace: 'nowrap' }}>Searching · 24s</span>
          <div style={{ width: 32 * S, height: 32 * S, borderRadius: 9999, background: C.seg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon('more', C.text, 16 * S, 2)}</div>
        </div>
        <div style={{ marginTop: 4 * S }}>
          {row('sara', 'Sara Lind', 'Assistant store manager', 86, 91)}
          {row('sam', 'Sam Nilsen', 'Department manager', 79, 88)}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 * S, height: 56 * S, padding: `0 ${12 * S}px` }}>
            <span style={{ width: 28 * S, height: 28 * S, borderRadius: 9999, background: C.seg }} />
            <span style={{ width: 160 * S, height: 10 * S, borderRadius: 9999, background: C.seg }} />
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 60 + 1080 - 32 - 192 * S + 4, top: 56 + 32 + 44 * S, width: 192 * S, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 8 * S, boxShadow: '0 4px 6px rgba(5,6,7,0.05), 0 12px 32px rgba(5,6,7,0.10)', padding: 4 * S }}>
        {mi('refresh', 'Re-score')}
        {mi('stopCircle', 'Stop search', { hover: true })}
        {mi('repeat', 'Rerun search', { off: true })}
        {mi('download', 'Download as CSV')}
        {mi('trash', 'Delete search', { red: true })}
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 130, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 88%)` }} />
    </div>
  );
}
