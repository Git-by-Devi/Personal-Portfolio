/**
 * Script greeting that writes itself left to right, with a glowing gold
 * pen tip travelling along the line. Styles live in index.css (.handwritten).
 */
export function HandwrittenGreeting({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`handwritten font-accent ${className}`} aria-label={text}>
      <span className="handwritten-ink" aria-hidden="true">
        {text}
      </span>
      <span className="handwritten-nib" aria-hidden="true" />
    </span>
  );
}
