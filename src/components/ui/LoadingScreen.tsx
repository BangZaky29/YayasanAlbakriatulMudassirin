import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function LoadingScreen({
  onComplete,
  minDuration = 1800,
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent background scrolling while loading screen is active
    document.body.style.overflow = 'hidden';

    // Smooth simulated progress tick
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const diff = Math.random() * 25 + 10;
        return Math.min(prev + diff, 100);
      });
    }, 180);

    // Complete after minimum duration
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }, 350);
    }, minDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-paper flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle Ambient Background Grain & Glow */}
          <div className="absolute inset-0 paper-texture opacity-40 pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full bg-earthy-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full bg-deep-forest/10 blur-3xl pointer-events-none translate-y-24" />

          {/* Central Logo Container */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
            {/* Glowing Logo Frame */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, rotate: -6 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mb-6"
            >
              {/* Outer Pulsing Aura Ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-3 rounded-full border border-earthy-gold/40 pointer-events-none"
              />

              {/* Logo Emblem */}
              <div className="relative p-2.5 rounded-full shadow-2xl bg-paper/90 backdrop-blur-md border border-earthy-gold/30">
                <Logo className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-lg" size={180} />
              </div>
            </motion.div>

            {/* Foundation Name with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
              className="space-y-1.5 mb-8"
            >
              <span className="block font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-earthy-gold">
                Yayasan Pendidikan Islam
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-deep-forest font-semibold tracking-tight">
                Albakriatul Mudassirin
              </h1>
              <p className="font-serif italic text-xs text-ink-muted">
                TK • SMP IT Terpadu • SMK Vokasi TJKT
              </p>
            </motion.div>

            {/* Elegant Slim Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="w-48 sm:w-56 space-y-2.5"
            >
              <div className="w-full h-1 bg-deep-forest/10 rounded-full overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-deep-forest via-earthy-gold to-deep-forest rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                />
              </div>

              {/* Philosophical Motto */}
              <div className="flex items-center justify-center gap-3 text-[10px] font-mono tracking-widest text-ink-muted/80 uppercase">
                <span>Tarbiyah</span>
                <span>•</span>
                <span>Ta'dib</span>
                <span>•</span>
                <span>Maharah</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
