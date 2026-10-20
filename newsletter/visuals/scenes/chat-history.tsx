export default function Graphic({ time, width, height, assets }) {
  // Section 3: Chat history open from the bar (ChatHistoryMenu.tsx): PopoverContent w-[380px] p-0, side top,
  // align end, sideOffset 8 (Popover.tsx: rounded-lg border bg-popover shadow-lg). Search input "Chat history"
  // (border-b px-3 py-2.5 text-sm), the "New chat" row (Plus 16), then sessions grouped Today / This week / Older
  // (label px-2 pt-2 pb-1 text-xs muted; rows px-2 py-1.5 gap-3 text-sm, current bg-muted/60 + "Current",
  // shortAge in a w-8 right-aligned text-xs column). Under it the ChatBar strip. 2x app scale.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const BORDER = C.cardBorder;
  const MUTED60 = 'rgba(232,231,230,0.6)';
  const tab = (t) => (
    <div style={{ maxWidth: 240 * S, borderRadius: 8 * S, fontSize: 14 * S, color: C.muted, padding: `${6 * S}px ${12 * S}px`, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t}</div>
  );
  const group = (label) => <div style={{ padding: `${8 * S}px ${8 * S}px ${4 * S}px`, fontSize: 12 * S, color: C.muted }}>{label}</div>;
  const row = (title, age, current) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 * S, borderRadius: 6 * S, padding: `${6 * S}px ${8 * S}px`, fontSize: 14 * S, color: C.text, background: current ? MUTED60 : 'transparent' }}>
      <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
      {current ? <span style={{ fontSize: 12 * S, color: C.muted }}>Current</span> : null}
      <span style={{ width: 32 * S, flexShrink: 0, textAlign: 'right', fontSize: 12 * S, color: C.muted }}>{age}</span>
    </div>
  );
  const PW = 380 * S;
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', right: 8 * S, bottom: (40 + 4) * S, width: PW, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 8 * S, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ borderBottom: `1px solid ${BORDER}`, padding: `${10 * S}px ${12 * S}px`, fontSize: 14 * S, color: C.muted, lineHeight: 1.43 }}>Chat history</div>
        <div style={{ borderBottom: `1px solid ${BORDER}`, padding: 4 * S }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 * S, borderRadius: 6 * S, padding: `${8 * S}px ${8 * S}px`, fontSize: 14 * S, color: C.text }}>
            {icon('plus', C.text, 16 * S, 2)}New chat
          </div>
        </div>
        <div style={{ padding: 4 * S }}>
          {group('Today')}
          {row('Interview times for Erik', '12m', true)}
          {row('Weekly pipeline review', '3h')}
          {group('This week')}
          {row('Store manager shortlist', '2d')}
          {row('Brief for Warehouse lead', '4d')}
          {group('Older')}
          {row('Graduate engineer criteria', '2w')}
          {row('Runners-up for the Oslo segment', '5w')}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 40 * S, boxSizing: 'border-box', paddingBottom: 4 * S, paddingRight: 8 * S, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 * S }}>
        {tab('Interview times for Erik')}
        {tab('Weekly pipeline review')}
        <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 8 * S, display: 'inline-flex', alignItems: 'center', gap: 6 * S, fontSize: 14 * S, fontWeight: 500, color: C.text }}>
          {icon('agent', C.text, 16 * S, 2)}Agent
        </div>
        <span style={{ width: 32 * S, height: 32 * S, borderRadius: 8 * S, background: '#e8e7e6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('history', C.text, 16 * S, 2)}</span>
      </div>
    </div>
  );
}
