export default function Graphic({ time, width, height, assets }) {
  // Section 1: the candidate's Messages tab (MessagesTab.tsx). Outgoing bubble bg-shirt-blue on the right,
  // the candidate's reply bg-muted/50 on the left, and the purple "Sounds not interested" badge under it.
  // Sender line: 16px avatar + name (text-[11px], font-medium). Bubbles rounded-2xl px-4 py-3 text-sm, max-w 460.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const MUTED50 = '#f4f3f3', SHIRT = '#c4ebf9';
  const sender = (k, name) => (
    <div style={{ marginBottom: 6 * S, display: 'flex', alignItems: 'center', gap: 8 * S, fontSize: 11 * S, color: C.muted }}>
      {photo(k, 16 * S)}<span style={{ fontWeight: 500, color: C.text }}>{name}</span>
    </div>
  );
  const bubble = (bg, text) => (
    <div style={{ alignSelf: 'stretch', borderRadius: 16 * S, padding: `${12 * S}px ${16 * S}px`, fontSize: 14 * S, lineHeight: 1.45, color: C.text, background: bg }}>{text}</div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 110, top: 40, width: 980, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: `${24 * S}px ${24 * S}px ${26 * S}px`, display: 'flex', flexDirection: 'column', gap: 28 * S }}>
        {/* outgoing */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', maxWidth: 380 * S }}>
            {sender('sara', 'Sara Lind')}
            {bubble(SHIRT, 'Hi Erik, I’m hiring a Product Designer at Nordlys and your design systems work stood out. Would you be open to a short call next week?')}
          </div>
        </div>
        {/* incoming reply, read by the AI */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 380 * S }}>
            {sender('erik', 'Erik Solberg')}
            {bubble(MUTED50, 'Thanks for thinking of me. I’ve just accepted another offer, so I’ll pass on this one. Good luck with the search.')}
            <div style={{ marginTop: 6 * S, height: 24 * S, padding: `0 ${8 * S}px`, borderRadius: 6 * S, background: BADGE.ai[0], color: BADGE.ai[1], fontSize: 12 * S, fontWeight: 500, display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>Sounds not interested</div>
          </div>
        </div>
      </div>
    </div>
  );
}
