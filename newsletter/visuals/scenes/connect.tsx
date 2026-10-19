export default function Graphic({ time, width, height, assets }) {
  // Hero: Settings → Connected apps → "Connect an assistant" dialog (connected-apps/ConnectAssistantDialog.tsx).
  // DialogHeader (title text-lg semibold, description text-sm muted), "Server URL" CopyField, the
  // "Choose your assistant" grid (3 cols, logo in a bordered white square, Claude selected: border-foreground
  // bg-accent), then Claude's numbered steps, faded at the crop. 1.6x app scale so the grid fits a 1200x675 still.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 1.6;
  const BORDER = '#eeeeee';
  const ACCENT = C.seg;
  const logo = (k, s) => <img src={assets && assets[k] ? assets[k].url : ''} style={{ width: s, height: s }} />;
  const clients = [
    ['claude', 'Claude'], ['openai', 'ChatGPT'], ['claude', 'Claude Code'],
    ['cursor', 'Cursor'], ['github-copilot', 'VS Code'], ['gemini', 'Gemini CLI'],
  ];
  const M = (t) => <span style={{ fontWeight: 500, color: C.text }}>{t}</span>;
  const steps = [
    <>In Claude, open {M('Settings → Connectors')} and choose {M('Add custom connector')}.</>,
    <>Name it {M('Staffer')} and paste the server URL above.</>,
    <>Click {M('Connect')}, then pick a workspace and approve on the Staffer page that opens.</>,
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <div style={{ position: 'absolute', left: 140, top: 40, width: 920, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: 24 * S }}>
        <div style={{ fontSize: 18 * S, fontWeight: 600, color: C.text, letterSpacing: '-0.01em', lineHeight: 1.3 }}>Connect an assistant</div>
        <div style={{ marginTop: 6 * S, fontSize: 14 * S, lineHeight: 1.45, color: C.muted }}>
          Add Staffer to Claude, ChatGPT or your editor to search, review and update your roles and candidates from there. You sign in and pick a workspace the first time.
        </div>
        <div style={{ marginTop: 20 * S, fontSize: 14 * S, fontWeight: 500, color: C.text }}>Server URL</div>
        <div style={{ marginTop: 8 * S, display: 'flex', alignItems: 'center', gap: 8 * S, border: `1px solid ${BORDER}`, borderRadius: 8 * S, background: PAPER, padding: `${6 * S}px ${6 * S}px ${6 * S}px ${12 * S}px` }}>
          <div style={{ flex: 1, minWidth: 0, fontFamily: "'SF Mono', Menlo, monospace", fontSize: 14 * S, color: C.text }}>https://app.staffer.com/api/mcp</div>
          <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, background: ACCENT, display: 'inline-flex', alignItems: 'center', gap: 6 * S, fontSize: 14 * S, fontWeight: 500, color: C.text }}>{icon('copy', C.text, 14 * S, 2)}Copy</div>
        </div>
        <div style={{ marginTop: 20 * S, fontSize: 14 * S, fontWeight: 500, color: C.text }}>Choose your assistant</div>
        <div style={{ marginTop: 8 * S, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 * S }}>
          {clients.map(([k, label], i) => {
            const on = i === 0;
            return (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 * S, borderRadius: 8 * S, border: `1px solid ${on ? C.text : BORDER}`, background: on ? ACCENT : '#ffffff', padding: 8 * S, fontSize: 14 * S, color: on ? C.text : C.muted }}>
                <span style={{ width: 28 * S, height: 28 * S, flexShrink: 0, borderRadius: 6 * S, border: `1px solid ${BORDER}`, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{logo(k, 16 * S)}</span>
                <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 20 * S }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12 * S, marginBottom: 12 * S, fontSize: 14 * S, lineHeight: 1.45, color: C.muted }}>
              <span style={{ width: 24 * S, height: 24 * S, flexShrink: 0, borderRadius: 9999, background: ACCENT, color: C.text, fontSize: 12 * S, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <div style={{ paddingTop: 2 * S }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 120, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 88%)` }} />
    </div>
  );
}
