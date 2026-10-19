export default function Graphic({ time, width, height, assets }) {
  // Section 3: the sidebar's top group, which is yours across every workspace (Sidebar.tsx: NotificationBell,
  // My applications, Calendar, Agent), above the "Workspace" fold (Projects, Roles, Applications, Messages,
  // Talent pool, Segments, Analytics). Beside it, the My applications page header with its four pill tabs
  // (MyApplicationsPageClient.tsx) and rows whose role cell reads "role · workspace" (CandidatesTable.tsx).
  // SidebarMenuButton: h-8 rounded-md px-2 gap-2 text-sm, active = accent fill + medium. Counts: Count accent pill.
  // 1.6x app scale so the page beside the sidebar fits, cropped at the bottom.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 1.6;
  const BORDER = '#eeeeee';
  const pill = (n) => <span style={{ marginLeft: 'auto', height: 18 * S, minWidth: 18 * S, padding: `0 ${6 * S}px`, boxSizing: 'border-box', borderRadius: 9999, background: SURF, color: '#ffffff', fontSize: 11 * S, fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{n}</span>;
  const item = (ic, label, opts) => (
    <div style={{ height: 32 * S, padding: `0 ${8 * S}px`, borderRadius: 6 * S, display: 'flex', alignItems: 'center', gap: 8 * S, fontSize: 14 * S, color: C.text, background: opts && opts.on ? C.seg : 'transparent', fontWeight: opts && opts.on ? 500 : 400 }}>
      {icon(ic, C.text, 16 * S, 2)}<span>{label}</span>{opts && opts.n ? pill(opts.n) : null}
    </div>
  );
  const tab = (t, on) => <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, background: on ? C.seg : 'transparent', display: 'inline-flex', alignItems: 'center', fontSize: 14 * S, fontWeight: 500, color: on ? C.text : C.muted }}>{t}</div>;
  const sb = (label, v) => <span style={{ height: 24 * S, padding: `0 ${8 * S}px`, borderRadius: 6 * S, background: BADGE[v][0], color: BADGE[v][1], fontSize: 12 * S, fontWeight: 500, display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>{label}</span>;
  const rows = [
    ['erik', 'Erik Solberg', 'Store manager', 'Nordlys Retail', 'In progress', 'info'],
    ['lena', 'Lena Berg', 'Warehouse lead', 'Nordlys Logistics', 'In review', 'muted'],
    ['max', 'Max Holm', 'Graduate engineer', 'Nordlys Retail', 'Offer', 'positive'],
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 40, top: 40, width: 256 * S, height: 760, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 24, boxShadow: FLOAT, padding: 8 * S }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 * S }}>
          {item('bell', 'Notifications', { n: 3 })}
          {item('scanFace', 'My applications', { on: true })}
          {item('calendar', 'Calendar')}
          {item('agent', 'Agent')}
        </div>
        <div style={{ marginTop: 16 * S, height: 28 * S, display: 'flex', alignItems: 'center', gap: 6 * S, padding: `0 ${8 * S}px`, fontSize: 12 * S, fontWeight: 500, color: C.muted }}>
          <span style={{ display: 'inline-flex', transform: 'rotate(90deg)' }}>{icon('chevronRight', C.muted, 14 * S, 2.5)}</span>Workspace
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 * S }}>
          {item('folder', 'Projects')}
          {item('briefcase', 'Roles')}
          {item('inbox', 'Applications', { n: 4 })}
          {item('messageSquare', 'Messages', { n: 2 })}
          {item('star', 'Talent pool')}
          {item('layers', 'Segments')}
          {item('analytics', 'Analytics')}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 40 + 256 * S + 24, top: 40, width: 1200 - 80 - 256 * S - 24, height: 760, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 24, boxShadow: FLOAT, padding: `${12 * S}px ${16 * S}px` }}>
        <div style={{ height: 32 * S, display: 'flex', alignItems: 'center', fontSize: 14 * S, fontWeight: 600, color: C.text, letterSpacing: '-0.01em' }}>My applications</div>
        <div style={{ marginTop: 12 * S, display: 'flex', gap: 4 * S }}>{tab('My turn', true)}{tab('Assigned')}{tab('Created')}{tab('Subscribed')}</div>
        <div style={{ marginTop: 12 * S }}>
          {rows.map(([p, name, role, ws, stage, v]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12 * S, height: 56 * S, borderBottom: `1px solid ${BORDER}`, fontSize: 14 * S, whiteSpace: 'nowrap' }}>
              {photo(p, 28 * S)}
              <span style={{ width: 96 * S, flexShrink: 0, fontWeight: 500, color: C.text }}>{name}</span>
              <span style={{ color: C.text }}>{role} <span style={{ color: 'rgba(126,126,126,0.7)' }}>· {ws}</span></span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 120, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 88%)` }} />
    </div>
  );
}
