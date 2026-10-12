import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, X } from "lucide-react";

const RESUME = "/DEVI_S_T_RESUME.pdf";

/** Slide-over panel that previews the résumé PDF, with download and open links. */
export function ResumeDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Résumé preview"
            className="fixed top-0 right-0 bottom-0 z-[61] w-full sm:w-[min(640px,92vw)] bg-background border-l border-primary/15 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 34 }}
          >
            <header className="flex items-center justify-between gap-3 px-5 py-4 border-b border-primary/10">
              <p className="font-display text-xl font-bold">Résumé</p>
              <div className="flex items-center gap-2">
                <a href={RESUME} download="DEVI_S_T_RESUME.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  <Download className="w-4 h-4" /> Download
                </a>
                <button type="button" onClick={onClose} aria-label="Close résumé preview" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-muted transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </header>
            <iframe src={`${RESUME}#view=FitH`} title="Devi Selvakumar résumé" className="flex-1 w-full bg-white" />
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="sm:hidden flex items-center justify-center gap-2 py-3 text-sm font-medium text-primary border-t border-primary/10">
              Open the PDF in a new tab <ExternalLink className="w-4 h-4" />
            </a>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
