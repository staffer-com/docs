export default function Graphic({ time, width, height, assets }) {
  // Hero: the Process tab's "Mark not interested" recommendation (RecommendationCard.tsx, isDeclineReply branch).
  // RecHeader (title text-xl semibold, hint text-sm muted, purple "AI recommendation" badge + ghost "…" button),
  // QuotedMessage ("Their message · {when}", bg-muted/50 rounded-2xl), then the ChatComposer top edge, faded.
  // 2x app scale on a 1200x675 still.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const W = width || 1200, H = height || 675;
  const BORDER = '#eeeeee';
  const MUTED50 = '#f4f3f3';
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 150, top: 110, width: 900, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, overflow: 'hidden' }}>
        {/* RecHeader: px-6 pb-4 pt-6 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, padding: `${24 * S}px ${24 * S}px ${16 * S}px` }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 20 * S, lineHeight: 1.375, fontWeight: 600, color: C.text, letterSpacing: '-0.01em' }}>Mark not interested</div>
            <div style={{ marginTop: 4 * S, fontSize: 14 * S, lineHeight: 1.375, color: C.muted }}>Their last message reads as a no.</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 * S, flexShrink: 0 }}>
            <div style={{ height: 24 * S, padding: `0 ${8 * S}px`, borderRadius: 6 * S, background: BADGE.ai[0], color: BADGE.ai[1], fontSize: 12 * S, fontWeight: 500, display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>AI recommendation</div>
            <div style={{ width: 28 * S, height: 28 * S, borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon('more', C.text, 14 * S, 2)}</div>
          </div>
        </div>
        {/* QuotedMessage: px-6 pb-4 */}
        <div style={{ padding: `0 ${24 * S}px ${16 * S}px` }}>
          <div style={{ marginBottom: 6 * S, fontSize: 12 * S, color: C.muted }}>Their message · Oct 8, 14:32</div>
          <div style={{ borderRadius: 16 * S, background: MUTED50, padding: `${12 * S}px ${16 * S}px`, fontSize: 14 * S, lineHeight: 1.45, color: C.text }}>
            Thanks for thinking of me. I’ve just accepted another offer, so I’ll pass on this one. Good luck with the search.
          </div>
        </div>
        <div style={{ height: 260 }} />
      </div>
      {/* fade the crop into the page */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 190, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 85%)` }} />
    </div>
  );
}
