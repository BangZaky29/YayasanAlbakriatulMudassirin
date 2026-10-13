import { FOOTER_QUICK_LINKS, CONTACT_INFO } from '../../constants/data';
import type { LegalTab } from '../modals/LegalModal';
import { smoothScrollTo } from '../../utils/smoothScroll';
import Logo from '../ui/Logo';

interface FooterProps {
  onOpenPPDB: () => void;
  onOpenLegal: (tab: LegalTab) => void;
}

export default function Footer({ onOpenPPDB, onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-forest-dark text-paper/80 pt-16 pb-32 sm:pb-28 lg:pb-24 border-t border-white/10 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3.5">
            <Logo className="w-12 h-12 drop-shadow-md shrink-0" size={96} />
            <div>
              <span className="block font-serif text-base font-semibold text-white">
                Yayasan Albakriatul Mudassirin
              </span>
              <span className="block text-[10px] tracking-wider text-earthy-gold uppercase font-medium">
                TK • SMP IT • SMK Vokasi
              </span>
            </div>
          </div>
          <p className="text-paper/70 leading-relaxed max-w-sm">
            Lembaga pendidikan Islam terpadu yang mendidik generasi rabbani berjiwa mandiri,
            berkarakter mulia, dan siap memimpin peradaban teknologi.
          </p>
          <p className="font-mono text-[11px] text-paper/50">
            SMP IT ALBAKRIATUL MUDASSIRIN • FMCQ+9W7, Ciaruteun Ilir, Kec. Cibungbulang,
            Kabupaten Bogor, Jawa Barat 16630
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h5 className="text-xs font-mono uppercase tracking-wider text-earthy-gold">
            Akses Cepat
          </h5>
          <ul className="space-y-2 text-paper/70">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.href, 76, 750);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4 space-y-3">
          <h5 className="text-xs font-mono uppercase tracking-wider text-earthy-gold">
            Layanan &amp; Konsultasi
          </h5>
          <p className="text-paper/70">
            Pusat informasi pendaftaran santri baru (PPDB), beasiswa, dan kunjungan kampus:
          </p>
          <div className="space-y-1.5 font-mono text-[11px]">
            <p>
              WhatsApp:{' '}
              <a
                href="https://wa.me/6281995770190"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-earthy-gold underline underline-offset-2 transition-colors cursor-pointer"
              >
                081995770190
              </a>
            </p>
            <p className="text-white">Email: {CONTACT_INFO.email}</p>
            <p className="text-paper/50">{CONTACT_INFO.hours}</p>
          </div>
          <button
            onClick={onOpenPPDB}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-earthy-gold text-white font-sans text-xs font-semibold hover:bg-opacity-90 transition-all cursor-pointer"
          >
            Buka Pendaftaran Online →
          </button>
        </div>
      </div>

      {/* Bottom Bar with Safe Clearance for Floating CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-paper/50 text-[11px] md:pr-48">
        <p>© 2025 Yayasan Albakriatul Mudassirin. Seluruh hak cipta dilindungi.</p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <button
            type="button"
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            Kebijakan Privasi
          </button>
          <button
            type="button"
            onClick={() => onOpenLegal('terms')}
            className="hover:text-white transition-colors cursor-pointer text-left"
          >
            Syarat Ketentuan
          </button>
          <button
            type="button"
            onClick={() => onOpenLegal('sitemap')}
            className="hover:text-white transition-colors font-medium text-paper/70 cursor-pointer text-left"
          >
            Peta Situs
          </button>
        </div>
      </div>
    </footer>
  );
}
