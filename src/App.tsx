import { useEffect, useState } from 'react';
import { CyberGridShader } from './components/CyberGridShader';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ProjectDrawer } from './components/ProjectDrawer';
import { ResumeModal } from './components/ResumeModal';
import type { ProjectItem } from './data/profile';
import { AboutSection } from './sections/AboutSection';
import { ActivitiesSection } from './sections/ActivitiesSection';
import { ContactSection } from './sections/ContactSection';
import { GitHubSection } from './sections/GitHubSection';
import { HeroSection } from './sections/HeroSection';
import { JourneySection } from './sections/JourneySection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

const OBSERVED_SECTIONS = ['home', 'projects', 'github', 'activities', 'journey', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const elements = OBSERVED_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d0e12] text-[#e3e2e8]">
      <CyberGridShader />

      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main className="relative z-10">
        <HeroSection
          onNavigate={handleNavigate}
          onOpenResume={() => setResumeOpen(true)}
        />
        <AboutSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <GitHubSection />
        <SkillsSection />
        <ActivitiesSection />
        <JourneySection />
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
