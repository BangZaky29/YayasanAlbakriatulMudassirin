import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import GrowthJourneySection from './components/sections/GrowthJourneySection';
import CampusVibeSection from './components/sections/CampusVibeSection';
import ManifestoSection from './components/sections/ManifestoSection';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/layout/FloatingCTA';
import PPDBDrawer from './components/modals/PPDBDrawer';
import LegalModal, { type LegalTab } from './components/modals/LegalModal';
import LoadingScreen from './components/ui/LoadingScreen';

export default function App() {
  const [ppdbOpen, setPpdbOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');

  const handleOpenPPDB = () => setPpdbOpen(true);
  const handleClosePPDB = () => setPpdbOpen(false);

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setLegalOpen(true);
  };
  const handleCloseLegal = () => setLegalOpen(false);

  return (
    <div className="relative min-h-screen font-sans selection:bg-deep-forest selection:text-paper overflow-x-clip bg-paper text-ink">
      {/* Initial Loading Screen with Brand Logo & Smooth Entrance Animation */}
      <LoadingScreen minDuration={2000} />

      {/* Ambient subtle paper grain */}
      <div className="pointer-events-none fixed inset-0 paper-texture z-0" />

      {/* Sticky Minimal Editorial Nav */}
      <Navbar onOpenPPDB={handleOpenPPDB} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenPPDB={handleOpenPPDB} />
        <GrowthJourneySection onOpenPPDB={handleOpenPPDB} />
        <CampusVibeSection />
        <ManifestoSection />
      </main>

      {/* Footer */}
      <Footer onOpenPPDB={handleOpenPPDB} onOpenLegal={handleOpenLegal} />

      {/* Floating PPDB Trigger Button */}
      <FloatingCTA onOpenPPDB={handleOpenPPDB} />

      {/* PPDB Drawer Slide-Out Modal */}
      <PPDBDrawer isOpen={ppdbOpen} onClose={handleClosePPDB} />

      {/* Legal & Sitemap Modal */}
      <LegalModal
        isOpen={legalOpen}
        activeTab={legalTab}
        onTabChange={setLegalTab}
        onClose={handleCloseLegal}
        onOpenPPDB={handleOpenPPDB}
      />
    </div>
  );
}
