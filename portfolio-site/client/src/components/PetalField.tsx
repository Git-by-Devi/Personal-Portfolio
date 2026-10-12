import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  spin: number;
  sway: number;
  gold: boolean;
}

/**
 * A few rose and gold petals drifting down behind/around the hero photo.
 * Colors come from the theme's --primary and --accent, so dark mode works.
 */
export function PetalField({ count = 16, className = "" }: { count?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;

    const color = (name: string) => `hsl(${getComputedStyle(document.documentElement).getPropertyValue(name).trim()})`;
    let rose = color("--primary"), gold = color("--accent");
    const themeObserver = new MutationObserver(() => {
      rose = color("--primary");
      gold = color("--accent");
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const spawn = (anywhere: boolean): Petal => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : -12,
      size: 4 + Math.random() * 6,
      speed: 0.25 + Math.random() * 0.45,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.03,
      sway: Math.random() * Math.PI * 2,
      gold: Math.random() < 0.35,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let petals = Array.from({ length: count }, () => spawn(true));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      petals = petals.map((p) => {
        if (!reduce) {
          p.y += p.speed;
          p.sway += 0.015;
          p.x += Math.sin(p.sway) * 0.35;
          p.angle += p.spin;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = p.gold ? gold : rose;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return p.y > h + 12 ? spawn(false) : p;
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      themeObserver.disconnect();
    };
  }, [count]);

  return <canvas ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true" />;
}
