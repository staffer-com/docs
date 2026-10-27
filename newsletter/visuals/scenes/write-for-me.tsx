export default function Graphic({ time, width, height, assets }) {
  // Write for me: the candidate message composer with an empty editor and the AI assist menu open.
  // Source (origin/production): _candidate-view/ChatComposer.tsx (ChatComposer, SenderPicker, RecipientPicker,
  // TemplatePicker, AiAssist), _candidate-view/OutreachBodyEditor.tsx, MessagesTab.tsx, packages/ui Button.tsx,
  // DropdownMenu.tsx, Textarea.tsx, Avatar.tsx, styles.css, apps/web globals.css.
  // Composer: rounded-2xl border border-border bg-white shadow-xs. Toolbar: flex gap-0.5 border-b px-1 py-1, ghost
  // iconSm pill buttons (h-7 w-7) with h-3.5 icons at strokeWidth 2: Bold, Italic, Bullet list, Insert link, Insert
  // placeholder (Plus), ml-auto, Insert template (FileText), AI assist (Sparkles). Editor: TipTap placeholder
  // "Write a message…" (OutreachBodyEditor default), px-4 py-3 text-sm leading-relaxed min-h-[68px], placeholder colour
  // muted-foreground/60. Send bar: flex gap-1 px-2 py-2: SenderPicker (ghost sm pill, gap-1.5, text-muted-foreground,
  // Avatar 2xs, ChevronDown h-3), RecipientPicker on its default email channel ("Email", Mail icon), then the LinkedIn
  // button (ghost iconMd pill) and Send (sm pill, gap-1). With an empty body both are disabled (disabled:opacity-50,
  // pointer-events-none), so the LinkedIn title tooltip can't show and is left out.
  // AI assist menu: DropdownMenuContent align end, w-80, rounded-xl border-popover-border/60 bg-popover/80 p-1 shadow-lg
  // backdrop-blur-xl, flipped above the trigger (sideOffset 6) because the composer sits at the foot of the Messages tab.
  // Empty editor = writesFromScratch: Textarea rows 3 with "Ask about their notice period, keep it short…", then
  // "Write message" (disabled until the instruction has text), separator, "Write for me" (shown hovered, bg-accent).
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  // Light-mode role tokens, packages/ui/src/styles.css
  const FG = '#050607'; // --foreground gray-950
  const MFG = '#817e7c'; // --muted-foreground gray-600
  const BRD = '#f0eeed'; // --border gray-75
  const INP = '#dbd8d6'; // --input gray-150
  const ACC = '#eae7e5'; // --accent gray-100
  const POPB = '#cdcac8'; // --popover-border gray-200
  const PFG = '#f7f5f4'; // --primary-foreground gray-50
  const SHADOW_XS = '0 1px 2px 0 rgba(0,0,0,0.05)';
  const SHADOW_LG = '0 20px 30px -6px rgba(0,0,0,0.1), 0 8px 12px -8px rgba(0,0,0,0.1)';
  const H = height || 790;

  const ghost = (name, label) => (
    <span title={label} style={{ width: 28 * S, height: 28 * S, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon(name, FG, 14 * S, 2)}</span>
  );
  const menuItem = (label, opts) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * S, borderRadius: 8 * S, padding: `${6 * S}px ${8 * S}px`, fontSize: 14 * S, lineHeight: `${20 * S}px`, color: FG, background: opts.hover ? ACC : 'transparent', opacity: opts.disabled ? 0.5 : 1 }}>
      {icon('sparkle', FG, 14 * S, 2)}{label}
    </div>
  );

  // composer geometry (2x): 1x width 560, toolbar 36, editor 68, send bar 48, 1px borders
  const CL = 40, CW = 560 * S, BW = 1 * S;
  const TOOL = 36 * S, EDIT = 68 * S, BAR = 48 * S;
  const CH = BW + TOOL + BW + EDIT + BAR + BW;
  const CB = 70; // gap under the composer
  const composerTop = H - CB - CH;
  // menu: align end to the Sparkles trigger (toolbar px-1), side top, sideOffset 6
  const trigRight = CL + CW - BW - 4 * S;
  const trigTop = composerTop + BW + 4 * S;
  const menuBottom = trigTop - 6 * S;
  const MW = 320 * S;

  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app, color: FG }}>
      {/* the composer */}
      <div style={{ position: 'absolute', left: CL, top: composerTop, width: CW, height: CH, boxSizing: 'border-box', background: '#ffffff', border: `${BW}px solid ${BRD}`, borderRadius: 16 * S, boxShadow: `${SHADOW_XS}, ${FLOAT}`, overflow: 'hidden' }}>
        {/* toolbar */}
        <div style={{ height: TOOL + BW, boxSizing: 'border-box', borderBottom: `${BW}px solid ${BRD}`, padding: `0 ${4 * S}px`, display: 'flex', alignItems: 'center', gap: 2 * S }}>
          {ghost('textBold', 'Bold')}
          {ghost('textItalic', 'Italic')}
          {ghost('listBullet', 'Bullet list')}
          {ghost('link', 'Insert link')}
          {ghost('plus', 'Insert placeholder')}
          <span style={{ marginLeft: 'auto' }} />
          {ghost('fileText', 'Insert template')}
          {ghost('sparkle', 'AI assist')}
        </div>
        {/* empty editor with the TipTap placeholder */}
        <div style={{ height: EDIT, boxSizing: 'border-box', padding: `${12 * S}px ${16 * S}px`, fontSize: 14 * S, lineHeight: 1.625, color: 'rgba(129,126,124,0.6)' }}>Write a message…</div>
        {/* send bar */}
        <div style={{ height: BAR, boxSizing: 'border-box', padding: `${8 * S}px ${8 * S}px`, display: 'flex', alignItems: 'center', gap: 4 * S }}>
          <div style={{ display: 'flex', flex: 1, minWidth: 0, alignItems: 'center', gap: 4 * S }}>
            <div title="Send as" style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 6 * S, fontSize: 14 * S, fontWeight: 500, color: MFG, whiteSpace: 'nowrap' }}>
              {photo('sara', 16 * S)}<span>Sara Lind</span>{icon('chevronDown', MFG, 12 * S, 2)}
            </div>
            <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 6 * S, fontSize: 14 * S, fontWeight: 500, color: FG, whiteSpace: 'nowrap' }}>
              {icon('mail', FG, 14 * S, 2)}<span>Email</span>{icon('chevronDown', FG, 12 * S, 2)}
            </div>
          </div>
          {/* LinkedIn hand-off, a peer of Send: disabled until there is a body */}
          <span title="Message on LinkedIn" style={{ width: 32 * S, height: 32 * S, borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, opacity: 0.5 }}>{icon('linkedin', FG, 14 * S, 2)}</span>
          <div style={{ height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, background: FG, color: PFG, display: 'inline-flex', alignItems: 'center', gap: 4 * S, fontSize: 14 * S, fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0, opacity: 0.5 }}>
            {icon('send', PFG, 14 * S, 2)}Send
          </div>
        </div>
      </div>

      {/* AI assist menu, open */}
      <div style={{ position: 'absolute', left: trigRight - MW, top: 'auto', bottom: H - menuBottom, width: MW, boxSizing: 'border-box', padding: 4 * S, borderRadius: 12 * S, border: `${BW}px solid rgba(205,202,200,0.6)`, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(24px)', boxShadow: SHADOW_LG, overflow: 'hidden' }}>
        <div style={{ padding: `${4 * S}px ${4 * S}px ${4 * S}px` }}>
          <div style={{ height: (3 * 14 * 1.625 + 16 + 2) * S, boxSizing: 'border-box', borderRadius: 6 * S, border: `${BW}px solid ${INP}`, background: '#ffffff', padding: `${8 * S}px ${12 * S}px`, fontSize: 14 * S, lineHeight: 1.625, color: 'rgba(129,126,124,0.7)' }}>Ask about their notice period, keep it short…</div>
        </div>
        {menuItem('Write message', { disabled: true })}
        <div style={{ margin: `${4 * S}px ${-4 * S}px`, height: 1 * S, background: POPB }} />
        {menuItem('Write for me', { hover: true })}
      </div>
    </div>
  );
}
