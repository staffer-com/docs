export default function Graphic({ time, width, height, assets }) {
  // Settings → Organization → AI assistants (settings/organization/ai-assistants/page.tsx + AssistantsSection.tsx).
  // SettingsCanvas: Canvas (rounded-xl border-canvas-border bg-canvas shadow-xs), CanvasHeader (h-12 border-b px-4,
  // title text-sm font-semibold tracking-tight), content max-w-[700px] px-10 py-10, description mt-2 text-sm muted.
  // AssistantsSection: section mt-8 gap-3; Card surface="canvas" (rounded-xl border-card-divider bg-card shadow-xs)
  // p-5 with the text-sm medium label, mt-1 text-xs muted helper and the Switch (h-5 w-9, checked bg-surf-blue,
  // thumb h-4 w-4 bg-background translate-x-4); h2 mt-6 text-sm medium "Connected apps"; list Card divide-y,
  // OrgGrantRow li p-4 gap-4: ClientMark size md (h-10 w-10 rounded-md border bg-white, logo h-6 w-6), the
  // "client · member" line, the muted DATE line (Intl 'en' dateStyle medium), Button secondary sm (h-8 px-3 pill,
  // border-input) "Disconnect". Newest grant first, as listLiveGrants returns them. 1.5x app scale: the 700px column
  // is 1240 wide at 2x and the page is too tall at 1.6x.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 1.5;
  // Light-mode tokens from packages/ui/src/styles.css.
  const FG = '#050607'; // --foreground gray-950
  const MUTED = '#817e7c'; // --muted-foreground gray-600
  const LINE = '#f0eeed'; // --border, --card-divider, --canvas-border gray-75
  const INPUT = '#dbd8d6'; // --input gray-150
  const CANVAS = '#fcfaf9'; // --canvas gray-25
  const BG = '#f7f5f4'; // --background gray-50
  const SHADOW_XS = '0 1px 2px 0 rgba(0,0,0,0.05)';
  const SM = { fontSize: 14 * S, lineHeight: `${20 * S}px` };
  const XS = { fontSize: 12 * S, lineHeight: `${16 * S}px` };
  const logoMark = (k) => (
    <span style={{ width: 40 * S, height: 40 * S, flexShrink: 0, boxSizing: 'border-box', borderRadius: 6 * S, border: `1px solid ${LINE}`, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={assets && assets[k] ? assets[k].url : ''} style={{ width: 24 * S, height: 24 * S }} />
    </span>
  );
  const grants = [
    ['claude', 'Claude', 'Lena Berg', 'Nordlys Retail', true, 'Oct 21, 2026', 'Oct 27, 2026', 'Jan 19, 2027'],
    ['openai', 'ChatGPT', 'Max Holm', 'Nordlys Retail', false, 'Oct 14, 2026', 'Oct 24, 2026', 'Jan 12, 2027'],
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app, color: FG }}>
      <div style={{ position: 'absolute', left: 40, top: 24, width: 1120, height: 1400, boxSizing: 'border-box', background: CANVAS, border: `1px solid ${LINE}`, borderRadius: 12 * S, boxShadow: `${SHADOW_XS}, ${FLOAT}`, overflow: 'hidden' }}>
        <div style={{ height: 48 * S, boxSizing: 'border-box', borderBottom: `1px solid ${LINE}`, padding: `0 ${16 * S}px`, display: 'flex', alignItems: 'center' }}>
          <div style={{ ...SM, fontWeight: 600, letterSpacing: '-0.025em', color: FG }}>AI assistants</div>
        </div>
        <div style={{ width: 700 * S, maxWidth: '100%', margin: '0 auto', boxSizing: 'border-box', padding: `${40 * S}px ${40 * S}px` }}>
          <div style={{ ...SM, marginTop: 8 * S, color: MUTED }}>
            Whether members can connect Claude, ChatGPT and other AI assistants to Staffer, and the assistants connected across your organisation.
          </div>
          <div style={{ marginTop: 32 * S, display: 'flex', flexDirection: 'column', gap: 12 * S }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 * S, padding: 20 * S, borderRadius: 12 * S, border: `1px solid ${LINE}`, background: '#ffffff', boxShadow: SHADOW_XS }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ ...SM, fontWeight: 500, color: FG }}>Allow connected AI assistants</div>
                <div style={{ ...XS, marginTop: 4 * S, color: MUTED }}>
                  Lets members connect Claude, ChatGPT and other assistants. An assistant reads candidate data with its member’s access, and every call is recorded in your audit log. Turning this off disconnects every assistant on its next call. Connections last at most 90 days before the member approves them again.
                </div>
              </div>
              <div style={{ width: 36 * S, height: 20 * S, flexShrink: 0, boxSizing: 'border-box', borderRadius: 9999, border: `${2 * S}px solid transparent`, background: SURF, display: 'flex', alignItems: 'center' }}>
                <span style={{ width: 16 * S, height: 16 * S, borderRadius: 9999, background: BG, boxShadow: SHADOW_XS, transform: `translateX(${16 * S}px)` }} />
              </div>
            </div>
            <div style={{ ...SM, marginTop: 24 * S, fontWeight: 500, color: FG }}>Connected apps</div>
            <div style={{ borderRadius: 12 * S, border: `1px solid ${LINE}`, background: '#ffffff', boxShadow: SHADOW_XS }}>
              {grants.map(([k, client, person, ws, rw, at, used, ends], i) => (
                <div key={client} style={{ display: 'flex', alignItems: 'center', gap: 16 * S, padding: 16 * S, borderTop: i ? `1px solid ${LINE}` : 'none' }}>
                  {logoMark(k)}
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ ...SM, fontWeight: 500, color: FG, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{client} · {person}</div>
                    <div style={{ ...SM, color: MUTED }}>
                      {ws} · {rw ? 'Read and write' : 'Read only'} · connected {at} · last used {used} · ends {ends}
                    </div>
                  </div>
                  <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, boxSizing: 'border-box', borderRadius: 9999, border: `1px solid ${INPUT}`, background: '#ffffff', display: 'inline-flex', alignItems: 'center', ...SM, fontWeight: 500, color: FG, whiteSpace: 'nowrap', flexShrink: 0 }}>Disconnect</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 28, background: `linear-gradient(to bottom, rgba(248,246,245,0), ${PAPER} 92%)` }} />
    </div>
  );
}
