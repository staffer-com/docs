export default function Graphic({ time, width, height, assets }) {
  // Hero: the Details rail on a job's Brief tab (BriefDraft.tsx Details: SectionHeading "Details" text-xl semibold
  // tracking-tight mb-3, then <dl grid-cols-[140px_1fr] gap-x-6 gap-y-1 text-sm>). Rows in production order: Status
  // (StatusDetail, RoleStatusGlyph open = ProgressCircle text-positive h-3.5), then RoleGroupingDetails.tsx's Project
  // (Folder), Members (MembersDetail in _job-canvas/people-picker.tsx: MembersValue = h-5 w-5 avatars, -space-x-1.5,
  // ring-2 ring-background, p-0.5, gap-2, "{n} members") and Team (Building2 + TeamDot h-2.5 emerald-500), then
  // Openings, Function, Engagement. DetailShell.tsx: dt = min-h-8 gap-2 muted-foreground + h-4 icon at 1.75; dd = ghost
  // sm pill Button (h-8 px-3 font-medium, value text-foreground/90). Members is shown hovered (ghost hover:bg-accent).
  // Sits on the Canvas panel (Canvas.tsx: rounded-xl border-canvas-border bg-canvas). 2x app scale, faded at the bottom.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  // styles.css light tokens: foreground gray-950, muted-foreground gray-600, accent gray-100, background gray-50,
  // canvas gray-25, canvas-border = border gray-75, positive turf-green. Team dot: bg-emerald-500 (team-colors.ts).
  const FG90 = 'rgba(5,6,7,0.9)';
  const FG = '#050607';
  const MUTEDFG = '#817e7c';
  const ACCENT = '#eae7e5';
  const BG = '#f7f5f4';
  const CANVAS = '#fcfaf9';
  const CANVAS_BORDER = '#f0eeed';
  const POSITIVE = '#35973a';
  const EMERALD = '#10b981';
  const label = (ic, text) => (
    <div style={{ minHeight: 32 * S, display: 'flex', alignItems: 'center', gap: 8 * S, color: MUTEDFG, whiteSpace: 'nowrap' }}>
      {icon(ic, MUTEDFG, 16 * S, 1.75)}{text}
    </div>
  );
  const ghost = (value, hovered) => (
    <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
      <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, background: hovered ? ACCENT : 'transparent', display: 'inline-flex', alignItems: 'center', fontWeight: 500, color: FG90, whiteSpace: 'nowrap' }}>{value}</div>
    </div>
  );
  const face = (k, i) => (
    <span key={k} style={{ width: 20 * S, height: 20 * S, borderRadius: 9999, overflow: 'hidden', marginLeft: i ? -6 * S : 0, boxShadow: `0 0 0 ${2 * S}px ${BG}`, display: 'inline-flex', position: 'relative', flexShrink: 0 }}>
      <img src={assets && assets[k] ? assets[k].url : ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </span>
  );
  const rows = [
    ['progress', 'Status', ghost(<span style={{ display: 'flex', alignItems: 'center', gap: 8 * S }}>{icon('progress', POSITIVE, 14 * S, 2)}Open</span>)],
    ['folder', 'Project', ghost('Oslo store openings')],
    ['users', 'Members', ghost(
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 * S }}>
        <span style={{ display: 'flex', alignItems: 'center', padding: 2 * S }}>{['sara', 'erik', 'emily'].map(face)}</span>
        3 members
      </span>, true)],
    ['building', 'Team', ghost(<span style={{ display: 'flex', alignItems: 'center', gap: 8 * S }}><span style={{ width: 10 * S, height: 10 * S, borderRadius: 9999, background: EMERALD, flexShrink: 0 }} />Retail</span>)],
    ['users', 'Openings', ghost('2 to hire')],
    ['briefcase', 'Function', ghost('Operations')],
    ['layers', 'Engagement', ghost('Full-time')],
    ['building', 'Work mode', ghost('On-site')],
  ];
  const RAIL = 360 * S;
  const PAD = 36 * S;
  const PANEL_W = RAIL + PAD * 2;
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: (1200 - PANEL_W) / 2, top: 40, width: PANEL_W, height: 760, boxSizing: 'border-box', background: CANVAS, border: `1px solid ${CANVAS_BORDER}`, borderRadius: 12 * S, boxShadow: FLOAT, padding: `${24 * S}px ${PAD}px` }}>
        <div style={{ marginBottom: 12 * S, fontSize: 20 * S, lineHeight: `${28 * S}px`, fontWeight: 600, letterSpacing: '-0.025em', color: FG }}>Details</div>
        <div style={{ display: 'grid', gridTemplateColumns: `${140 * S}px 1fr`, columnGap: 24 * S, rowGap: 4 * S, fontSize: 14 * S, lineHeight: `${20 * S}px` }}>
          {rows.map(([ic, text, value]) => [
            <div key={text + 'dt'}>{label(ic, text)}</div>,
            <div key={text + 'dd'} style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>{value}</div>,
          ])}
        </div>
      </div>
      {/* The rail runs on below the crop: fade it into the page. */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 190, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 82%)` }} />
    </div>
  );
}
