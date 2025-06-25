import Header from './components/Header/Header';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
