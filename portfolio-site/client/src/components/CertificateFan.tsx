import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export interface Certificate {
  title: string;
  issuer: string;
  image: string;
}

const VISIBLE = 5; // cards fanned out behind the top one

/**
 * All certificates as a fanned deck. Click the deck or use the arrows /
 * keyboard to flip; the top card links to the full-size image.
 */
export function CertificateFan({ items }: { items: Certificate[] }) {
  const [top, setTop] = useState(0);
  const reduce = useReducedMotion();
  const n = items.length;

  const next = useCallback(() => setTop((t) => (t + 1) % n), [n]);
  const prev = useCallback(() => setTop((t) => (t - 1 + n) % n), [n]);

  useEffect(() => {
    // Warm the cache for the next couple of images so flips feel instant
    [1, 2].forEach((k) => {
      const img = new Image();
      img.src = items[(top + k) % n].image;
    });
  }, [top, items, n]);

  const current = items[top];

  return (
    <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
      <div className="flex items-center justify-center h-[300px] sm:h-[380px] pr-16">
      <div
        className="relative w-full max-w-[420px] aspect-[4/3] select-none outline-none"
        role="group"
        aria-roledescription="carousel"
        aria-label="Certificates"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") prev();
        }}
      >
        {items.map((cert, i) => {
          const depth = (i - top + n) % n;
          const visible = depth < VISIBLE;
          return (
            <motion.button
              key={cert.image}
              type="button"
              onClick={next}
              aria-hidden={depth !== 0}
              tabIndex={-1}
              className="absolute inset-0 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-primary/15 dark:border-gray-700 shadow-xl cursor-pointer"
              style={{ zIndex: 100 - depth }}
              initial={false}
              animate={{
                x: visible ? depth * 22 : 120,
                y: visible ? depth * 6 : 20,
                rotate: visible ? depth * 4 - 3 : 14,
                scale: visible ? 1 - depth * 0.045 : 0.85,
                opacity: visible ? 1 : 0,
              }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 28 }}
            >
              <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-full object-cover" />
            </motion.button>
          );
        })}
      </div>
      </div>

      <div className="space-y-5">
        <p className="text-sm uppercase tracking-widest text-primary font-medium">
          {top + 1} / {n}
        </p>
        <motion.div key={current.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <h3 className="text-3xl font-display font-bold dark:text-gray-100 text-balance">{current.title}</h3>
          <p className="mt-2 text-muted-foreground dark:text-gray-400 uppercase tracking-wide text-sm">{current.issuer}</p>
        </motion.div>
        <div className="flex items-center gap-3 pt-2">
          <button type="button" onClick={prev} aria-label="Previous certificate" className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button type="button" onClick={next} aria-label="Next certificate" className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
          <a href={current.image} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4">
            View full size <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">Click the deck or use ← → to flip through.</p>
      </div>
    </div>
  );
}
