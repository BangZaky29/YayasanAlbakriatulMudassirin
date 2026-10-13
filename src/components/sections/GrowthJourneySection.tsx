import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { JENJANG_CARDS } from '../../constants/data';
import { useCardDeck } from '../../hooks/useCardDeck';
import type { JenjangCard } from '../../types';

interface GrowthJourneySectionProps {
  onOpenPPDB: () => void;
}

// ============================
// Color maps for card variants
// ============================
const colorMap = {
  terracotta: {
    tagBg: 'bg-warm-terracotta',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-warm-terracotta',
    badgeBorder: 'border-warm-terracotta/20',
    dotBg: 'bg-warm-terracotta',
    dotActive: 'bg-warm-terracotta',
    dotInactive: 'bg-warm-terracotta/40',
    tabBorder: 'border-warm-terracotta',
    titleText: 'text-warm-terracotta',
    featureBg: 'bg-amber-50/70',
    featureBorder: 'border-warm-terracotta/15',
    ctaBg: 'bg-warm-terracotta',
    gradient: 'from-warm-terracotta/50',
    cardBg: 'bg-[#fdfcf9]',
    headerBorder: 'border-warm-terracotta/15',
  },
  forest: {
    tagBg: 'bg-deep-forest',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-deep-forest',
    badgeBorder: 'border-deep-forest/20',
    dotBg: 'bg-deep-forest',
    dotActive: 'bg-deep-forest',
    dotInactive: 'bg-deep-forest/40',
    tabBorder: 'border-deep-forest',
    titleText: 'text-deep-forest',
    featureBg: 'bg-paper-subtle/80',
    featureBorder: 'border-deep-forest',
    ctaBg: 'bg-deep-forest',
    gradient: 'from-deep-forest/50',
    cardBg: 'bg-[#faf8f3]',
    headerBorder: 'border-deep-forest/15',
  },
  gold: {
    tagBg: 'bg-earthy-gold',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-earthy-gold',
    badgeBorder: 'border-earthy-gold/30',
    dotBg: 'bg-earthy-gold',
    dotActive: 'bg-earthy-gold',
    dotInactive: 'bg-earthy-gold/40',
    tabBorder: 'border-earthy-gold',
    titleText: 'text-earthy-gold',
    featureBg: 'bg-slate-900',
    featureBorder: 'border-slate-800',
    ctaBg: 'bg-earthy-gold',
    gradient: 'from-slate-900/60',
    cardBg: 'bg-[#fdfbf7]',
    headerBorder: 'border-earthy-gold/20',
  },
};

// ============================
// Feature renderers per color
// ============================
function TKFeature({ feature }: { feature: JenjangCard['features'][0] }) {
  return (
    <div className="p-2.5 sm:p-3 rounded-2xl bg-amber-50/70 border border-warm-terracotta/15 flex items-start gap-2.5">
      {feature.icon && <span className="text-base sm:text-lg shrink-0">{feature.icon}</span>}
      <div>
        <h4 className="text-xs font-semibold text-ink">{feature.title}</h4>
        <p className="text-[11px] text-ink-muted mt-0.5 leading-tight">{feature.description}</p>
      </div>
    </div>
  );
}

function SMPFeature({ feature }: { feature: JenjangCard['features'][0] }) {
  return (
    <div className="p-2.5 sm:p-3 rounded-xl bg-paper-subtle/80 border-l-4 border-deep-forest flex items-center justify-between gap-2">
      <div>
        <h4 className="text-xs font-semibold text-deep-forest">{feature.title}</h4>
        <p className="text-[11px] text-ink-muted mt-0.5 leading-tight">{feature.description}</p>
      </div>
      {feature.badge && (
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-deep-forest bg-white px-2 py-0.5 sm:py-1 rounded border border-deep-forest/10 shrink-0">
          {feature.badge}
        </span>
      )}
    </div>
  );
}

function SMKFeature({ feature }: { feature: JenjangCard['features'][0] }) {
  return (
    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 text-white font-mono text-xs border border-slate-800 space-y-0.5">
      <div className="flex items-center justify-between text-earthy-gold text-[10px]">
        <span>{feature.title.toUpperCase().split('(')[0].trim()}</span>
        <span>{feature.badge}</span>
      </div>
      <p className="font-bold text-xs tracking-wide leading-tight">{feature.title}</p>
      <p className="text-[10px] text-slate-400 leading-tight">{feature.description}</p>
    </div>
  );
}

function renderFeatures(card: JenjangCard) {
  if (card.color === 'terracotta') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
        {card.features.map((f) => (
          <TKFeature key={f.title} feature={f} />
        ))}
      </div>
    );
  }
  if (card.color === 'forest') {
    return (
      <div className="space-y-2 pt-1">
        {card.features.map((f) => (
          <SMPFeature key={f.title} feature={f} />
        ))}
      </div>
    );
  }
  // gold = SMK
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
      {card.features.map((f) => (
        <SMKFeature key={f.title} feature={f} />
      ))}
    </div>
  );
}

// ============================
// Single Card Component
// ============================
function DeckCard({
  card,
  position,
  colors,
  onClick,
  onOpenPPDB,
}: {
  card: JenjangCard;
  position: 'front' | 'middle' | 'back';
  colors: (typeof colorMap)['terracotta'];
  onClick: () => void;
  onOpenPPDB: () => void;
}) {
  const posClass = position === 'front' ? 'pos-front' : position === 'middle' ? 'pos-middle' : 'pos-back';

  return (
    <article
      className={`deck-card ${posClass} absolute inset-0 ${colors.cardBg} rounded-3xl p-5 sm:p-7 lg:p-8 border border-stone-300/80 shadow-2xl flex flex-col justify-between overflow-y-auto md:overflow-hidden select-none`}
      onClick={onClick}
    >
      {/* Header */}
      <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between ${colors.headerBorder} border-b pb-3 mb-3 gap-2 shrink-0`}>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className={`px-2.5 py-1 rounded-md ${colors.tagBg} text-white font-mono text-[10px] font-bold tracking-wider`}>
            {card.tag}
          </span>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.badgeBg} ${colors.badgeText} ${colors.badgeBorder} border text-xs font-medium`}>
            <span className={`w-2 h-2 rounded-full ${colors.dotBg}`} />
            <span>{card.label}</span>
          </div>
        </div>
        <span className="font-serif italic text-xs sm:text-sm text-ink-muted">
          {card.subtitle}
        </span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center flex-1 my-1">
        <div className="md:col-span-7 space-y-3 sm:space-y-3.5">
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-ink font-normal leading-snug">
            {card.title}
            <span className={`italic font-serif ${colors.titleText} font-semibold`}>
              {card.titleHighlight}
            </span>
            {card.titleSuffix}
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-3 md:line-clamp-none">
            {card.description}
          </p>

          {/* Features */}
          {renderFeatures(card)}

          {/* Prominent Visible CTA Button */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenPPDB();
              }}
              className={`px-6 py-2.5 sm:py-3 rounded-full ${colors.ctaBg} text-white text-xs sm:text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer z-20 flex items-center gap-2`}
            >
              <span>{card.ctaLabel}</span>
              <span aria-hidden="true">→</span>
            </button>
            <span className="text-xs text-ink-muted font-medium">{card.ctaNote}</span>
          </div>
        </div>

        {/* Image Column */}
        <div className="md:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[16/9] sm:aspect-square md:aspect-[4/5] max-h-56 sm:max-h-64 md:max-h-none border-2 border-white">
            <img
              alt={card.imageAlt}
              className="w-full h-full object-cover"
              src={card.imageUrl}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} via-transparent to-transparent`} />
            <div className={`absolute bottom-3 left-3 right-3 p-3 rounded-xl text-xs shadow-sm ${
              card.color === 'gold'
                ? 'bg-slate-900/90 backdrop-blur-sm text-white font-mono'
                : 'bg-white/95 backdrop-blur-sm text-ink'
            }`}>
              <p className={`font-semibold ${card.color === 'gold' ? 'text-earthy-gold' : colors.titleText}`}>
                {card.imageCaption}
              </p>
              <p className={`text-[11px] mt-0.5 ${card.color === 'gold' ? 'text-slate-300' : 'text-ink-muted'}`}>
                {card.imageCaptionSub}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-deep-forest/5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-ink-muted font-mono gap-1 shrink-0">
        <span>{card.footerLabel}</span>
        <span className={`${colors.titleText} font-semibold`}>
          Klik kartu belakang untuk membalik →
        </span>
      </div>
    </article>
  );
}

// ============================
// Main Section Component
// ============================
export default function GrowthJourneySection({ onOpenPPDB }: GrowthJourneySectionProps) {
  const { activeIndex, getPosition, setActive, cycleNext, cyclePrev, counterLabel } = useCardDeck(0);

  return (
    <section
      className="relative py-20 lg:py-28 border-t border-deep-forest/10 bg-paper-warm/40 overflow-hidden"
      id="growth-journey"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Controls */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-deep-forest/10">
                <span className="w-1.5 h-1.5 rounded-full bg-earthy-gold animate-ping" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-deep-forest font-semibold">
                  Interactive Card Deck
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-ink font-normal leading-tight">
                Pilih <br className="hidden sm:inline" />
                <span className="italic font-serif text-deep-forest font-semibold">Jenjang</span>
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed pr-2">
                Setiap tahap tumbuh kembang memiliki ritme dan kebutuhan jiwa tersendiri. Telusuri
                tumpukan kurikulum di samping dengan memilih jenjang atau membalik lembaran kertas.
              </p>
            </motion.div>

            {/* Tab Selectors */}
            <div className="flex flex-col gap-2.5 pt-2 font-sans text-xs">
              {JENJANG_CARDS.map((card, i) => {
                const isActive = activeIndex === i;
                const colors = colorMap[card.color];

                return (
                  <button
                    key={card.id}
                    onClick={() => setActive(i)}
                    className={`group text-left px-4 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? `bg-paper border-2 ${colors.tabBorder} shadow-sm`
                        : 'bg-paper/60 border border-deep-forest/15 hover:bg-paper hover:border-deep-forest/30'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          isActive ? colors.dotActive : colors.dotInactive
                        }`}
                      />
                      <span
                        className={`${
                          isActive ? `font-bold ${colors.titleText}` : 'font-medium text-ink group-hover:text-deep-forest'
                        }`}
                      >
                        {card.tabTitle}
                      </span>
                      <span className="text-ink-muted text-[11px]">
                        — {card.tabSubtitle}
                      </span>
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${colors.badgeBg} ${colors.badgeText} ${colors.badgeBorder} border font-semibold`}
                    >
                      {card.ageRange}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-deep-forest/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                  Tumpukan:
                </span>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-deep-forest text-paper">
                  {counterLabel}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={cyclePrev}
                  className="p-2.5 rounded-xl bg-paper border border-deep-forest/20 text-deep-forest hover:bg-deep-forest hover:text-paper transition-all shadow-sm active:scale-95 cursor-pointer"
                  title="Lembar Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={cycleNext}
                  className="p-2.5 rounded-xl bg-paper border border-deep-forest/20 text-deep-forest hover:bg-deep-forest hover:text-paper transition-all shadow-sm active:scale-95 flex items-center gap-1.5 pr-3 text-xs font-semibold cursor-pointer"
                  title="Geser ke Lembar Berikutnya"
                >
                  <span>Lembar Berikutnya</span>
                  <ChevronRight className="w-4 h-4 text-earthy-gold" />
                </button>
              </div>
            </div>

            {/* Admission Note */}
            <div className="p-4 rounded-2xl bg-paper border border-deep-forest/10 space-y-2">
              <div className="flex items-center gap-2 text-deep-forest text-xs font-semibold">
                <Info className="w-4 h-4 text-earthy-gold" />
                <span>Penerimaan Gelombang I</span>
              </div>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                Tersedia beasiswa tahfidz dan skema kemudahan pembiayaan untuk putra-putri berprestasi serta dhuafa.
              </p>
              <button
                onClick={onOpenPPDB}
                className="text-xs font-semibold text-deep-forest hover:text-forest-light underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                Buka Formulir Pendaftaran →
              </button>
            </div>
          </div>

          {/* Right: Card Deck */}
          <div className="lg:col-span-8 relative py-4 sm:py-6">
            {/* Atmospheric Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/20 via-emerald-100/20 to-amber-100/20 blur-3xl rounded-3xl pointer-events-none" />

            {/* Deck Container with Generous Min-Height for Card Button Visibility */}
            <div className="relative w-full min-h-[720px] sm:min-h-[660px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[590px]">
              {JENJANG_CARDS.map((card) => (
                <DeckCard
                  key={card.id}
                  card={card}
                  position={getPosition(card.id)}
                  colors={colorMap[card.color]}
                  onClick={() => {
                    const pos = getPosition(card.id);
                    if (pos === 'front') cycleNext();
                    else setActive(card.id);
                  }}
                  onOpenPPDB={onOpenPPDB}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
