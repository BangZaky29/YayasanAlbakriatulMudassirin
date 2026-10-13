import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface FloatingCTAProps {
  onOpenPPDB: () => void;
}

export default function FloatingCTA({ onOpenPPDB }: FloatingCTAProps) {
  return (
    <aside className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
        onClick={onOpenPPDB}
        className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full bg-deep-forest text-paper shadow-2xl border border-earthy-gold/40 hover:bg-forest-light active:scale-95 transition-all group cursor-pointer backdrop-blur-md"
        aria-label="Daftar PPDB Online"
      >
        {/* Ping Dot */}
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-earthy-gold opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-earthy-gold" />
        </span>

        <div className="text-left font-sans">
          <span className="block text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-earthy-gold">
            PPDB 2025/2026
          </span>
          <span className="block text-[11px] sm:text-xs font-semibold text-white leading-tight">
            Daftar / Konsultasi Online
          </span>
        </div>

        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-earthy-gold transition-transform group-hover:translate-x-1 shrink-0" />
      </motion.button>
    </aside>
  );
}
