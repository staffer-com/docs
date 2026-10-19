export default function Graphic({ time, width, height, assets }) {
  // Section 1: the page an assistant sends you to before an action it can't take alone
  // (oauth/confirm/[id]/page.tsx in OAuthCard.tsx). ConnectionHeader: client mark (h-14 bordered white square,
  // logo h-8) ⇄ Staffer mark (h-14 rounded-md bg-worker). Title "{client} wants to do this", the summary in a
  // bordered box (genericSummary format), the once-only line, ghost Decline + primary Approve, then
  // "Signed in as …" under the card. 2x app scale.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const BORDER = '#eeeeee';
  const WORKER = '#0c2a79';
  const img = (k, s) => <img src={assets && assets[k] ? assets[k].url : ''} style={{ width: s, height: s }} />;
  const W = 448 * S;
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 52, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: W, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: `${32 * S}px ${24 * S}px ${24 * S}px`, textAlign: 'center' }}>
        <div style={{ marginBottom: 24 * S, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 * S }}>
          <span style={{ width: 56 * S, height: 56 * S, borderRadius: 6 * S, border: `1px solid ${BORDER}`, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{img('claude', 32 * S)}</span>
          {icon('arrowRightLeft', C.muted, 16 * S)}
          <span style={{ width: 56 * S, height: 56 * S, borderRadius: 6 * S, background: WORKER, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{img('staffer-mark-white', 32 * S)}</span>
        </div>
        <div style={{ fontSize: 20 * S, fontWeight: 600, letterSpacing: '-0.015em', color: C.text }}>Claude wants to do this</div>
        <div style={{ marginTop: 8 * S, fontSize: 14 * S, lineHeight: 1.45, color: C.muted }}>
          <div style={{ borderRadius: 8 * S, border: `1px solid ${BORDER}`, padding: 12 * S, textAlign: 'left', fontWeight: 500, color: C.text }}>
            Send the candidate a message — Erik Solberg on Store manager, Oslo. This reaches people outside the workspace.
          </div>
          <div style={{ marginTop: 12 * S }}>
            In <span style={{ color: C.text }}>Nordlys Retail</span>, as you. Only this exact action, once, and only for the next 10 minutes.
          </div>
          <div style={{ marginTop: 24 * S, display: 'flex', justifyContent: 'flex-end', gap: 8 * S }}>
            <div style={{ height: 36 * S, padding: `0 ${16 * S}px`, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', fontSize: 14 * S, fontWeight: 500, color: C.text }}>Decline</div>
            <div style={{ height: 36 * S, padding: `0 ${16 * S}px`, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', fontSize: 14 * S, fontWeight: 500, color: '#ffffff', background: C.primary }}>Approve</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16 * S, textAlign: 'center', fontSize: 12 * S, color: C.muted }}>
        Signed in as <span style={{ color: C.text }}>sara@example.com</span>
      </div>
      </div>
    </div>
  );
}
