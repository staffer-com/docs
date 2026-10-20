export default function Graphic({ time, width, height, assets }) {
  // Hero: the agent's corner panel on a new chat (chat/ChatPopup.tsx): rounded-3xl bordered card with the
  // 0_8px_40px_-12px shadow, h-14 header (title "New chat" text-base medium, iconSm ghost pills: Chat actions
  // MoreHorizontal, Minimize chat Minus, Open full screen Expand, Close chat X), then the empty state:
  // ConversationStarters (ghost sm buttons, icon 16, WORKSPACE_STARTERS) above ChatComposer: the info-surface
  // "Context:" lip (Target 14, text-xs) behind the box (InputPill variant="box": rounded-2xl border p-2,
  // "Ask anything", toolbar: Plus iconMd, PermissionModePicker inline "Ask permission" + ChevronDown, Mic, SendButton sm).
  // 1.5x app scale so the whole panel fits a 1200x675 still.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 1.5;
  const BORDER = C.cardBorder;
  const iconBtn = (name, label) => (
    <span aria-label={label} style={{ width: 28 * S, height: 28 * S, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon(name, C.text, 16 * S, 2)}</span>
  );
  const starter = (ic, text) => (
    <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 6 * S, fontSize: 14 * S, fontWeight: 500, color: C.text, whiteSpace: 'nowrap' }}>
      {icon(ic, C.text, 16 * S, 2)}<span>{text}</span>
    </div>
  );
  const PW = 440 * S, PH = 410 * S;
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: (1200 - PW) / 2, top: (675 - PH) / 2, width: PW, height: PH, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 24 * S, boxShadow: '0 12px 60px -18px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ height: 56 * S, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 * S, paddingLeft: 20 * S, paddingRight: 12 * S }}>
          <div style={{ flex: 1, fontSize: 16 * S, fontWeight: 500, color: C.text }}>New chat</div>
          {iconBtn('more', 'Chat actions')}
          {iconBtn('minus', 'Minimize chat')}
          {iconBtn('expand', 'Open full screen')}
          {iconBtn('x', 'Close chat')}
        </div>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 16 * S, padding: `0 ${12 * S}px ${12 * S}px` }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 * S }}>
            {starter('fileText', "Help me write a brief for a role I'm hiring for")}
            {starter('target', 'Which of my roles need attention this week?')}
            {starter('chartBar', 'Summarise my pipeline across open roles')}
          </div>
          <div>
            <div style={{ marginBottom: -12 * S, display: 'flex', alignItems: 'center', gap: 6 * S, borderRadius: `${16 * S}px ${16 * S}px 0 0`, background: BADGE.info[0], color: BADGE.info[1], padding: `${6 * S}px ${16 * S}px ${16 * S}px`, fontSize: 12 * S }}>
              {icon('target', BADGE.info[1], 14 * S, 2)}<span>Context:</span><span style={{ fontWeight: 500 }}>Talent pool</span>
            </div>
            <div style={{ position: 'relative', borderRadius: 16 * S, border: `1px solid ${BORDER}`, background: '#ffffff', padding: 8 * S, boxShadow: '0 1px 2px 0 rgba(0,0,0,0.02), 0 4px 16px -8px rgba(0,0,0,0.05)' }}>
              <div style={{ minHeight: 40 * S, padding: `${8 * S}px ${8 * S}px`, fontSize: 14 * S, lineHeight: `${24 * S}px`, color: C.muted, boxSizing: 'border-box' }}>Ask anything</div>
              <div style={{ marginTop: 4 * S, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 * S }}>
                  <span style={{ width: 32 * S, height: 32 * S, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('plus', C.text, 16 * S, 2)}</span>
                  <span style={{ height: 32 * S, padding: `0 ${8 * S}px`, display: 'inline-flex', alignItems: 'center', gap: 4 * S, fontSize: 12 * S, fontWeight: 500, color: C.text }}>Ask permission{icon('chevronDown', C.text, 12 * S, 2)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 * S }}>
                  <span style={{ width: 32 * S, height: 32 * S, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('mic', C.muted, 16 * S, 2)}</span>
                  <span style={{ width: 32 * S, height: 32 * S, borderRadius: 9999, background: SURF, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('arrowUp', '#f9fafb', 16 * S, 2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
