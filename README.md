# Yayasan Albakriatul Mudassirin — Official Web & PPDB Portal

> Portal resmi dan landing page editorial **Yayasan Pendidikan Islam Albakriatul Mudassirin** (TK Islam Terpadu, SMP IT Tahfidz & Sains, SMK Vokasi TJKT) berkedudukan di Ciaruteun Ilir, Cibungbulang, Kabupaten Bogor, Jawa Barat.

![Yayasan Albakriatul Mudassirin Banner](/public/images/campus.jpg)

---

## 🌟 Ikhtisar Proyek (Project Overview)

Aplikasi web ini dirancang dengan gaya **Editorial Pasundan Modern** yang memadukan keanggunan nilai tradisi Islam dengan teknologi modern. Menghadirkan ekosistem tumbuh kembang anak yang utuh dari usia dini hingga kesiapan vokasi era digital, didukung fitur interaktif pendaftaran santri baru (PPDB Online) yang langsung terhubung ke panitia via WhatsApp resmi.

### 🌿 Filosofi Inti
- **Tarbiyah**: Pembinaan fitrah, akhlak, dan kecintaan pada ilmu sejak usia dini.
- **Ta'dib**: Penanaman adab, kedisiplinan ibadah, dan hafalan Al-Qur'an (Tahfidz).
- **Maharah**: Penguasaan keahlian vokasi terapan (Teknik Jaringan Komputer & Telekomunikasi) untuk menyongsong era transformasi digital.

---

## 🚀 Fitur Unggulan (Key Features)

1. **Brand Identity & Emblem Resmi**
   - Menggunakan logo resmi yayasan bernuansa *Deep Forest* dan *Earthy Gold* dengan ornamen bintang 8-sudut Islami, monogram "AM", kitab suci, dan untaian daun zaitun.
   - Terintegrasi di seluruh elemen: Favicon browser, Navbar, Footer, dan Loading Screen.

2. **Smooth Animated Loading Screen**
   - Transisi pembuka saat pertama kali mengunjungi website.
   - Menampilkan logo emblem, nama yayasan, *pulsing aura ring*, bilah progres emas, dan motto filosofi sebelum bertransisi mulus ke halaman utama.

3. **100% Fully Responsive Layout**
   - Tampilan adaptif sempurna untuk semua resolusi: Mobile (360px+), Tablet, hingga Desktop Layar Lebar (4K).
   - Menu drawer mobile yang intuitif dengan indikator aktif dinamis.

4. **Smooth Scroller Engine 60fps**
   - Navigasi halus lintas seksi menggunakan kalkulasi *requestAnimationFrame* dengan kurva akselerasi `easeInOutCubic` dan penyesuaian *offset sticky header* 76px.

5. **Slide-Out PPDB Online Drawer**
   - Modal formulir pendaftaran santri baru (TK, SMP IT, SMK).
   - Validasi formulir lengkap dengan pengiriman otomatis ke WhatsApp Panitia PPDB (**`081995770190`**) dalam format pesan terstruktur dan sopan.

6. **Interactive Legal & Sitemap Modal**
   - Dialog modal informatif dengan sistem tabulasi:
     - 📜 **Kebijakan Privasi**: Keamanan data pendaftar & wali santri.
     - ⚖️ **Syarat & Ketentuan**: Peraturan akademik, kedisiplinan, dan administrasi.
     - 🗺️ **Peta Situs**: Hierarki struktur navigasi dan tautan cepat ke seluruh jenjang.

7. **SEO Suite Sesuai Standar Google Search Central**
   - **JSON-LD Schema.org**: `@graph` terpadu berisi skema `EducationalOrganization`, `School`, `WebSite`, `BreadcrumbList`, dan `FAQPage` untuk Google Rich Snippets.
   - **Local SEO**: Koordinat geospasial presisi (`geo.position`, `ICBM`) wilayah Bogor (`ID-JB`).
   - **Social Sharing**: Open Graph & Twitter Cards lengkap dengan gambar sampul kampus resolusi 1200x630.
   - **Technical SEO**: Terintegrasi dengan `robots.txt`, `sitemap.xml` (lengkap dengan tag `image:image`), dan `site.webmanifest` (PWA).

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Motion & Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Ikonografi**: [Lucide React](https://lucide.dev/)
- **Tipografi**:
  - Headings & Editorial: *Newsreader* (Serif Klasik) & *Cinzel*
  - Body & UI Text: *Plus Jakarta Sans*
  - Data & Labels: *JetBrains Mono* / *Font-Mono*

---

## 📂 Struktur Direktori (Project Structure)

```text
yayasan/fe/
├── public/
│   ├── images/
│   │   ├── campus.jpg          # Foto latar gedung kampus (tajam & resolusi tinggi)
│   │   ├── logo_icon.png       # Logo resmi PNG resolusi tinggi
│   │   ├── tk.jpg              # Dokumentasi jenjang TK Islam Terpadu
│   │   ├── smp-it.jpg          # Dokumentasi jenjang SMP IT Tahfidz & Sains
│   │   └── smk.jpg             # Dokumentasi jenjang SMK Vokasi Jaringan TJKT
│   ├── favicon.png             # Ikon favicon tab browser
│   ├── robots.txt              # Konfigurasi perayapan Googlebot / Bingbot
│   ├── sitemap.xml             # XML sitemap lengkap dengan metadata gambar
│   └── site.webmanifest        # Manifest aplikasi mobile PWA
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Header navigasi sticky & mobile menu
│   │   │   ├── Footer.tsx      # Footer informatif dengan safe clearance
│   │   │   └── FloatingCTA.tsx # Tombol pendaftaran mengambang (Quick Action)
│   │   ├── modals/
│   │   │   ├── PPDBDrawer.tsx  # Form pendaftaran online terhubung WhatsApp
│   │   │   └── LegalModal.tsx  # Modal Privasi, Syarat Ketentuan & Peta Situs
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx           # Banner utama editorial
│   │   │   ├── GrowthJourneySection.tsx  # Card deck interaktif jenjang TK, SMP IT, SMK
│   │   │   ├── CampusVibeSection.tsx     # Fasilitas, galeri, & lingkungan kampus
│   │   │   └── ManifestoSection.tsx      # Nilai dasar & visi pendidikan
│   │   └── ui/
│   │       ├── Logo.tsx                  # Komponen logo yayasan reusable
│   │       └── LoadingScreen.tsx         # Layar transisi pembuka dengan animasi smooth
│   ├── constants/
│   │   └── data.ts             # Data kurikulum, statistik, kontak, & link navigasi
│   ├── utils/
│   │   └── smoothScroll.ts     # Engine smooth scroll 60fps berbasis RAF
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # React entry point
│   └── index.css               # Desain token, animasi kustom, & Tailwind directives
├── index.html                  # HTML head dengan SEO, OpenGraph & JSON-LD Schema
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 💻 Panduan Instalasi & Menjalankan (Getting Started)

### 1. Prasyarat
- [Node.js](https://nodejs.org/) (versi 18.x atau lebih tinggi)
- npm / yarn / pnpm

### 2. Instalasi Dependensi
Buka terminal dan arahkan ke direktori proyek:
```bash
cd c:\codingVibes\landingPages\PersonalPortfolio\oktober_2026\yayasan\fe
npm install
```

### 3. Menjalankan di Lingkungan Pengembangan (Development Server)
```bash
npm run dev
```
Aplikasi akan aktif di `http://localhost:5173/`.

### 4. Build untuk Produksi (Production Build)
```bash
npm run build
```
Hasil kompilasi siap publikasi akan tersimpan di folder `dist/`.

### 5. Pratinjau Hasil Build (Preview Build)
```bash
npm run preview
```

---

## 📞 Informasi Kontak & Kampus

- **Nama Lembaga**: Yayasan Pendidikan Islam Albakriatul Mudassirin
- **Alamat Kampus**: FMCQ+9W7, Jl. Raya Ciaruteun Ilir, Kec. Cibungbulang, Kabupaten Bogor, Jawa Barat 16630
- **Layanan PPDB / WhatsApp**: [081995770190](https://wa.me/6281995770190)
- **Jam Operasional**: Senin – Sabtu (07:30 – 16:00 WIB)
- **Website**: [albakriatulmudassirin.bangzaky0029.workers.dev](https://albakriatulmudassirin.bangzaky0029.workers.dev/)

---

## 📄 Lisensi & Hak Cipta

© 2025 **Yayasan Albakriatul Mudassirin**. Seluruh hak cipta dilindungi undang-undang.
