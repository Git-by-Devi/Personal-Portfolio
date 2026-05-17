import { useEffect, useState } from 'react';

export default function CursorTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 rounded-full bg-white/30 blur-md animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/50 blur-sm" />
      </div>
    </div>
  );
}
