import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuoteSimulator } from './components/QuoteSimulator';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessAndAbout } from './components/ProcessAndAbout';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white">
      <Navbar />
      <main>
        <Hero />
        <QuoteSimulator />
        <ServicesSection />
        <ProjectsSection />
        <ProcessAndAbout />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
