import { ReactNode, useId } from "react";

/*
 * Illustrated project covers in the site's rose-and-gold palette.
 * Colors come from the theme variables (see .pa-* classes in index.css),
 * so every cover adapts to light and dark mode. Canvas: 480 × 320.
 */

export type ProjectArtId = "hotel" | "staff" | "library" | "safety" | "fire" | "drip";

const Sparkle = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <path
    className="pa-gold pa-twinkle"
    transform={`translate(${x} ${y}) scale(${s})`}
    d="M0 -9 C1 -2 2 -1 9 0 C2 1 1 2 0 9 C-1 2 -2 1 -9 0 C-2 -1 -1 -2 0 -9Z"
  />
);

const Card = ({ x, y, w, h, r = 14, children }: { x: number; y: number; w: number; h: number; r?: number; children?: ReactNode }) => (
  <g>
    <rect x={x + 3} y={y + 6} width={w} height={h} rx={r} className="pa-shadow" />
    <rect x={x} y={y} width={w} height={h} rx={r} className="pa-paper" />
    {children}
  </g>
);

const Label = ({ x, y, children, size = 13, cls = "pa-ink", serif = false, anchor = "start" }: {
  x: number; y: number; children: ReactNode; size?: number; cls?: string; serif?: boolean; anchor?: "start" | "middle" | "end";
}) => (
  <text x={x} y={y} fontSize={size} textAnchor={anchor} className={`${cls} ${serif ? "pa-serif" : "pa-sans"}`}>
    {children}
  </text>
);

const Pill = ({ x, y, w, text }: { x: number; y: number; w: number; text: string }) => (
  <g>
    <rect x={x} y={y} width={w} height={26} rx={13} className="pa-rose" />
    <Label x={x + w / 2} y={y + 17.5} size={11.5} cls="pa-on-rose" anchor="middle">{text}</Label>
  </g>
);

/* ---------- Scenes ---------- */

const Hotel = () => {
  const booked = new Set([2, 3, 9, 10, 11, 18, 24, 25]);
  const stay = new Set([15, 16, 17]);
  return (
    <g>
      <Card x={34} y={46} w={238} h={232}>
        <Label x={56} y={78} size={15} serif>Room availability</Label>
        <Label x={56} y={98} size={11} cls="pa-muted">March · Deluxe 204</Label>
        {Array.from({ length: 28 }, (_, i) => {
          const cx = 56 + (i % 7) * 30, cy = 114 + Math.floor(i / 7) * 36;
          const cls = stay.has(i) ? "pa-gold" : booked.has(i) ? "pa-rose-soft" : "pa-cell";
          return (
            <g key={i}>
              <rect x={cx} y={cy} width={24} height={26} rx={7} className={cls} />
              <Label x={cx + 12} y={cy + 17} size={9.5} cls={stay.has(i) ? "pa-ink" : "pa-muted"} anchor="middle">{i + 1}</Label>
            </g>
          );
        })}
      </Card>
      {/* service bell */}
      <g transform="translate(372 96)">
        <path d="M-46 30 a46 40 0 0 1 92 0z" className="pa-gold" />
        <path d="M-30 18 a32 30 0 0 1 22 -24" className="pa-highlight" fill="none" strokeWidth={4} strokeLinecap="round" />
        <rect x={-58} y={30} width={116} height={10} rx={5} className="pa-ink-soft" />
        <rect x={-5} y={-18} width={10} height={10} rx={3} className="pa-gold" />
      </g>
      {/* key card */}
      <g transform="translate(372 196) rotate(-10)">
        <rect x={-72} y={-44} width={144} height={88} rx={12} className="pa-rose" />
        <rect x={-56} y={-26} width={30} height={24} rx={5} className="pa-gold" />
        <path d="M-56 -14 h30 M-41 -26 v24" className="pa-ink-line" strokeWidth={1.5} />
        <Label x={56} y={-14} size={10} cls="pa-on-rose" anchor="end">ROOM</Label>
        <Label x={56} y={22} size={26} cls="pa-on-rose" serif anchor="end">204</Label>
      </g>
      <Pill x={300} y={262} w={150} text="✓ Booking confirmed" />
      <Sparkle x={292} y={60} />
      <Sparkle x={450} y={150} s={0.7} />
    </g>
  );
};

const Staff = () => (
  <g>
    {/* approval flow */}
    {["Staff", "HOD", "Admin"].map((role, i) => (
      <g key={role} transform={`translate(40 ${70 + i * 74})`}>
        <rect width={98} height={40} rx={20} className={i === 2 ? "pa-rose" : "pa-paper"} />
        <circle cx={20} cy={20} r={11} className={i === 2 ? "pa-on-rose-fill" : "pa-rose-soft"} />
        <Label x={40} y={25} size={12.5} cls={i === 2 ? "pa-on-rose" : "pa-ink"}>{role}</Label>
        {i < 2 && <path d="M49 44 v26" className="pa-rose-line pa-flow" strokeWidth={2} strokeDasharray="4 4" />}
      </g>
    ))}
    {/* leave request */}
    <Card x={166} y={50} w={180} h={226}>
      <circle cx={194} cy={84} r={16} className="pa-rose-soft" />
      <rect x={218} y={74} width={90} height={8} rx={4} className="pa-ink-faint" />
      <rect x={218} y={88} width={60} height={6} rx={3} className="pa-ink-faint" />
      <Label x={186} y={130} size={15} serif>Leave request</Label>
      <Label x={186} y={150} size={11} cls="pa-muted">Mar 15 – Mar 17 · 3 days</Label>
      {[168, 182, 196].map((y, k) => (
        <rect key={y} x={186} y={y} width={k === 2 ? 90 : 138} height={6} rx={3} className="pa-ink-faint" />
      ))}
      <g transform="translate(262 236) rotate(-12)" className="pa-stamp">
        <rect x={-62} y={-20} width={124} height={40} rx={8} className="pa-rose-line" fill="none" strokeWidth={2.5} />
        <Label x={0} y={6} size={17} cls="pa-rose-text" serif anchor="middle">APPROVED</Label>
      </g>
    </Card>
    {/* mini calendar */}
    <Card x={366} y={92} w={92} h={130} r={12}>
      <rect x={366} y={92} width={92} height={26} rx={12} className="pa-gold" />
      <Label x={412} y={110} size={11} cls="pa-ink" anchor="middle">MARCH</Label>
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x={378 + (i % 4) * 18} y={130 + Math.floor(i / 4) * 26} width={12} height={16} rx={4}
          className={i >= 5 && i <= 7 ? "pa-rose" : "pa-cell"} />
      ))}
    </Card>
    <Sparkle x={150} y={44} s={0.8} />
    <Sparkle x={448} y={258} />
  </g>
);

const Library = () => {
  const books = [
    [26, 118, "pa-rose"], [20, 100, "pa-gold"], [30, 126, "pa-plum"], [18, 92, "pa-ink-soft"], [24, 110, "pa-rose-soft"],
    [28, 122, "pa-gold-soft"], [22, 104, "pa-rose"], [30, 116, "pa-plum"], [18, 96, "pa-gold"],
  ] as const;
  let x = 40;
  return (
    <g>
      {/* shelf */}
      <rect x={28} y={206} width={300} height={12} rx={4} className="pa-ink-soft" />
      <rect x={28} y={66} width={300} height={8} rx={4} className="pa-ink-faint" />
      {books.map(([w, h, cls], i) => {
        const bx = x;
        x += w + 4;
        const tilt = i === 5 ? -8 : 0;
        return (
          <g key={i} transform={`rotate(${tilt} ${bx + w} 206)`}>
            <rect x={bx} y={206 - h} width={w} height={h} rx={3} className={cls} />
            <rect x={bx + 4} y={206 - h + 14} width={w - 8} height={4} rx={2} className="pa-highlight-fill" />
            <rect x={bx + 4} y={206 - 22} width={w - 8} height={3} rx={1.5} className="pa-highlight-fill" />
          </g>
        );
      })}
      {/* checkout ticket */}
      <g transform="translate(336 112) rotate(6)">
        <rect x={3} y={6} width={124} height={166} rx={10} className="pa-shadow" />
        <rect width={124} height={166} rx={10} className="pa-paper" />
        <rect width={124} height={36} rx={10} className="pa-rose" />
        <rect y={24} width={124} height={12} className="pa-rose" />
        <Label x={62} y={23} size={12} cls="pa-on-rose" anchor="middle" serif>Checked out</Label>
        <Label x={14} y={60} size={10} cls="pa-muted">DUE IN</Label>
        <Label x={14} y={86} size={24} serif>7 days</Label>
        {Array.from({ length: 22 }, (_, i) => (
          <rect key={i} x={14 + i * 4.4} y={104} width={i % 3 === 0 ? 2.6 : 1.4} height={34} className="pa-ink" />
        ))}
        <Label x={14} y={154} size={9.5} cls="pa-muted">STU-2023-ECE-114</Label>
      </g>
      <Sparkle x={300} y={50} />
      <Sparkle x={460} y={80} s={0.7} />
    </g>
  );
};

const Safety = () => (
  <g>
    {/* road */}
    <path d="M0 320 L190 150 L290 150 L480 320Z" className="pa-road" />
    <path d="M240 158 L240 320" className="pa-road-line" strokeWidth={4} strokeDasharray="16 14" />
    {/* car */}
    <g transform="translate(226 176)">
      <rect x={-26} y={0} width={52} height={24} rx={8} className="pa-ink-soft" />
      <rect x={-18} y={-12} width={36} height={16} rx={6} className="pa-ink-soft" />
      <circle cx={-16} cy={10} r={4} className="pa-gold pa-blink" />
      <circle cx={16} cy={10} r={4} className="pa-gold pa-blink" />
    </g>
    {/* cone */}
    <g transform="translate(116 268)">
      <path d="M-28 22 L0 -58 L28 22Z" className="pa-gold" />
      <path d="M-18 -6 L18 -6 L13 -22 L-13 -22Z M-23 10 L23 10 L20 0 L-20 0Z" className="pa-paper" />
      <rect x={-40} y={20} width={80} height={10} rx={4} className="pa-ink-soft" />
    </g>
    {/* alert post with LED waves */}
    <g transform="translate(340 132)">
      <rect x={-4} y={0} width={8} height={120} rx={4} className="pa-ink-soft" />
      <circle cx={0} cy={0} r={12} className="pa-rose" />
      {[24, 40, 56].map((r, k) => (
        <path key={r} d={`M${r * 0.7} ${-r * 0.7} a${r} ${r} 0 0 1 0 ${r * 1.4}`} className="pa-rose-line pa-pulse" fill="none" strokeWidth={2.5}
          style={{ animationDelay: `${k * 0.25}s` }} />
      ))}
    </g>
    {/* NE555 chip */}
    <g transform="translate(398 248)">
      {[0, 1, 2, 3].map((k) => (
        <g key={k}>
          <rect x={-38 + k * 20} y={-36} width={6} height={10} rx={1} className="pa-chip-pin" />
          <rect x={-38 + k * 20} y={26} width={6} height={10} rx={1} className="pa-chip-pin" />
        </g>
      ))}
      <rect x={-50} y={-28} width={100} height={56} rx={6} className="pa-chip" />
      <circle cx={-36} cy={-14} r={4} className="pa-chip-dot" />
      <Label x={6} y={7} size={15} cls="pa-chip-text" anchor="middle">NE555</Label>
    </g>
    <Pill x={30} y={26} w={140} text="Vehicle detected" />
    <Sparkle x={448} y={40} />
  </g>
);

const Fire = () => (
  <g>
    {/* room */}
    <rect x={30} y={40} width={300} height={244} rx={18} className="pa-paper" />
    <path d="M30 230 H330" className="pa-ink-line" strokeWidth={2} />
    {/* smoke sensor */}
    <rect x={150} y={40} width={60} height={10} rx={3} className="pa-ink-soft" />
    <ellipse cx={180} cy={56} rx={26} ry={8} className="pa-paper-2" />
    <circle cx={180} cy={56} r={3} className="pa-rose pa-blink" />
    {[16, 28].map((r) => (
      <path key={r} d={`M${180 - r} ${62 + r * 0.25} a${r} ${r * 0.5} 0 0 0 ${r * 2} 0`} className="pa-rose-line pa-pulse" fill="none" strokeWidth={2} />
    ))}
    {/* flame */}
    <g transform="translate(96 230)">
      <path d="M0 0 C-30 -10 -30 -50 -8 -78 C-6 -58 6 -52 10 -66 C26 -48 34 -14 0 0Z" className="pa-rose pa-flicker" />
      <path d="M2 -4 C-12 -10 -10 -32 2 -44 C6 -32 14 -28 14 -22 C18 -12 12 -4 2 -4Z" className="pa-gold pa-flicker" />
    </g>
    {/* sprinkler drops */}
    {[[118, 102], [132, 128], [104, 138], [146, 108]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} q4 8 0 12 q-4 -4 0 -12z`} className="pa-drop pa-fall" style={{ animationDelay: `${i * 0.3}s` }} />
    ))}
    {/* survivor detected */}
    <g transform="translate(250 176)">
      <circle cx={0} cy={0} r={46} className="pa-rose-line pa-spin-slow" fill="none" strokeWidth={2} strokeDasharray="6 6" />
      <circle cx={0} cy={-18} r={10} className="pa-ink-soft" />
      <path d="M-16 24 q0 -28 16 -28 q16 0 16 28z" className="pa-ink-soft" />
    </g>
    {/* phone alert */}
    <g transform="translate(352 74)">
      <rect x={3} y={6} width={110} height={196} rx={18} className="pa-shadow" />
      <rect width={110} height={196} rx={18} className="pa-ink" />
      <rect x={7} y={10} width={96} height={176} rx={13} className="pa-paper" />
      <rect x={15} y={30} width={80} height={74} rx={10} className="pa-rose" />
      <Label x={25} y={52} size={11} cls="pa-on-rose" serif>Fire detected</Label>
      <Label x={25} y={70} size={9.5} cls="pa-on-rose">Room 2</Label>
      <Label x={25} y={86} size={9.5} cls="pa-on-rose">1 person inside</Label>
      <rect x={15} y={114} width={80} height={8} rx={4} className="pa-ink-faint" />
      <rect x={15} y={128} width={56} height={8} rx={4} className="pa-ink-faint" />
    </g>
    <Sparkle x={460} y={290} s={0.8} />
  </g>
);

const Drip = () => (
  <g>
    <Card x={150} y={30} w={180} h={260} r={22}>
      <rect x={196} y={70} width={88} height={150} rx={20} className="pa-cell" />
      <rect x={196} y={150} width={88} height={70} rx={20} className="pa-rose" />
      <Label x={240} y={60} size={12} cls="pa-muted" anchor="middle">IV level · bed 4</Label>
      <Label x={240} y={258} size={22} serif anchor="middle">20%</Label>
    </Card>
    <Pill x={318} y={44} w={140} text="Nurse alerted" />
    <Sparkle x={110} y={70} />
  </g>
);

const SCENES: Record<ProjectArtId, () => JSX.Element> = {
  hotel: Hotel,
  staff: Staff,
  library: Library,
  safety: Safety,
  fire: Fire,
  drip: Drip,
};

export function ProjectArt({ id, title }: { id: ProjectArtId; title: string }) {
  const gid = useId().replace(/:/g, "");
  const Scene = SCENES[id];
  return (
    <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`Illustration of ${title}`} className="project-art w-full h-full">
      <defs>
        <linearGradient id={`bg-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" className="pa-stop-a" />
          <stop offset="1" className="pa-stop-b" />
        </linearGradient>
        <radialGradient id={`glow-${gid}`} cx="0.85" cy="0.1" r="0.7">
          <stop offset="0" className="pa-stop-glow" />
          <stop offset="1" className="pa-stop-glow" stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect width={480} height={320} fill={`url(#bg-${gid})`} />
      <rect width={480} height={320} fill={`url(#glow-${gid})`} />
      <Scene />
    </svg>
  );
}
