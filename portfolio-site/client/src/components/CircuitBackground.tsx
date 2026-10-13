import { useEffect, useRef } from "react";

type Pt = [number, number];
interface Trace {
  pts: Pt[];
  seg: number[];
  len: number;
}
interface Pulse {
  trace: Trace;
  d: number;
  rose: boolean;
}

const GRID = 22;

/**
 * Full-page background: gold PCB traces with glowing signal pulses running
 * along them. Pulses spark from the trace nearest the cursor. Colors follow
 * the theme (--primary / --accent / --background), so dark mode just works.
 */
export function CircuitBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, last = performance.now();
    let traces: Trace[] = [];
    let pulses: Pulse[] = [];
    let mouse: Pt | null = null;
    let colors = { rose: "", gold: "", bg: "", dark: false };

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      const v = (n: string) => cs.getPropertyValue(n).trim();
      colors = { rose: v("--primary"), gold: v("--accent"), bg: v("--background"), dark: document.documentElement.classList.contains("dark") };
    };
    const hsla = (hsl: string, a: number) => `hsl(${hsl} / ${a})`;

    const build = () => {
      traces = [];
      const count = Math.round((w * h) / 42000);
      for (let i = 0; i < count; i++) {
        let x = Math.round((Math.random() * w) / GRID) * GRID;
        let y = Math.round((Math.random() * h) / GRID) * GRID;
        const pts: Pt[] = [[x, y]];
        let dir = Math.floor(Math.random() * 4);
        const legs = 4 + Math.floor(Math.random() * 4);
        for (let k = 0; k < legs; k++) {
          const len = (2 + Math.floor(Math.random() * 6)) * GRID;
          const dx = [1, 0, -1, 0][dir], dy = [0, 1, 0, -1][dir];
          x += dx * len;
          y += dy * len;
          pts.push([x, y]);
          // 45° bend into a new direction, like real PCB routing
          if (Math.random() < 0.6) {
            const nd = (dir + (Math.random() < 0.5 ? 1 : 3)) % 4;
            x += (dx + [1, 0, -1, 0][nd]) * GRID * 0.7;
            y += (dy + [0, 1, 0, -1][nd]) * GRID * 0.7;
            pts.push([x, y]);
            dir = nd;
          }
        }
        const seg: number[] = [];
        let len = 0;
        for (let k = 1; k < pts.length; k++) {
          const l = Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]);
          seg.push(l);
          len += l;
        }
        traces.push({ pts, seg, len });
      }
      pulses = [];
    };

    const pointAt = (t: Trace, d: number): Pt => {
      let acc = 0;
      for (let k = 0; k < t.seg.length; k++) {
        if (acc + t.seg[k] >= d) {
          const f = (d - acc) / t.seg[k], a = t.pts[k], b = t.pts[k + 1];
          return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
        }
        acc += t.seg[k];
      }
      return t.pts[t.pts.length - 1];
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      draw(0);
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineJoin = "round";
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = hsla(colors.gold, colors.dark ? 0.22 : 0.32);
      for (const t of traces) {
        ctx.beginPath();
        t.pts.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.stroke();
        for (const [x, y] of [t.pts[0], t.pts[t.pts.length - 1]]) {
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = hsla(colors.bg, 1);
          ctx.fill();
          ctx.stroke();
        }
      }
      if (reduce || !traces.length) return;

      // spawn ambient pulses, plus extra ones from the trace nearest the cursor
      if (Math.random() < dt * 4) pulses.push({ trace: traces[(Math.random() * traces.length) | 0], d: 0, rose: Math.random() < 0.6 });
      if (mouse && Math.random() < dt * 6) {
        let best = traces[0], bd = Infinity;
        for (const t of traces) {
          const d = Math.hypot(t.pts[0][0] - mouse[0], t.pts[0][1] - mouse[1]);
          if (d < bd) { bd = d; best = t; }
        }
        pulses.push({ trace: best, d: 0, rose: true });
      }

      pulses = pulses.filter((p) => p.d <= p.trace.len);
      for (const p of pulses) {
        p.d += dt * 150;
        const c = p.rose ? colors.rose : colors.gold;
        for (let k = 0; k < 6; k++) {
          const [x, y] = pointAt(p.trace, Math.max(0, p.d - k * 6));
          ctx.beginPath();
          ctx.arc(x, y, 3.4 - k * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = hsla(c, 0.9 - k * 0.15);
          ctx.fill();
        }
        const [x, y] = pointAt(p.trace, p.d);
        const g = ctx.createRadialGradient(x, y, 0, x, y, 18);
        g.addColorStop(0, hsla(c, 0.45));
        g.addColorStop(1, hsla(c, 0));
        ctx.fillStyle = g;
        ctx.fillRect(x - 18, y - 18, 36, 36);
      }
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden) { last = now; return; }
      draw(Math.min(0.05, (now - last) / 1000));
      last = now;
    };

    readColors();
    resize();
    const themeObs = new MutationObserver(() => { readColors(); draw(0); });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    const onMove = (e: PointerEvent) => (mouse = [e.clientX, e.clientY]);
    const onLeave = () => (mouse = null);
    let resizeTimer = 0;
    const onResize = () => { window.clearTimeout(resizeTimer); resizeTimer = window.setTimeout(resize, 150); };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    if (!reduce) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      themeObs.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 w-screen h-screen pointer-events-none -z-10" aria-hidden="true" />;
}
