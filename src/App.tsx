import Navbar from './components/Navbar.tsx';
import HeroSection from './components/HeroSection.tsx';
import NotificationStrip from './components/NotificationStrip.tsx';
import MarqueeTicker from './components/MarqueeTicker.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import ProblemCardsSection from './components/ProblemCardsSection.tsx';
import SolutionSection from './components/SolutionSection.tsx';
import FeatureCardsSection from './components/FeatureCardsSection.tsx';
import ProspectSection from './components/ProspectSection.tsx';
import LeadsSection from './components/LeadsSection.tsx';
import GlowUpSection from './components/GlowUpSection.tsx';
import SkyCtaSection from './components/SkyCtaSection.tsx';
import FAQSection from './components/FAQSection.tsx';
import ContactSection from './components/ContactSection.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <NotificationStrip />
        <MarqueeTicker />
        <ProblemSection />
        <ProblemCardsSection />
        <SolutionSection />
        <FeatureCardsSection />

        {/* Parallax sticky stack — each section pins to top and the next slides over it */}
        <div className="relative">
          {/* Layer 1: ProspectSection */}
          <div className="sticky top-0 z-10">
            <ProspectSection />
          </div>

          {/* Layer 2: LeadsSection slides over ProspectSection */}
          <div className="sticky top-0 z-20">
            <LeadsSection />
          </div>
        </div>

        <GlowUpSection />
        <SkyCtaSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
