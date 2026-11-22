import { useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import type { ProjectItem } from '../data/profile';

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-drawer-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-md sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-t-2xl border border-[#b76dff]/35 bg-[#1a1b20] p-6 shadow-[0_-12px_48px_rgba(0,0,0,0.8)] sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-[#6ff6ff]">
              {project.category} · {project.statusLabel}
            </p>
            <h3 id="project-drawer-title" className="mt-1 font-display text-2xl font-bold text-[#e3e2e8]">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#121317] text-[#cfc2d6] transition-colors hover:text-[#e3e2e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <div className="rounded-lg border border-white/[0.07] bg-[#121317] p-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#988d9f]">Overview</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-[#cfc2d6]">{project.summary}</p>
          </div>

          <div className="rounded-lg border border-white/[0.07] bg-[#121317] p-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#988d9f]">Problem Addressed</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-[#cfc2d6]">{project.problemSolved}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#988d9f]">Technologies &amp; Focus</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-[#121317] px-2.5 py-1 font-mono text-xs text-[#e3e2e8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
            <span className="font-mono text-xs text-[#988d9f]">
              Basis: {project.sourceBasis}
            </span>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-white/10 bg-[#121317] px-3.5 py-2 text-xs font-semibold text-[#e3e2e8] hover:border-[#ddb7ff]"
                >
                  <Github className="h-4 w-4" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#00f1fd] px-3.5 py-2 text-xs font-semibold text-[#00373a] hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
              {!project.githubUrl && !project.liveUrl && (
                <span className="font-mono text-xs text-[#988d9f]">
                  Links can be added in profile data when public repos are published.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
