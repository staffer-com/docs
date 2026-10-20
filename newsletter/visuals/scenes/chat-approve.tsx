export default function Graphic({ time, width, height, assets }) {
  // Section 2: the corner panel mid-conversation, from no role open (ChatPopup.tsx header, ChatShell content
  // px-3 pt-4 gap-5). The user bubble (MessageBubble: rounded-3xl bg-muted px-4 py-2 text-sm, max-w-[88%], right),
  // the assistant's Markdown reply, then ConfirmationRecord: rounded-lg border bg-card p-3 text-sm, the gated
  // operation's summary ("Send the candidate a message", applications.messages.send via workspace-tools.ts
  // withGate) and ghost sm "Reject" + default sm "Approve". Cropped below with a fade. 2x app scale.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const BORDER = C.cardBorder;
  const MUTED = '#e8e7e6';
  const iconBtn = (name) => (
    <span style={{ width: 28 * S, height: 28 * S, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon(name, C.text, 16 * S, 2)}</span>
  );
  const PW = 440 * S;
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: (1200 - PW) / 2, top: 44, width: PW, height: 900, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 24 * S, boxShadow: '0 12px 60px -18px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
        <div style={{ height: 56 * S, display: 'flex', alignItems: 'center', gap: 4 * S, paddingLeft: 20 * S, paddingRight: 12 * S }}>
          <div style={{ flex: 1, fontSize: 16 * S, fontWeight: 500, color: C.text }}>Interview times for Erik</div>
          {iconBtn('more')}{iconBtn('minus')}{iconBtn('expand')}{iconBtn('x')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 * S, padding: `${16 * S}px ${12 * S}px 0` }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ maxWidth: '88%', borderRadius: 24 * S, background: MUTED, padding: `${8 * S}px ${16 * S}px`, fontSize: 14 * S, lineHeight: 1.625, color: C.text }}>
              Email Erik Solberg the two Thursday interview slots for Store manager, Oslo.
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6 * S }}>
            <div style={{ maxWidth: '88%', fontSize: 14 * S, lineHeight: 1.625, color: C.text }}>
              I'll email Erik with both Thursday slots, 10:00 and 14:00, and ask which one works best.
            </div>
            <div style={{ borderRadius: 8 * S, border: `1px solid ${BORDER}`, background: '#ffffff', padding: 12 * S, fontSize: 14 * S }}>
              <div style={{ color: 'rgba(10,11,12,0.9)' }}>Send the candidate a message</div>
              <div style={{ marginTop: 8 * S, display: 'flex', justifyContent: 'flex-end', gap: 6 * S }}>
                <span style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', fontSize: 14 * S, fontWeight: 500, color: C.text }}>Reject</span>
                <span style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', fontSize: 14 * S, fontWeight: 500, color: '#ffffff', background: C.primary }}>Approve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 70, background: `linear-gradient(rgba(248,246,245,0), ${PAPER})` }} />
    </div>
  );
}
