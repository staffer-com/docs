export default function Graphic({ time, width, height, assets }) {
  // Interview step booking settings on the job's Process tab (step settings dialog, DialogContent max-w-lg, body px-5):
  // ProcessTab.tsx InterviewSettingsSection, the "Let the candidate pick a time" section switched on, cropped at the top.
  // Section rounded-md border border-border; body grid grid-cols-2 gap-3 border-t p-3; fields flex-col gap-1.5 with
  // text-[11px] font-medium muted labels over Input (h-9 rounded-md border-input bg-input-fill px-3 text-sm) and the
  // SelectTrigger (same, plus ArrowDown01 h-3.5 muted) showing "30 minutes" (DEFAULT_BOOKING_INTERVAL_MINUTES).
  // BookingSlotsEditor: col-span-full gap-2, "Specific dates (optional)", rows grid-cols-[1.4fr_1fr_auto_1fr_auto] gap-2 pr-1
  // of Input type=date + TimeRangeFields (two Input type=time and a muted "–") + ghost iconSm Delete02 button. Date and
  // time Inputs are InputGroup (border wraps an h-9 input, picker chrome hidden, trailing h-7 w-7 ghost button with
  // Calendar01 / Clock01 h-4 w-4); they are real native inputs here so the browser formats them as the app does.
  // "Add slot" is Button ghost sm (h-8 px-3 pill) with PlusSign. Reserve row: col-span-full flex items-start gap-3
  // border-t pt-3, text-sm medium title, mt-1 text-[11px] leading-snug muted helper, Switch checked (h-5 w-9
  // bg-surf-blue, thumb h-4 w-4 bg-background shadow-xs translate-x-4). No slot warnings: both slots are inside the
  // 24-hour notice and 14-day lead time from 27 October and the interviewers are free.
  const DUR = 1;
  let u = time;
  // @kit
  // @icons
  const S = 2;
  // Light-mode tokens from packages/ui/src/styles.css.
  const FG = '#050607'; // --foreground gray-950
  const MUTED = '#817e7c'; // --muted-foreground gray-600
  const LINE = '#f0eeed'; // --border gray-75
  const INPUT = '#dbd8d6'; // --input gray-150
  const BG = '#f7f5f4'; // --background gray-50 (switch thumb)
  const SHADOW_XS = '0 1px 2px 0 rgba(0,0,0,0.05)';
  const SM = { fontSize: 14 * S, lineHeight: `${20 * S}px` };
  const LABEL = { fontSize: 11 * S, lineHeight: 1.5, fontWeight: 500, color: MUTED };
  const HELP = { fontSize: 11 * S, lineHeight: 1.375, color: MUTED };
  const field = (label, control) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 * S, minWidth: 0 }}>
      <div style={LABEL}>{label}</div>
      {control}
    </div>
  );
  const box = (children, extra) => (
    <div style={{ height: 36 * S, boxSizing: 'border-box', borderRadius: 6 * S, border: `1px solid ${INPUT}`, background: '#ffffff', padding: `0 ${12 * S}px`, display: 'flex', alignItems: 'center', ...SM, color: FG, ...(extra || {}) }}>{children}</div>
  );
  const select = (v) => box(<><span style={{ flex: 1 }}>{v}</span>{icon('chevronDown', MUTED, 14 * S, 2)}</>, { justifyContent: 'space-between', gap: 8 * S });
  // Input type=date|time → InputGroup: the border wraps a flush h-9 input and a trailing picker button.
  const picker = (type, value, ic) => (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', minWidth: 0, boxSizing: 'border-box', borderRadius: 6 * S, border: `1px solid ${INPUT}`, background: '#ffffff' }}>
      <input className="rs-native" type={type} defaultValue={value} readOnly style={{ display: 'flex', height: 36 * S, width: '100%', minWidth: 0, boxSizing: 'border-box', border: 0, borderRadius: 6 * S, background: 'transparent', padding: `${6 * S}px ${12 * S}px`, ...SM, fontFamily: app, color: FG, outline: 'none' }} />
      <div style={{ alignSelf: 'stretch', paddingRight: 4 * S, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: 28 * S, height: 28 * S, borderRadius: 6 * S, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon(ic, MUTED, 16 * S, 2)}</div>
      </div>
    </div>
  );
  const slot = (date, start, end) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr) auto minmax(0,1fr) auto', alignItems: 'center', gap: 8 * S, paddingRight: 4 * S }}>
      {picker('date', date, 'calendar01')}
      {picker('time', start, 'clock')}
      <span style={{ ...SM, color: MUTED }}>–</span>
      {picker('time', end, 'clock')}
      <div style={{ justifySelf: 'end', width: 28 * S, height: 28 * S, borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon('trash', FG, 14 * S, 2)}</div>
    </div>
  );
  const sw = (
    <div style={{ width: 36 * S, height: 20 * S, borderRadius: 9999, background: SURF, boxSizing: 'border-box', border: `${2 * S}px solid transparent`, flexShrink: 0, position: 'relative' }}>
      <div style={{ position: 'absolute', left: 16 * S, top: 0, width: 16 * S, height: 16 * S, borderRadius: 9999, background: BG, boxShadow: SHADOW_XS }} />
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, fontFamily: app }}>
      <style>{'.rs-native::-webkit-calendar-picker-indicator{-webkit-appearance:none;display:none}'}</style>
      <div style={{ position: 'absolute', left: 88, bottom: 40, width: 1024, boxSizing: 'border-box', background: '#ffffff', border: `1px solid ${C.cardBorder}`, borderRadius: 28, boxShadow: FLOAT, padding: `0 ${20 * S}px ${20 * S}px` }}>
        <div style={{ borderRadius: 6 * S, border: `1px solid ${LINE}` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 * S, padding: `${10 * S}px ${12 * S}px` }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ ...SM, fontWeight: 500, color: FG }}>Let the candidate pick a time</div>
              <div style={{ ...HELP, marginTop: 2 * S }}>When scheduling, default to sending the candidate a slot picker instead of setting the time yourself. You can still override per candidacy.</div>
            </div>
            {sw}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 12 * S, borderTop: `1px solid ${LINE}`, padding: 12 * S }}>
            {field('Minimum notice (hours)', box('24'))}
            {field('Maximum lead time (days)', box('14'))}
            {field('Start times every', select('30 minutes'))}
            {field('Break between meetings (minutes)', box('15'))}
            <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 8 * S }}>
              <div style={LABEL}>Specific dates (optional)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 * S }}>
                {slot('2026-11-03', '09:00', '12:00')}
                {slot('2026-11-05', '13:00', '16:00')}
              </div>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 * S, height: 32 * S, padding: `0 ${12 * S}px`, borderRadius: 9999, ...SM, fontWeight: 500, color: FG }}>
                  <span style={{ display: 'inline-flex', marginRight: 6 * S }}>{icon('plus', FG, 14 * S, 2)}</span>Add slot
                </div>
              </div>
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 * S, borderTop: `1px solid ${LINE}`, paddingTop: 12 * S }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ ...SM, fontWeight: 500, color: FG }}>Reserve these times in the calendar</div>
                <div style={{ ...HELP, marginTop: 4 * S }}>Each interviewer with Google Calendar connected gets the times as busy events, so colleagues can’t book over them. They stay in step with this list, and a booked time is released to the interview itself.</div>
              </div>
              {sw}
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 170, background: `linear-gradient(to top, rgba(248,246,245,0), ${PAPER} 85%)` }} />
    </div>
  );
}
