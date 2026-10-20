export default function Graphic({ time, width, height, assets }) {
  // Section 1: the bottom-right corner of a role page. ChatBar.tsx: the strip under the canvas (h-10, pr-2,
  // gap-1) with recent chats as tabs (rounded-lg text-sm muted, py-1.5 pl-3, max-w-[240px], justify-end), the
  // Agent ghost sm rounded-md button (aria-pressed → bg-accent) and the Chat history iconMd button (History).
  // Above it the ChatPopup (fixed bottom-12 right-4, w-[440px], rounded-3xl, border, card) on a new chat, cropped
  // at the top with a fade: ROLE_STARTERS from ConversationStarters.tsx and the composer with the Context lip
  // ("{role} · {Tab}", GlobalChatProvider contextFor). 2x app scale.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const BORDER = C.cardBorder;
  const ACCENT = '#e8e7e6';
  const starter = (ic, text) => (
    <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 6 * S, fontSize: 14 * S, fontWeight: 500, color: C.text, whiteSpace: 'nowrap' }}>
      {icon(ic, C.text, 16 * S, 2)}<span>{text}</span>
    </div>
  );
  const tab = (t) => (
    <div style={{ maxWidth: 240 * S, borderRadius: 8 * S, display: 'flex', alignItems: 'center', fontSize: 14 * S, color: C.muted, padding: `${6 * S}px ${12 * S}px`, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t}</div>
  );
  const H = height || 820;
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', right: 16 * S, bottom: 48 * S, width: 440 * S, height: 640 * S, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 24 * S, boxShadow: '0 12px 60px -18px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 16 * S, padding: `0 ${12 * S}px ${12 * S}px`, overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 * S }}>
          {starter('clipboard', 'Summarise where this role stands')}
          {starter('userSearch', 'Find more candidates for this role')}
          {starter('clock', 'Who in the pipeline needs a follow-up?')}
          {starter('mail', 'Draft an outreach message for this role')}
        </div>
        <div>
          <div style={{ marginBottom: -12 * S, display: 'flex', alignItems: 'center', gap: 6 * S, borderRadius: `${16 * S}px ${16 * S}px 0 0`, background: BADGE.info[0], color: BADGE.info[1], padding: `${6 * S}px ${16 * S}px ${16 * S}px`, fontSize: 12 * S }}>
            {icon('target', BADGE.info[1], 14 * S, 2)}<span>Context:</span><span style={{ fontWeight: 500 }}>Store manager, Oslo · Brief</span>
          </div>
          <div style={{ position: 'relative', borderRadius: 16 * S, border: `1px solid ${BORDER}`, background: '#ffffff', padding: 8 * S, boxShadow: '0 1px 2px 0 rgba(0,0,0,0.02), 0 4px 16px -8px rgba(0,0,0,0.05)' }}>
            <div style={{ minHeight: 40 * S, padding: `${8 * S}px ${8 * S}px`, fontSize: 14 * S, lineHeight: `${24 * S}px`, color: C.muted, boxSizing: 'border-box' }}>Ask anything</div>
            <div style={{ marginTop: 4 * S, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 * S }}>
                <span style={{ width: 32 * S, height: 32 * S, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('plus', C.text, 16 * S, 2)}</span>
                <span style={{ height: 32 * S, padding: `0 ${8 * S}px`, display: 'inline-flex', alignItems: 'center', gap: 4 * S, fontSize: 12 * S, fontWeight: 500, color: C.text }}>Ask permission{icon('chevronDown', C.text, 12 * S, 2)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 * S }}>
                <span style={{ width: 32 * S, height: 32 * S, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('mic', C.muted, 16 * S, 2)}</span>
                <span style={{ width: 32 * S, height: 32 * S, borderRadius: 9999, background: SURF, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('arrowUp', '#f9fafb', 16 * S, 2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fade the cropped top of the panel into the page. */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 150, background: `linear-gradient(${PAPER}, rgba(248,246,245,0))` }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 40 * S, boxSizing: 'border-box', paddingBottom: 4 * S, paddingRight: 8 * S, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 * S }}>
        {tab('Store manager shortlist')}
        {tab('Weekly pipeline review')}
        <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 8 * S, background: ACCENT, display: 'inline-flex', alignItems: 'center', gap: 6 * S, fontSize: 14 * S, fontWeight: 500, color: C.text }}>
          {icon('agent', C.text, 16 * S, 2)}Agent
        </div>
        <span style={{ width: 32 * S, height: 32 * S, borderRadius: 8 * S, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('history', C.text, 16 * S, 2)}</span>
      </div>
    </div>
  );
}
