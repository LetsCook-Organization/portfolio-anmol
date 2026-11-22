import { profileData } from '../data/profile';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#0d0e12]/90">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-[#e3e2e8]">
            {profileData.name}
          </p>
          <p className="mt-0.5 text-xs text-[#988d9f]">
            {profileData.location} · B.Tech CSE (AI &amp; ML) &amp; BS Data Science
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs text-[#cfc2d6]">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
            }}
            className="hover:text-[#6ff6ff] transition-colors"
          >
            Projects
          </a>
          <a
            href="#activities"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('activities');
            }}
            className="hover:text-[#6ff6ff] transition-colors"
          >
            Activities
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="hover:text-[#6ff6ff] transition-colors"
          >
            Contact
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ddb7ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-[#ddb7ff] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
