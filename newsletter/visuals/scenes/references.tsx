export default function Graphic({ time, width, height, assets }) {
  // Section 4: Reference check step settings (ProcessTab.tsx ReferenceSettingsSection), defaults from
  // lib/references/settings.ts: at least 2, at most blank (placeholder 5), invitations on, reminders on.
  // Shown with two reminders (day 1, day 3) as after one "Add reminder" click. Switches are bg-surf-blue when on.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const BORDER = '#eeeeee';
  const label = (t, extra) => <div style={{ fontSize: 14 * S, fontWeight: 500, color: C.text, ...(extra || {}) }}>{t}</div>;
  const hint = (t, extra) => <div style={{ fontSize: 11 * S, lineHeight: 1.375, color: C.muted, ...(extra || {}) }}>{t}</div>;
  const input = (v, ph, w, h) => (
    <div style={{ width: w || '100%', height: h || 36 * S, boxSizing: 'border-box', borderRadius: 6 * S, border: `1px solid ${C.inputBorder}`, padding: `0 ${12 * S}px`, display: 'flex', alignItems: 'center', fontSize: 14 * S, color: v ? C.text : C.muted }}>{v || ph}</div>
  );
  const sw = (
    <div style={{ width: 36 * S, height: 20 * S, borderRadius: 9999, background: SURF, boxSizing: 'border-box', border: `${2 * S}px solid transparent`, flexShrink: 0, position: 'relative' }}>
      <div style={{ position: 'absolute', left: 16 * S, top: 0, width: 16 * S, height: 16 * S, borderRadius: 9999, background: '#ffffff', boxShadow: '0 1px 2px rgba(0,0,0,0.12)' }} />
    </div>
  );
  const reminder = (d, days) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * S, fontSize: 14 * S, color: C.text }}>
      <span>Send a reminder</span>
      {input(String(d), '', 64 * S, 32 * S)}
      <span style={{ flex: 1 }}>{days} after the invitation</span>
      {icon('x', C.muted, 14 * S, 2)}
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 110, top: 40, width: 980, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: `${22 * S}px ${24 * S}px` }}>
        {label('Number of referees')}
        <div style={{ marginTop: 8 * S, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 * S }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 * S, fontSize: 11 * S, color: C.muted }}>At least{input('2', 'No minimum')}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 * S, fontSize: 11 * S, color: C.muted }}>At most{input('', '5')}</div>
        </div>
        <div style={{ marginTop: 16 * S, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 * S, borderRadius: 6 * S, border: `1px solid ${BORDER}`, padding: `${10 * S}px ${12 * S}px` }}>
          <div style={{ minWidth: 0 }}>{label('Send invitations automatically')}{hint('Referees are emailed as soon as the candidate adds them.', { marginTop: 2 * S })}</div>
          {sw}
        </div>
        <div style={{ marginTop: 12 * S, borderRadius: 6 * S, border: `1px solid ${BORDER}` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 * S, padding: `${10 * S}px ${12 * S}px` }}>
            <div style={{ minWidth: 0 }}>{label('Remind referees who haven’t answered')}{hint('Links expire after 14 days.', { marginTop: 2 * S })}</div>
            {sw}
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}`, padding: `${10 * S}px ${12 * S}px`, display: 'flex', flexDirection: 'column', gap: 8 * S }}>
            {reminder(1, 'day')}
            {reminder(3, 'days')}
            <div style={{ alignSelf: 'flex-start', height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, border: `1px solid ${C.inputBorder}`, display: 'inline-flex', alignItems: 'center', gap: 6 * S, fontSize: 14 * S, fontWeight: 500, color: C.text }}>{icon('plus', C.text, 14 * S, 2)}Add reminder</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 40, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 90%)` }} />
    </div>
  );
}
