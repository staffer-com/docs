export default function Graphic({ time, width, height, assets }) {
  // Section 3: the candidate's Activity tab (ActivityTab.tsx). Newest first. Each row: 24px avatar (teammate photo,
  // candidate photo, or the grey "Staffer" circle with Sparkles), a 1px line joining avatars, then
  // **Actor** action change · detail · time (text-sm). Messages and notes sit in a bordered card, clamped to 2 lines.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const BORDER = '#eeeeee';
  const staffer = (
    <div style={{ width: 24 * S, height: 24 * S, borderRadius: 9999, background: C.seg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon('sparkle', C.muted, 14 * S, 2)}</div>
  );
  const sb = (label, v, ic) => (
    <div style={{ height: 24 * S, padding: `0 ${8 * S}px`, borderRadius: 6 * S, background: BADGE[v][0], color: BADGE[v][1], fontSize: 12 * S, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 4 * S, whiteSpace: 'nowrap' }}>{ic ? icon(ic, BADGE[v][1], 12 * S, 2) : null}{label}</div>
  );
  const stepChip = (ic, colour, title) => <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 * S, fontWeight: 500 }}>{icon(ic, colour, 16 * S)}{title}</span>;
  const quote = (text) => (
    <div style={{ marginTop: 8 * S, borderRadius: 8 * S, border: `1px solid ${BORDER}`, background: '#ffffff', padding: `${10 * S}px ${12 * S}px`, fontSize: 14 * S, lineHeight: 1.45, color: 'rgba(10,11,12,0.9)' }}>{text}</div>
  );
  const rows = [
    { av: staffer, actor: 'Staffer', action: 'completed automatically', change: stepChip('userCheck', C.teal, 'Reference check'), when: '2 hours ago' },
    { av: staffer, actor: 'Staffer', action: 'received a reference from a manager', when: '5 hours ago' },
    { av: photo('erik', 24 * S), actor: 'Erik Solberg', action: 'added 2 referees', when: 'yesterday' },
    { av: photo('sara', 24 * S), actor: 'Sara Lind', action: 'moved the candidate to', change: sb('In progress', 'info', 'clock'), when: '3 days ago' },
    { av: photo('erik', 24 * S), actor: 'Erik Solberg', action: 'replied', when: '3 days ago', body: quote('Sounds good. Thursday afternoon works for me.') },
    { av: photo('sara', 24 * S), actor: 'Sara Lind', action: 'sent a message', when: '4 days ago', body: quote('Hi Erik, thanks for applying. Could you do a 30-minute call this week?') },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 60, top: 64, width: 1080, height: 700, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: `${22 * S}px ${24 * S}px` }}>
        {rows.map((r, i) => (
          <div key={i} style={{ position: 'relative', display: 'flex', gap: 12 * S, paddingBottom: 20 * S }}>
            {i < rows.length - 1 ? <div style={{ position: 'absolute', left: 12 * S, top: 28 * S, bottom: -1, width: 1.5, background: BORDER }} /> : null}
            <div style={{ position: 'relative' }}>{r.av}</div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ minHeight: 24 * S, display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 6 * S, rowGap: 4 * S, fontSize: 14 * S, color: C.text }}>
                <span style={{ fontWeight: 500 }}>{r.actor}</span>
                <span>{r.action}</span>
                {r.change || null}
                <span style={{ color: C.muted }}>· {r.when}</span>
              </div>
              {r.body || null}
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 150, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 88%)` }} />
    </div>
  );
}
