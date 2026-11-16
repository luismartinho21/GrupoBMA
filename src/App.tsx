import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuoteSimulator } from './components/QuoteSimulator';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessAndAbout } from './components/ProcessAndAbout';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieBanner, LegalModal, type LegalDocType } from './components/LegalAndCookies';

export function App() {
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);
  const [forceOpenCookies, setForceOpenCookies] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6EFE6] text-[#1E1510]">
      <Navbar />
      <main>
        <Hero />
        <QuoteSimulator />
        <ServicesSection />
        <ProjectsSection />
        <ProcessAndAbout />
        <ContactSection />
      </main>
      <Footer
        onOpenLegal={(doc) => setLegalDoc(doc)}
        onOpenCookies={() => setForceOpenCookies(true)}
      />
      <CookieBanner
        onOpenLegal={(doc) => setLegalDoc(doc)}
        forceOpen={forceOpenCookies}
        onCloseForce={() => setForceOpenCookies(false)}
      />
      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}

export default App;
