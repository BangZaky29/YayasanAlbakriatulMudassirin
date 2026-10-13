import type { NavLink, JenjangCard, StatItem, FooterLink, ContactInfo } from '../types';

// ============================
// NAVIGATION
// ============================
export const NAV_LINKS: NavLink[] = [
  { label: 'Manifesto', href: '#hero' },
  { label: 'Pilih Jenjang', href: '#growth-journey', isActive: true },
  { label: 'Kampus Bogor', href: '#campus-vibe' },
  { label: 'Pondasi Nilai', href: '#filosofi' },
];

// ============================
// HERO STATS
// ============================
export const STATS: StatItem[] = [
  { value: '03', label: 'Jenjang Berkesinambungan', color: 'forest' },
  { value: '30 Juz', label: 'Sanad Tahfidz Terpadu', color: 'gold' },
  { value: '100%', label: 'Sertifikasi Industri SMK', color: 'forest' },
];

// ============================
// IMAGE URLS (LOCAL ASSETS)
// ============================
export const IMAGES = {
  tk: '/images/tk.jpg',
  smpIt: '/images/smp-it.jpg',
  smk: '/images/smk.jpg',
  campus: '/images/campus.jpg',
};

// ============================
// JENJANG CARDS (CARD DECK)
// ============================
export const JENJANG_CARDS: JenjangCard[] = [
  {
    id: 0,
    tag: '01 • TK',
    tabTitle: '01. TK',
    tabSubtitle: 'Fitrah & Motorik',
    label: 'Taman Kanak-Kanak • 4 - 6 Tahun',
    ageRange: 'Usia 4-6',
    subtitle: 'Pondasi Fitrah Karakter',
    title: 'Bermain adalah ',
    titleHighlight: 'Ibadah Pertama',
    titleSuffix: ' yang Menggembirakan.',
    description: 'Membentuk adab kecintaan kepada Allah SWT dan sesama melalui pendekatan sentra eksploratif. Anak belajar mengenali huruf hijaiyah, doa harian, serta melatih sensomotorik dalam atmosfer yang aman tanpa paksaan.',
    features: [
      { icon: '🎨', title: 'Sentra Kreativitas', description: 'Eksplorasi sensorik alam dan warna' },
      { icon: '📖', title: 'Hijaiyah Ceria', description: 'Surat pendek juz 30 & doa harian' },
      { icon: '🌱', title: 'Adab Makan & Bicara', description: 'Pembiasaan sunnah adab harian' },
      { icon: '🌳', title: 'Taman Ramah Anak', description: 'Playground berstandar busa aman' },
    ],
    ctaLabel: 'Daftar Unit TK',
    ctaNote: 'Rasio guru 1:8 anak',
    imageUrl: IMAGES.tk,
    imageAlt: 'Dokumentasi Murid TK Albakriatul Mudassirin',
    imageCaption: 'Lingkungan Tanpa Tekanan',
    imageCaptionSub: 'Santun bertutur, percaya diri berkreasi.',
    footerLabel: 'Lembar 01 / 03 • Tahap Fondasi Awal',
    color: 'terracotta',
  },
  {
    id: 1,
    tag: '02 • SMP IT',
    tabTitle: '02. SMP IT',
    tabSubtitle: 'Adab & Tahfidz',
    label: 'SMP IT Terpadu • 12 - 15 Tahun',
    ageRange: 'Usia 12-15',
    subtitle: 'Integrasi Kitab & Kurikulum Nasional',
    title: 'Menempa ',
    titleHighlight: 'Intelektual Muslim',
    titleSuffix: ' yang Teguh Berprinsip.',
    description: 'Masa pubertas adalah fase genting pembentukan jati diri. SMP IT Albakriatul Mudassirin mengawal santri dengan bimbingan tahfidz intensif, pembiasaan shalat berjamaah di masjid raya, dan riset sains remaja bernalar kritis.',
    features: [
      { title: 'Target Tahfidz 5 - 15 Juz Mandiri', description: 'Metode mutqin dengan asatidz bersanad', badge: '30 Juz Pilihan' },
      { title: 'Bilingual Environment (Arab & Inggris)', description: 'Muhadhoroh mingguan & muhadatsah', badge: 'Aktif' },
      { title: 'Laboratorium Sains & Olimpiade', description: 'Pembinaan intensif KSM & OSN', badge: 'Akreditasi A' },
    ],
    ctaLabel: 'Daftar Unit SMP IT',
    ctaNote: 'Boarding (Asrama) & Full Day',
    imageUrl: IMAGES.smpIt,
    imageAlt: 'Santri SMP IT Albakriatul Mudassirin Membaca Quran',
    imageCaption: 'Keteladanan & Halaqah Subuh',
    imageCaptionSub: 'Menumbuhkan empati, akhlak, dan kemandirian.',
    footerLabel: 'Lembar 02 / 03 • Tahap Penempaan Karakter',
    color: 'forest',
  },
  {
    id: 2,
    tag: '03 • SMK',
    tabTitle: '03. SMK',
    tabSubtitle: 'Vokasi & Industri',
    label: 'SMK Vokasi Industri • 15 - 18 Tahun',
    ageRange: 'Usia 15-18',
    subtitle: 'Bursa Kerja Khusus (BKK) Aktif',
    title: 'Keahlian Nyata, ',
    titleHighlight: 'Tersertifikasi Nasional',
    titleSuffix: ' & Siap Kerja.',
    description: 'Dirancang dengan kurikulum berbasis industri terkini. Santri SMK dididik untuk menjadi talenta teknologi yang memiliki etos kerja disiplin, menguasai rekayasa sistem, dan langsung terserap dalam ekosistem dunia kerja.',
    features: [
      { title: 'Teknik Jaringan (TJKT)', description: 'Fiber optic & Cloud Server', badge: '01' },
      { title: 'Sertifikasi BNSP', description: 'Uji profesi terverifikasi', badge: '02' },
      { title: 'Simulasi Project Riil', description: 'Infrastruktur korporasi', badge: '03' },
      { title: 'MoU Bursa Kerja', description: 'Penyerapan Jabodetabek', badge: '04' },
    ],
    ctaLabel: 'Daftar Jurusan SMK',
    ctaNote: 'Fasilitas 40+ unit PC lab terkini',
    imageUrl: IMAGES.smk,
    imageAlt: 'Laboratorium Komputer SMK Albakriatul Mudassirin',
    imageCaption: 'High Performance Lab',
    imageCaptionSub: 'Dedicated optic network & coding workstation',
    footerLabel: 'Lembar 03 / 03 • Tahap Kesiapan Profesi',
    color: 'gold',
  },
];

// ============================
// HERO IMAGES (COLLAGE)
// ============================
export const HERO_COLLAGE = [
  {
    src: IMAGES.tk,
    alt: 'TK Albakriatul Mudassirin - Usia Dini Belajar Sambil Bermain',
    tag: 'Tahap 01 • Usia 4-6 Thn',
    caption: 'Fitrah, Adab & Motorik',
    tagColor: 'bg-warm-terracotta',
  },
  {
    src: IMAGES.smpIt,
    alt: 'SMP IT Albakriatul Mudassirin - Tahfidz dan Adab Remaja',
    tag: 'Tahap 02 • Usia 12-15 Thn',
    caption: "Tahfidz Qur'an & Sains Terpadu",
    tagColor: 'bg-deep-forest',
  },
  {
    src: IMAGES.smk,
    alt: 'SMK Albakriatul Mudassirin - Praktik Laboratorium Komputer dan Jaringan',
    tag: 'Tahap 03 • Usia 15-18 Thn',
    caption: 'Vokasi Teknologi Siap Kerja',
    tagColor: 'bg-earthy-gold',
    extra: 'TJKT • BKK',
  },
];

// ============================
// FOOTER
// ============================
export const FOOTER_QUICK_LINKS: FooterLink[] = [
  { label: 'Manifesto Tumbuh', href: '#hero' },
  { label: 'Program TK Albakriatul Mudassirin', href: '#growth-journey' },
  { label: 'Program SMP IT & Tahfidz', href: '#growth-journey' },
  { label: 'Program SMK Vokasi (TJKT)', href: '#growth-journey' },
  { label: 'Lokasi & Navigasi Kampus', href: '#campus-vibe' },
];

export const CONTACT_INFO: ContactInfo = {
  whatsapp: '081995770190',
  email: 'admisi@albakriatulmudassirin.sch.id',
  hours: 'Senin - Sabtu: 07.30 - 16.00 WIB',
};
