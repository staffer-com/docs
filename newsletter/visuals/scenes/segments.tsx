export default function Graphic({ time, width, height, assets }) {
  // Section 2: the Segments page table (SegmentsPageClient.tsx) with its default columns: Name (SegmentDot +
  // name, plain description under it), Talent, New (30 days) as "+n" or "—", Last activity (relativeTime: 5h, 2d,
  // Oct 2), Intake ("n roles" or "Manual"), Engagement (h-1 w-12 bg-positive meter + pct), then the row menu.
  // Toolbar: "All segments" pill tab, search / filter / display icon buttons. Last activity is hidden from
  // Display (a real toggle) so the rest fit at 1.5x app scale.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 1.5;
  const BORDER = '#eeeeee';
  const GREEN = '#35973a';
  const DOT = { amber: '#f59e0b', blue: '#3b82f6', green: '#22c55e', violet: '#8b5cf6', teal: '#14b8a6' };
  const rows = [
    ['teal', 'Returning seasonal staff', 'Everyone who worked a summer or Christmas season with us', 210, 38, '1h', '2 roles', 71],
    ['blue', 'Graduate engineers 2027', 'Final-year students for the 2027 graduate programme', 124, 21, '5h', '1 role', 62],
    ['amber', 'Store managers, Oslo', 'Runners-up from store manager hires in Oslo', 38, 6, '2d', '3 roles', 47],
    ['violet', 'Customer service, Nordics', null, 56, 4, '6d', '1 role', 30],
    ['green', 'Warehouse leads, Bergen', null, 17, 0, 'Oct 2', 'Manual', 12],
  ];
  const th = (t, right, w) => <div style={{ width: w, flex: w ? 'none' : 1, padding: `0 ${8 * S}px`, textAlign: right ? 'right' : 'left', fontSize: 14 * S, fontWeight: 500, color: C.muted, whiteSpace: 'nowrap' }}>{t}</div>;
  const td = (c, right, w, colour) => <div style={{ width: w, flex: w ? 'none' : 1, minWidth: 0, padding: `0 ${8 * S}px`, textAlign: right ? 'right' : 'left', fontSize: 14 * S, color: colour || C.muted, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{c}</div>;
  const W = { talent: 64 * S, new: 116 * S, act: 104 * S, intake: 84 * S, eng: 108 * S, more: 32 * S };
  const iconBtn = (n) => <div style={{ width: 36 * S, height: 36 * S, borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon(n, C.muted, 16 * S, 2)}</div>;
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 40, top: 56, width: 1120, height: 680, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: `${16 * S}px ${16 * S}px` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 * S }}>
          <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, background: C.seg, display: 'inline-flex', alignItems: 'center', fontSize: 14 * S, fontWeight: 500, color: C.text }}>All segments</div>
          <div style={{ display: 'flex', gap: 2 * S }}>{iconBtn('search')}{iconBtn('filter')}{iconBtn('sliders')}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: 40 * S, borderBottom: `1px solid ${BORDER}` }}>
          {th('Name')}{th('Talent', true, W.talent)}{th('New (30 days)', true, W.new)}{th('Intake', false, W.intake)}{th('Engagement', false, W.eng)}<div style={{ width: W.more }} />
        </div>
        {rows.map(([dot, name, desc, talent, nw, act, intake, eng]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', minHeight: 56 * S, borderBottom: `1px solid ${BORDER}` }}>
            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', padding: `${8 * S}px ${8 * S}px` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 * S, fontSize: 14 * S, fontWeight: 500, color: C.text, whiteSpace: 'nowrap' }}>
                <span style={{ width: 10 * S, height: 10 * S, borderRadius: 9999, background: DOT[dot], flexShrink: 0 }} />{name}
              </div>
              {desc ? <div style={{ marginTop: 2 * S, paddingLeft: 20 * S, fontSize: 12 * S, color: C.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{desc}</div> : null}
            </div>
            {td(talent, true, W.talent)}
            {td(nw > 0 ? `+${nw}` : '—', true, W.new)}
            {td(intake, false, W.intake)}
            <div style={{ width: W.eng, padding: `0 ${8 * S}px`, display: 'flex', alignItems: 'center', gap: 8 * S }}>
              <span style={{ width: 48 * S, height: 4 * S, borderRadius: 9999, background: C.seg, overflow: 'hidden' }}><span style={{ display: 'block', height: '100%', width: `${eng}%`, background: GREEN, borderRadius: 9999 }} /></span>
              <span style={{ fontSize: 14 * S, color: 'rgba(10,11,12,0.9)', fontVariantNumeric: 'tabular-nums' }}>{eng}%</span>
            </div>
            <div style={{ width: W.more, display: 'flex', justifyContent: 'center' }}>{icon('more', C.muted, 16 * S, 2)}</div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 130, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 88%)` }} />
    </div>
  );
}
