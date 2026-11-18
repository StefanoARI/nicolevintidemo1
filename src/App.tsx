import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EssenzaSection } from './components/EssenzaSection';
import { VideoReelSection } from './components/VideoReelSection';
import { FilosofiaSection } from './components/FilosofiaSection';
import { PalmaresSection } from './components/PalmaresSection';
import { TrattamentiSection } from './components/TrattamentiSection';
import { SposaSection } from './components/SposaSection';
import { PrenotazioneSection } from './components/PrenotazioneSection';
import { Footer } from './components/Footer';
import { CinemaModal, ModalState } from './components/CinemaModal';

export default function App() {
  const [modal, setModal] = useState<ModalState>(null);

  const handleScrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleChangeGalleryIndex = useCallback((nextIndex: number) => {
    setModal((prev) => {
      if (prev && prev.type === 'gallery') {
        return { ...prev, activeIndex: nextIndex };
      }
      return prev;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1E1815]">
      <Navbar onScrollToSection={handleScrollToSection} />

      <main>
        <HeroSection
          onScrollToSection={handleScrollToSection}
          onOpenModal={setModal}
        />
        <EssenzaSection onScrollToSection={handleScrollToSection} />
        <VideoReelSection
          onScrollToSection={handleScrollToSection}
          onOpenModal={setModal}
        />
        <FilosofiaSection />
        <PalmaresSection />
        <TrattamentiSection onOpenModal={setModal} />
        <SposaSection
          onScrollToSection={handleScrollToSection}
          onOpenModal={setModal}
        />
        <PrenotazioneSection />
      </main>

      <Footer onScrollToSection={handleScrollToSection} />

      <CinemaModal
        modal={modal}
        onClose={() => setModal(null)}
        onChangeGalleryIndex={handleChangeGalleryIndex}
      />
    </div>
  );
}
