import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Map, ChevronRight, Phone } from 'lucide-react';
import { smoothScrollTo } from '../../utils/smoothScroll';

export type LegalTab = 'privacy' | 'terms' | 'sitemap';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onTabChange: (tab: LegalTab) => void;
  onClose: () => void;
  onOpenPPDB: () => void;
}

export default function LegalModal({
  isOpen,
  activeTab,
  onTabChange,
  onClose,
  onOpenPPDB,
}: LegalModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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

  const tabs = [
    { id: 'privacy' as LegalTab, label: 'Kebijakan Privasi', icon: ShieldCheck },
    { id: 'terms' as LegalTab, label: 'Syarat & Ketentuan', icon: FileText },
    { id: 'sitemap' as LegalTab, label: 'Peta Situs', icon: Map },
  ];

  const handleSitemapNav = (hash: string) => {
    onClose();
    setTimeout(() => {
      smoothScrollTo(hash, 76, 750);
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/65 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[88vh] bg-paper rounded-3xl shadow-2xl border border-deep-forest/15 z-10 flex flex-col overflow-hidden text-ink"
          >
            {/* Header */}
            <div className="p-5 sm:p-7 border-b border-deep-forest/10 bg-paper-warm/70 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-deep-forest text-earthy-gold flex items-center justify-center font-display font-semibold text-sm border border-earthy-gold/30">
                  AM
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-deep-forest leading-tight">
                    Yayasan Albakriatul Mudassirin
                  </h3>
                  <p className="text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                    Informasi Legalitas &amp; Struktur Lembaga
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Tutup Jendela"
                className="p-2 rounded-full hover:bg-paper-subtle text-ink-muted hover:text-ink transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-deep-forest/10 px-5 sm:px-7 bg-paper gap-2 overflow-x-auto shrink-0 scrollbar-none">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`py-3.5 px-3 sm:px-4 text-xs font-semibold tracking-wide flex items-center gap-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'border-deep-forest text-deep-forest'
                        : 'border-transparent text-ink-muted hover:text-ink hover:border-deep-forest/30'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-earthy-gold' : 'text-ink-muted'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Body / Tab Contents */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm leading-relaxed text-ink-muted">
              {/* ===================================================
                  TAB 1: KEBIJAKAN PRIVASI
                  =================================================== */}
              {activeTab === 'privacy' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-earthy-gold/25 text-ink">
                    <h4 className="font-serif text-base font-bold text-deep-forest mb-1">
                      Komitmen Amanah Privasi Data Santri &amp; Wali
                    </h4>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      Yayasan Albakriatul Mudassirin memegang teguh amanah syar'i dan hukum positif Indonesia dalam menjaga kerahasiaan data pribadi calon santri, santri aktif, alumni, serta orang tua/wali.
                    </p>
                  </div>

                  <section className="space-y-2">
                    <h5 className="font-semibold text-deep-forest text-xs sm:text-sm uppercase tracking-wider font-mono">
                      1. Pengumpulan Data Calon Santri &amp; Wali
                    </h5>
                    <p>
                      Data yang dikumpulkan melalui formulir pendaftaran PPDB (nama santri, nama orang tua, nomor kontak WhatsApp, asal sekolah, dan catatan beasiswa) semata-mata digunakan untuk:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li>Verifikasi berkas administrasi dan keabsahan calon peserta didik.</li>
                      <li>Penjadwalan wawancara orang tua dan tes pemetaan potensi santri.</li>
                      <li>Komunikasi resmi panitia PPDB terkait kelulusan dan penempatan kamar asrama.</li>
                    </ul>
                  </section>

                  <section className="space-y-2">
                    <h5 className="font-semibold text-deep-forest text-xs sm:text-sm uppercase tracking-wider font-mono">
                      2. Kerahasiaan dan Keamanan Data
                    </h5>
                    <p>
                      Kami menjamin bahwa data pribadi Anda <strong>tidak akan pernah dijual, disewakan, atau dibagikan</strong> kepada pihak ketiga di luar kepentingan operasional pendidikan resmi Yayasan Albakriatul Mudassirin dan pelaporan resmi ke Kementerian Agama RI / Kemendikbudristek.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h5 className="font-semibold text-deep-forest text-xs sm:text-sm uppercase tracking-wider font-mono">
                      3. Dokumentasi Kegiatan Belajar &amp; Prestasi
                    </h5>
                    <p>
                      Foto dan video dokumentasi kegiatan santri di lingkungan kampus Ciaruteun Ilir digunakan untuk keperluan syiar pendidikan, publikasi website resmi, serta laporan berkala kepada orang tua santri. Yayasan senantiasa menjaga nilai kesantunan dan adab dalam setiap publikasi visual.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h5 className="font-semibold text-deep-forest text-xs sm:text-sm uppercase tracking-wider font-mono">
                      4. Kontak Layanan Data
                    </h5>
                    <p>
                      Jika Anda memiliki pertanyaan mengenai pembaruan atau penghapusan data formulir pendaftaran, hubungi Sekretariat Yayasan melalui WhatsApp resmi di <strong>081995770190</strong>.
                    </p>
                  </section>
                </div>
              )}

              {/* ===================================================
                  TAB 2: SYARAT & KETENTUAN
                  =================================================== */}
              {activeTab === 'terms' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-deep-forest/20 text-ink">
                    <h4 className="font-serif text-base font-bold text-deep-forest mb-1">
                      Pedoman &amp; Tata Tertib Yayasan Pendidikan Islam
                    </h4>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      Ketentuan ini mengatur proses admisi, tata tertib santri, dan komitmen bersama antara pihak yayasan dan wali santri guna menciptakan ekosistem belajar yang berkah dan beradab.
                    </p>
                  </div>

                  <section className="space-y-2">
                    <h5 className="font-semibold text-deep-forest text-xs sm:text-sm uppercase tracking-wider font-mono">
                      1. Ketentuan Jenjang Usia PPDB
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                      <div className="p-3 rounded-xl bg-paper-subtle border border-deep-forest/10">
                        <strong className="block text-warm-terracotta">TK Islam (4 - 6 Thn)</strong>
                        <span className="text-[11px] text-ink-muted">Siap mengikuti kegiatan motorik &amp; sentra tanpa paksaan akademis.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-paper-subtle border border-deep-forest/10">
                        <strong className="block text-deep-forest">SMP IT (12 - 15 Thn)</strong>
                        <span className="text-[11px] text-ink-muted">Lulus SD/MI sederajat, berkomitmen mengikuti halaqah tahfidz &amp; asrama.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-paper-subtle border border-deep-forest/10">
                        <strong className="block text-earthy-gold">SMK TJKT (15 - 18 Thn)</strong>
                        <span className="text-[11px] text-ink-muted">Lulus SMP/MTs, siap mematuhi etos kerja industri dan sertifikasi profesi.</span>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-2">
                    <h5 className="font-semibold text-deep-forest text-xs sm:text-sm uppercase tracking-wider font-mono">
                      2. Komitmen Adab &amp; Kedisiplinan
                    </h5>
                    <p>
                      Setiap santri dan peserta didik wajib menjunjung tinggi adab Islami, menghormati para guru dan asatidz, menjaga shalat fardhu berjamaah, serta memelihara ukhuwah antar sesama santri di lingkungan kampus.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h5 className="font-semibold text-deep-forest text-xs sm:text-sm uppercase tracking-wider font-mono">
                      3. Skema Beasiswa &amp; Keringanan Pembiayaan
                    </h5>
                    <p>
                      Yayasan Albakriatul Mudassirin menyediakan beasiswa prestasi tahfidz Al-Qur'an dan keringanan pembiayaan bagi dhuafa/yatim piatu. Calon penerima beasiswa wajib menyertakan surat rekomendasi dan mengikuti uji mutqin hafalan oleh dewan asatidz.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h5 className="font-semibold text-deep-forest text-xs sm:text-sm uppercase tracking-wider font-mono">
                      4. Pembatalan &amp; Pengembalian Dana
                    </h5>
                    <p>
                      Biaya formulir pendaftaran bersifat infaq operasional panitia PPDB dan tidak dapat ditarik kembali. Kebijakan dana sarana prasarana mengacu pada ketentuan surat perjanjian yang ditandatangani saat registrasi ulang.
                    </p>
                  </section>
                </div>
              )}

              {/* ===================================================
                  TAB 3: PETA SITUS
                  =================================================== */}
              {activeTab === 'sitemap' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-earthy-gold/25 text-ink">
                    <h4 className="font-serif text-base font-bold text-deep-forest mb-1">
                      Peta Situs &amp; Panduan Direktori
                    </h4>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      Navigasi lengkap struktur website resmi Yayasan Albakriatul Mudassirin untuk mempermudah wali santri dan calon siswa menemukan informasi penting.
                    </p>
                  </div>

                  {/* Sitemap Categories */}
                  <div className="space-y-4">
                    {/* 1. Halaman Utama */}
                    <div className="p-4 rounded-2xl bg-paper-subtle/70 border border-deep-forest/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase font-bold text-deep-forest">
                          1. Beranda &amp; Profil Utama
                        </span>
                        <span className="text-[10px] text-ink-muted font-mono">Landing Page</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <button
                          onClick={() => handleSitemapNav('#hero')}
                          className="p-2.5 rounded-xl bg-white text-left text-ink hover:text-deep-forest hover:shadow-sm border border-deep-forest/10 flex items-center justify-between transition-all cursor-pointer"
                        >
                          <span>Manifesto &amp; Filosofi Pendidikan</span>
                          <ChevronRight className="w-3.5 h-3.5 text-earthy-gold" />
                        </button>
                        <button
                          onClick={() => handleSitemapNav('#filosofi')}
                          className="p-2.5 rounded-xl bg-white text-left text-ink hover:text-deep-forest hover:shadow-sm border border-deep-forest/10 flex items-center justify-between transition-all cursor-pointer"
                        >
                          <span>Pondasi Nilai: Tarbiyah &amp; Ta'dib</span>
                          <ChevronRight className="w-3.5 h-3.5 text-earthy-gold" />
                        </button>
                      </div>
                    </div>

                    {/* 2. Jenjang Pendidikan */}
                    <div className="p-4 rounded-2xl bg-paper-subtle/70 border border-deep-forest/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase font-bold text-deep-forest">
                          2. Unit Jenjang Pendidikan (Growth Journey)
                        </span>
                        <span className="text-[10px] text-ink-muted font-mono">Kurikulum</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <button
                          onClick={() => handleSitemapNav('#growth-journey')}
                          className="p-2.5 rounded-xl bg-white text-left text-ink hover:text-warm-terracotta hover:shadow-sm border border-deep-forest/10 flex items-center justify-between transition-all cursor-pointer"
                        >
                          <div>
                            <strong className="block text-warm-terracotta">Unit TK Islam</strong>
                            <span className="text-[10px] text-ink-muted">Usia 4-6 Thn</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-warm-terracotta" />
                        </button>
                        <button
                          onClick={() => handleSitemapNav('#growth-journey')}
                          className="p-2.5 rounded-xl bg-white text-left text-ink hover:text-deep-forest hover:shadow-sm border border-deep-forest/10 flex items-center justify-between transition-all cursor-pointer"
                        >
                          <div>
                            <strong className="block text-deep-forest">SMP IT Terpadu</strong>
                            <span className="text-[10px] text-ink-muted">Tahfidz &amp; Asrama</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-deep-forest" />
                        </button>
                        <button
                          onClick={() => handleSitemapNav('#growth-journey')}
                          className="p-2.5 rounded-xl bg-white text-left text-ink hover:text-earthy-gold hover:shadow-sm border border-deep-forest/10 flex items-center justify-between transition-all cursor-pointer"
                        >
                          <div>
                            <strong className="block text-earthy-gold">SMK Vokasi TJKT</strong>
                            <span className="text-[10px] text-ink-muted">Lab Fiber Optic</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-earthy-gold" />
                        </button>
                      </div>
                    </div>

                    {/* 3. Kampus & Fasilitas */}
                    <div className="p-4 rounded-2xl bg-paper-subtle/70 border border-deep-forest/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase font-bold text-deep-forest">
                          3. Lokasi &amp; Fasilitas Kampus
                        </span>
                        <span className="text-[10px] text-ink-muted font-mono">Geografis Bogor</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <button
                          onClick={() => handleSitemapNav('#campus-vibe')}
                          className="p-2.5 rounded-xl bg-white text-left text-ink hover:text-deep-forest hover:shadow-sm border border-deep-forest/10 flex items-center justify-between transition-all cursor-pointer"
                        >
                          <span>Kompleks Kampus Ciaruteun Ilir, Cibungbulang</span>
                          <ChevronRight className="w-3.5 h-3.5 text-earthy-gold" />
                        </button>
                        <a
                          href="https://maps.google.com/?q=-6.528972,106.689750"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-white text-left text-ink hover:text-deep-forest hover:shadow-sm border border-deep-forest/10 flex items-center justify-between transition-all"
                        >
                          <span>Peta Google Maps &amp; Titik Koordinat GPS</span>
                          <ChevronRight className="w-3.5 h-3.5 text-earthy-gold" />
                        </a>
                      </div>
                    </div>

                    {/* 4. Layanan Admisi & Kontak */}
                    <div className="p-4 rounded-2xl bg-paper-subtle/70 border border-deep-forest/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase font-bold text-deep-forest">
                          4. Layanan Pendaftaran &amp; Konsultasi
                        </span>
                        <span className="text-[10px] text-ink-muted font-mono">Admisi PPDB</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <button
                          onClick={() => {
                            onClose();
                            setTimeout(onOpenPPDB, 150);
                          }}
                          className="p-2.5 rounded-xl bg-deep-forest text-paper text-left hover:bg-forest-light flex items-center justify-between transition-all cursor-pointer font-medium"
                        >
                          <span>Buka Formulir PPDB Online 2025/2026</span>
                          <ChevronRight className="w-3.5 h-3.5 text-earthy-gold" />
                        </button>
                        <a
                          href="https://wa.me/6281995770190"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-white text-left text-ink hover:text-deep-forest border border-deep-forest/10 flex items-center justify-between transition-all"
                        >
                          <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-emerald-600" />
                            WhatsApp Admisi: 081995770190
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-earthy-gold" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-deep-forest/10 bg-paper-subtle/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
              <span className="text-ink-muted text-[11px] font-mono">
                Pembaruan Terakhir: Oktober 2025 • Sekretariat Yayasan
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full border border-deep-forest/20 text-deep-forest hover:bg-paper-warm transition-all font-medium cursor-pointer"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(onOpenPPDB, 150);
                  }}
                  className="px-5 py-2 rounded-full bg-deep-forest text-paper hover:bg-forest-light transition-all font-semibold cursor-pointer"
                >
                  Daftar PPDB Sekarang →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
