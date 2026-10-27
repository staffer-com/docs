export default function Graphic({ time, width, height, assets }) {
  // Section 2: a voice AI interview's preflight screen when the microphone is busy (portal/(main)/applications/
  // [applicationId]/interview/[instanceId]/AiInterviewApp.tsx). getUserMedia throws NotReadableError on mount, so
  // PreflightMediaCheck sets status "denied" and shows mediaAccessFailure(err, false).copy (failure-copy.ts) in
  // <Alert variant="destructive"> (Alert.tsx: rounded-lg px-4 py-3 text-sm, text-destructive bg-destructive/5,
  // AlertDescription leading-relaxed, no icon), with no level bars and an outline sm "Try again".
  // Around it: the AiInterviewApp header (px-6 py-4, Avatar xs square + "{job} at {workspace}" text-sm medium,
  // ThemeToggle ghost icon pill with Moon), then PreflightScreen's Card surface="canvas" (rounded-xl border-card-divider
  // bg-card shadow-xs p-8, md:grid-cols-2 gap-10): METHOD_META.voice (h-10 bg-muted circle, Mic h-5 sw 2, "AI voice
  // interview" text-xs, FlagChip 14 + "{language} · up to {n} min" text-sm medium), "Hi {first}," text-xl semibold,
  // AI_INTERVIEW_INTRO, the voice tips, InterviewDisclosure (Checkbox h-4 rounded-sm + text-xs), and the disabled lg
  // start button "Grant access to continue". Right column: section rounded-md border bg-muted/30 p-4 "Test your setup".
  // Colours from packages/ui/src/styles.css (light), radii from globals.css (--radius 0.5rem).
  // Drawn as an 800px-wide window (two columns from md, 768px) at 1.5x so the whole card fits 1200 wide.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 1.5;
  const VW = 800;
  const X0 = (1200 - VW * S) / 2; // the 800px page fills the canvas
  // production tokens (styles.css light mode)
  const FG = '#050607'; // gray-950
  const MUTED_FG = '#817e7c'; // gray-600
  const MUTED = '#eae7e5'; // gray-100
  const BORDER = '#f0eeed'; // gray-75 (border, card-divider)
  const INPUT = '#dbd8d6'; // gray-150
  const DESTRUCTIVE = '#dc2626';
  const PRIMARY_FG = '#f7f5f4'; // gray-50
  const MUTED30 = 'rgba(234,231,229,0.3)';
  const DESTRUCTIVE5 = 'rgba(220,38,38,0.05)';
  const sm = { fontSize: 14 * S, lineHeight: `${20 * S}px` };
  const xs = { fontSize: 12 * S, lineHeight: `${16 * S}px` };
  const checkbox = (extra) => (
    <span style={{ width: 16 * S, height: 16 * S, boxSizing: 'border-box', borderRadius: 4 * S, border: `${S}px solid ${INPUT}`, background: '#ffffff', flexShrink: 0, display: 'inline-block', ...(extra || {}) }} />
  );
  const flagNo = (s) => (
    <span style={{ width: s, height: s, borderRadius: 9999, overflow: 'hidden', flexShrink: 0, display: 'inline-block', boxShadow: `0 0 0 ${S}px ${BORDER}`, background: MUTED }}>
      {/* flag-icons 1x1/no.svg */}
      <svg width={s} height={s} viewBox="0 0 512 512" style={{ display: 'block' }}>
        <path fill="#ed2939" d="M0 0h512v512H0z" />
        <path fill="#fff" d="M128 0h128v512H128z" />
        <path fill="#fff" d="M0 192h512v128H0z" />
        <path fill="#002664" d="M160 0h64v512h-64z" />
        <path fill="#002664" d="M0 224h512v64H0z" />
      </svg>
    </span>
  );
  const TOP = -12 * S; // crop most of the header's top padding
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app, color: FG }}>
      <div style={{ position: 'absolute', left: X0, top: TOP, width: VW * S }}>
        {/* header: px-6 py-4 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `${16 * S}px ${24 * S}px` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 * S, minWidth: 0 }}>
            <span style={{ width: 24 * S, height: 24 * S, borderRadius: 4 * S, background: '#994500', color: '#ffffff', fontSize: 10 * S, fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>NR</span>
            <div style={{ ...sm, fontWeight: 500, color: FG, whiteSpace: 'nowrap' }}>Store manager, Oslo at Nordlys Retail</div>
          </div>
          <span style={{ width: 36 * S, height: 36 * S, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon('moon', FG, 16 * S, 2)}</span>
        </div>
        {/* PreflightScreen: px-6 py-8, Card p-8 grid md:grid-cols-2 gap-10 */}
        <div style={{ padding: `${32 * S}px ${24 * S}px` }}>
          <div data-card="1" style={{ boxSizing: 'border-box', background: '#ffffff', border: `${S}px solid ${BORDER}`, borderRadius: 12 * S, boxShadow: `0 ${S}px ${2 * S}px 0 rgba(0,0,0,0.05)`, padding: 32 * S, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 40 * S }}>
            {/* left column */}
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <div style={{ marginBottom: 24 * S, display: 'flex', alignItems: 'center', gap: 12 * S }}>
                <span style={{ width: 40 * S, height: 40 * S, borderRadius: 9999, background: MUTED, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon('mic', FG, 20 * S, 2)}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ ...xs, color: MUTED_FG }}>AI voice interview</div>
                  <div style={{ ...sm, fontWeight: 500, color: FG, display: 'flex', alignItems: 'center', gap: 6 * S }}>{flagNo(14 * S)}<span>Norwegian · up to 15 min</span></div>
                </div>
              </div>
              <div style={{ fontSize: 20 * S, lineHeight: `${28 * S}px`, fontWeight: 600, color: FG }}>Hi Erik,</div>
              <div style={{ marginTop: 8 * S, fontSize: 14 * S, lineHeight: 1.625, color: MUTED_FG }}>
                You’re about to start an AI-led interview. It’ll feel like a normal conversation — take your time, and answer as you would in any process call.
              </div>
              <div style={{ marginTop: 20 * S, display: 'flex', flexDirection: 'column', gap: 8 * S, ...sm, color: MUTED_FG }}>
                {['Find a quiet spot with a stable connection.', 'Speak naturally — the AI will pause when you pause.'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: 8 * S }}><span>•</span><span>{t}</span></div>
                ))}
              </div>
              <div style={{ marginTop: 20 * S, display: 'flex', alignItems: 'flex-start', gap: 8 * S, fontSize: 12 * S }}>
                {checkbox({ marginTop: 2 * S })}
                <div style={{ lineHeight: 1.625, color: FG }}>
                  This interview is recorded, assessed by AI, and affects your match score.{' '}
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: 2 * S }}>Details</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 24 * S }}>
                <div style={{ height: 40 * S, padding: `0 ${24 * S}px`, borderRadius: 9999, background: FG, color: PRIMARY_FG, opacity: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 * S, fontWeight: 500, whiteSpace: 'nowrap' }}>Grant access to continue</div>
              </div>
            </div>
            {/* right column: PreflightMediaCheck */}
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <div style={{ borderRadius: 6 * S, border: `${S}px solid ${BORDER}`, background: MUTED30, padding: 16 * S }}>
                <div style={{ ...sm, fontWeight: 500, color: FG }}>Test your setup</div>
                <div style={{ marginTop: 4 * S, fontSize: 11 * S, lineHeight: 1.375, color: MUTED_FG }}>Grant mic access, pick a device, and speak — the bars below should react.</div>
                <div data-alert="1" style={{ marginTop: 12 * S, borderRadius: 8 * S, padding: `${12 * S}px ${16 * S}px`, background: DESTRUCTIVE5, color: DESTRUCTIVE, fontSize: 14 * S, lineHeight: 1.625 }}>
                  Your microphone is in use by another app. Close it there, then reload the page.
                </div>
                <div style={{ marginTop: 12 * S, display: 'flex', flexDirection: 'column', gap: 8 * S }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 * S, ...xs, color: MUTED_FG }}>
                    Microphone
                    <div style={{ height: 32 * S, boxSizing: 'border-box', borderRadius: 6 * S, border: `${S}px solid ${INPUT}`, background: '#ffffff', padding: `0 ${12 * S}px`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 * S }}>
                      <span>Default microphone</span>{icon('chevronDown', MUTED_FG, 14 * S, 2)}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 * S, ...xs, color: MUTED_FG }}>
                    {checkbox()}<span>Use push-to-talk (or hold Space)</span>
                  </div>
                </div>
                <div style={{ marginTop: 12 * S, display: 'flex' }}>
                  <div style={{ height: 32 * S, boxSizing: 'border-box', padding: `0 ${12 * S}px`, borderRadius: 9999, border: `${S}px solid ${INPUT}`, display: 'inline-flex', alignItems: 'center', fontSize: 14 * S, fontWeight: 500, color: FG, whiteSpace: 'nowrap' }}>Try again</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
