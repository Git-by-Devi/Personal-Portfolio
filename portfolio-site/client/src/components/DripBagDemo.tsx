import { useEffect, useRef, useState } from "react";

const ALERT_AT = 20; // % fluid left when the nurse is alerted

/**
 * Interactive mini simulation of the Drip Bag Monitoring System: the IV bag
 * drains while visible, and the alert fires once it drops below 20%.
 */
export function DripBagDemo() {
  const [level, setLevel] = useState(80);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;
    let id = 0;
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(id);
      if (e.isIntersecting) id = window.setInterval(() => setLevel((l) => Math.max(4, l - 0.6)), 150);
    });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      window.clearInterval(id);
    };
  }, []);

  const low = level <= ALERT_AT;

  return (
    <div ref={ref} className="h-64 flex items-center justify-center gap-8 bg-gradient-to-br from-primary/10 to-accent/15 dark:from-gray-800 dark:to-gray-900">
      <div className="relative w-20 h-36 rounded-[14px_14px_26px_26px] border-2 border-primary/25 bg-white/80 dark:bg-gray-900/70 overflow-hidden" aria-hidden="true">
        <div
          className={`absolute inset-x-0 bottom-0 transition-[height] duration-150 ease-linear ${
            low ? "bg-gradient-to-b from-orange-300 to-orange-600" : "bg-gradient-to-b from-primary/50 to-primary"
          }`}
          style={{ height: `${level}%` }}
        />
        <div className="absolute left-1/2 -bottom-0 w-1 h-3 -translate-x-1/2 bg-primary/40" />
      </div>
      <div>
        <p className="font-display text-4xl font-bold leading-none tabular-nums dark:text-gray-100">{Math.round(level)}%</p>
        <p className="text-sm text-muted-foreground mt-1">IV fluid level · bed 4</p>
        <p className={`text-sm font-semibold text-orange-600 dark:text-orange-400 mt-2 transition-opacity ${low ? "opacity-100 animate-pulse" : "opacity-0"}`} role="status">
          ⚠ Low fluid, nurse alerted
        </p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLevel(95);
          }}
          className="mt-3 text-xs font-medium px-3 py-1.5 rounded-full border border-primary/30 bg-white/70 dark:bg-gray-800 hover:border-primary transition-colors"
        >
          Refill bag
        </button>
      </div>
    </div>
  );
}
