import { motion } from 'framer-motion';

export default function ManifestoSection() {
  return (
    <section className="py-24 bg-deep-forest text-paper relative overflow-hidden" id="filosofi">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest text-earthy-gold">
          Pondasi Nilai &amp; Komitmen Kami
        </span>

        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic leading-tight text-paper-warm">
          "Ilmu tanpa adab ibarat api tanpa kayu bakar; adab tanpa ilmu ibarat ruh tanpa jasad.
          Di sinilah keduanya berpadu."
        </blockquote>

        <p className="text-sm sm:text-base text-paper-warm/80 font-normal leading-relaxed max-w-2xl mx-auto">
          Yayasan Albakriatul Mudassirin didirikan atas keyakinan bahwa anak cucu kita berhak
          menerima pendidikan Islam yang tidak terasing dari kecanggihan sains dan profesi masa
          depan.
        </p>

        <div className="pt-4 flex justify-center items-center gap-6 text-xs text-paper-warm/70 uppercase tracking-widest font-mono">
          <span>Tarbiyah</span>
          <span>•</span>
          <span>Ta'dib</span>
          <span>•</span>
          <span>Maharah</span>
        </div>
      </motion.div>
    </section>
  );
}
