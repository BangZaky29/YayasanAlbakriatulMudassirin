import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageCircle } from 'lucide-react';
import type { PPDBFormData } from '../../types';

interface PPDBDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PPDBDrawer({ isOpen, onClose }: PPDBDrawerProps) {
  const [formData, setFormData] = useState<PPDBFormData>({
    jenjang: 'TK',
    namaCalon: '',
    namaOrtu: '',
    whatsapp: '',
    asalSekolah: '',
    catatan: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const jenjangLabels: Record<string, string> = {
      TK: 'TK (Taman Kanak-Kanak • Usia Dini 4-6 Thn)',
      SMP_IT: "SMP IT Terpadu (Tahfidz Qur'an & Sains • Usia 12-15 Thn)",
      SMK: 'SMK Vokasi Industri (Teknik Jaringan TJKT • Usia 15-18 Thn)',
    };
    const jenjangText = jenjangLabels[formData.jenjang] || formData.jenjang;

    // Beautifully structured WhatsApp message with polite Islamic greeting & markdown
    const message = `*FORMULIR PENDAFTARAN SANTRI / SISWA BARU*
*YAYASAN ALBAKRIATUL MUDASSIRIN*
_Tahun Ajaran 2025/2026 • Kampus Ciaruteun Ilir, Bogor_
━━━━━━━━━━━━━━━━━━━━━

*Assalamu'alaikum Warahmatullahi Wabarakatuh,*

Yth. Panitia Penerimaan Santri Baru (PPDB),
Melalui pesan ini, saya bermaksud mendaftarkan putra/putri kami dengan rincian data:

📋 *DATA CALON SANTRI / SISWA:*
• *Jenjang Pilihan:* ${jenjangText}
• *Nama Lengkap:* ${formData.namaCalon.trim()}
• *Nama Orang Tua/Wali:* ${formData.namaOrtu.trim()}
• *No. WhatsApp Aktif:* ${formData.whatsapp.trim()}
• *Asal Sekolah:* ${formData.asalSekolah.trim() || '-'}

📝 *CATATAN / MINAT BEASISWA:*
"${formData.catatan.trim() || 'Mohon informasi jadwal observasi santri dan survei kampus.'}"

━━━━━━━━━━━━━━━━━━━━━
Mohon arahan mengenai tahapan seleksi berkas, tes pemetaan, serta informasi administrasi selanjutnya.

_Jazakumullahu Khairan Katsiran._
*Wassalamu'alaikum Warahmatullahi Wabarakatuh.*`;

    const waUrl = `https://wa.me/6281995770190?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-lg h-full bg-paper shadow-2xl border-l border-deep-forest/15 z-10 flex flex-col justify-between overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="p-6 sm:p-8 border-b border-deep-forest/10 flex items-start justify-between bg-paper-warm/60">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-deep-forest text-paper text-[10px] font-mono uppercase tracking-wider mb-2">
                  Portal Admisi Santri
                </span>
                <h3 className="font-serif text-2xl text-ink font-semibold">
                  Penerimaan Siswa &amp; Santri Baru
                </h3>
                <p className="text-xs text-ink-muted mt-1">
                  Yayasan Albakriatul Mudassirin Tahun Ajaran 2025/2026
                </p>
              </div>
              <button
                aria-label="Tutup Panel"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-paper-subtle text-ink-muted hover:text-ink transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Content Form */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              {/* Step / Promo Indicator */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-earthy-gold/30 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-earthy-gold text-white flex items-center justify-center font-bold text-xs shrink-0">
                  ★
                </div>
                <div className="text-xs">
                  <strong className="font-semibold text-ink">Gelombang 1 Dibuka Sekarang</strong>
                  <p className="text-ink-muted text-[11px]">
                    Dapatkan keringanan biaya formulir &amp; penempatan kamar asrama prioritas.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-deep-forest mx-auto flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-serif text-2xl text-deep-forest font-semibold">
                    Alhamdulillah, Formulir Terkirim!
                  </h4>
                  <p className="text-xs text-ink-muted max-w-sm mx-auto leading-relaxed">
                    Data Anda telah dibuka di aplikasi WhatsApp tim admisi kami. Panitia PPDB akan segera menghubungi untuk konfirmasi berkas dan jadwal tes pemetaan.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-deep-forest text-paper text-xs font-semibold hover:bg-forest-light transition-all"
                    >
                      Tutup Jendela Ini
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  {/* Jenjang Choice */}
                  <div>
                    <label className="block font-semibold text-ink mb-1.5">
                      Pilih Jenjang Pendidikan
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'TK', label: 'TK', sub: 'Usia Dini' },
                        { id: 'SMP_IT', label: 'SMP IT', sub: 'Tahfidz & Sains' },
                        { id: 'SMK', label: 'SMK', sub: 'Vokasi TJKT' },
                      ].map((item) => (
                        <label key={item.id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="jenjang"
                            value={item.id}
                            checked={formData.jenjang === item.id}
                            onChange={() =>
                              setFormData({ ...formData, jenjang: item.id as PPDBFormData['jenjang'] })
                            }
                            className="sr-only"
                          />
                          <div
                            className={`p-3 text-center rounded-xl border transition-all ${
                              formData.jenjang === item.id
                                ? 'bg-deep-forest text-paper border-deep-forest shadow-sm'
                                : 'border-deep-forest/20 text-ink hover:bg-paper-subtle'
                            }`}
                          >
                            <span className="block font-bold">{item.label}</span>
                            <span className="text-[10px] opacity-80">{item.sub}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Nama Calon Siswa */}
                  <div>
                    <label className="block font-semibold text-ink mb-1">
                      Nama Lengkap Calon Santri / Siswa <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.namaCalon}
                      onChange={(e) => setFormData({ ...formData, namaCalon: e.target.value })}
                      placeholder="Contoh: Muhammad Faiz Al-Farabi"
                      className="w-full px-4 py-2.5 rounded-xl border border-deep-forest/20 bg-paper focus:outline-none focus:ring-2 focus:ring-deep-forest/30 text-ink"
                    />
                  </div>

                  {/* Nama Ortu & WA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-ink mb-1">
                        Nama Orang Tua / Wali <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.namaOrtu}
                        onChange={(e) => setFormData({ ...formData, namaOrtu: e.target.value })}
                        placeholder="Nama Ayah / Ibu"
                        className="w-full px-4 py-2.5 rounded-xl border border-deep-forest/20 bg-paper focus:outline-none focus:ring-2 focus:ring-deep-forest/30 text-ink"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-ink mb-1">
                        No. WhatsApp Aktif <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-4 py-2.5 rounded-xl border border-deep-forest/20 bg-paper focus:outline-none focus:ring-2 focus:ring-deep-forest/30 text-ink"
                      />
                    </div>
                  </div>

                  {/* Asal Sekolah */}
                  <div>
                    <label className="block font-semibold text-ink mb-1">
                      Asal Sekolah Sebelumnya
                    </label>
                    <input
                      type="text"
                      value={formData.asalSekolah}
                      onChange={(e) => setFormData({ ...formData, asalSekolah: e.target.value })}
                      placeholder="Nama TK/SD/SMP Asal"
                      className="w-full px-4 py-2.5 rounded-xl border border-deep-forest/20 bg-paper focus:outline-none focus:ring-2 focus:ring-deep-forest/30 text-ink"
                    />
                  </div>

                  {/* Catatan Khusus */}
                  <div>
                    <label className="block font-semibold text-ink mb-1">
                      Catatan Khusus / Minat Beasiswa
                    </label>
                    <textarea
                      rows={3}
                      value={formData.catatan}
                      onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                      placeholder="Tuliskan jika berminat beasiswa tahfidz Qur'an atau jalur prestasi..."
                      className="w-full px-4 py-2.5 rounded-xl border border-deep-forest/20 bg-paper focus:outline-none focus:ring-2 focus:ring-deep-forest/30 text-ink resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-deep-forest text-paper font-semibold hover:bg-forest-light active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Kirim Formulir &amp; Sambungkan ke WhatsApp Admisi</span>
                      <ArrowRight className="w-4 h-4 text-earthy-gold" />
                    </button>
                  </div>

                  <p className="text-[11px] text-ink-muted text-center pt-2">
                    Data Anda dijamin kerahasiaannya oleh panitia PPDB Yayasan Albakriatul Mudassirin.
                  </p>
                </form>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-deep-forest/10 bg-paper-subtle/40 text-[11px] text-ink-muted flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-deep-forest" />
                Butuh bantuan langsung?
              </span>
              <a
                href="https://wa.me/6281995770190"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-deep-forest hover:underline"
              >
                Chat WhatsApp Admisi →
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
