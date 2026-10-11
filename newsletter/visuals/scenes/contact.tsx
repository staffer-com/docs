export default function Graphic({ time, width, height, assets }) {
  // Section 2: Profile tab contact rows after a lookup found an email (ProfileTab.tsx).
  // <dl grid-cols-[max-content_1fr] gap-x-6 gap-y-3 text-sm>; dt = icon + label in muted; dd = value.
  // Found email is a blue (text-info) link; Phone with nothing on file shows the "+ Add" pill.
  // Bottom: the success toast "Contact details found."
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  const INFO = '#0C5C9E';
  const row = (ic, label, value) => (
    <>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 * S, color: C.muted }}>{icon(ic, C.muted, 16 * S)}{label}</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', minWidth: 0, color: C.text }}>{value}</div>
    </>
  );
  const addPill = (
    <div style={{ height: 22 * S, padding: `0 ${8 * S}px`, borderRadius: 9999, border: `1px solid ${C.inputBorder}`, fontSize: 12 * S, color: C.muted, display: 'inline-flex', alignItems: 'center' }}>+ Add</div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 170, top: 70, width: 860, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: `${22 * S}px ${24 * S}px ${26 * S}px` }}>
        {/* profile header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 * S, marginBottom: 22 * S }}>
          {photo('erik', 44 * S)}
          <div>
            <div style={{ fontSize: 18 * S, fontWeight: 600, color: C.text }}>Erik Solberg</div>
            <div style={{ marginTop: 2 * S, fontSize: 14 * S, color: C.muted }}>Product Designer at Fjordpay</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', alignItems: 'baseline', columnGap: 24 * S, rowGap: 14 * S, fontSize: 14 * S }}>
          {row('linkedin', 'LinkedIn', <span style={{ color: INFO }}>linkedin.com/in/erik-solberg</span>)}
          {row('mail', 'Email', <span style={{ color: INFO }}>erik.solberg@gmail.com</span>)}
          {row('phone', 'Phone', addPill)}
        </div>
      </div>
      {/* sonner success toast */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 520, display: 'flex', justifyContent: 'center' }}>
        <div style={{ height: 72, padding: '0 30px', borderRadius: 16, background: '#ffffff', border: `1px solid ${C.cardBorder}`, boxShadow: '0 1px 2px rgba(5,6,7,0.04), 0 18px 48px rgba(5,6,7,0.10)', display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, fontWeight: 500, color: C.text }}>{check('#166534', 28)}Contact details found.</div>
      </div>
    </div>
  );
}
