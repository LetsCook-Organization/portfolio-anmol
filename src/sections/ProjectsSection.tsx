import { useState } from 'react';
import { ChevronRight, Cloud, Cpu, ExternalLink, Github, Smartphone } from 'lucide-react';
import { profileData, type ProjectItem } from '../data/profile';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES = ['All', 'AI & Agents', 'Cloud & Data', 'Android & Community'] as const;

function ProjectPreviewArtwork({ project }: { project: ProjectItem }) {
  const accentStyles = {
    violet: {
      gradient: 'from-[#842bd2]/35 via-[#1f1f24] to-[#0d0e12]',
      ring: 'border-[#b76dff]/35',
      text: 'text-[#ddb7ff]',
      icon: Cpu,
    },
    cyan: {
      gradient: 'from-[#00f1fd]/25 via-[#1f1f24] to-[#0d0e12]',
      ring: 'border-[#00f1fd]/35',
      text: 'text-[#6ff6ff]',
      icon: Cloud,
    },
    rose: {
      gradient: 'from-[#ff4a8e]/25 via-[#1f1f24] to-[#0d0e12]',
      ring: 'border-[#ff4a8e]/35',
      text: 'text-[#ffb1c5]',
      icon: Smartphone,
    },
  }[project.visualTheme];

  const Icon = accentStyles.icon;

  return (
    <div
      className={`relative flex h-56 w-full flex-col justify-between overflow-hidden rounded-xl border ${accentStyles.ring} bg-gradient-to-br ${accentStyles.gradient} p-5 sm:h-64`}
    >
      <div
        aria-hidden="true"
        className="cyber-grid-bg pointer-events-none absolute inset-0 opacity-60"
      />
      <div className="relative z-10 flex items-center justify-between text-xs font-mono">
        <span className={accentStyles.text}>{project.visualLabel}</span>
        <span className="text-[#988d9f]">{project.category}</span>
      </div>

      {/* Abstract Architectural Node Graphic */}
      <div className="relative z-10 my-auto flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#0d0e12]/80 shadow-lg">
            <Icon className={`h-7 w-7 ${accentStyles.text}`} />
          </div>
          <div className="hidden flex-col gap-1.5 sm:flex">
            <div className="h-2 w-28 rounded-full bg-white/15" />
            <div className="h-2 w-20 rounded-full bg-white/10" />
            <div className="h-2 w-24 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/[0.08] pt-3 font-mono text-xs text-[#cfc2d6]">
        <span className="truncate">{project.sourceBasis}</span>
        <span className="shrink-0 text-[#988d9f]">{project.statusLabel}</span>
      </div>
    </div>
  );
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof CATEGORIES)[number]>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? profileData.projects
      : profileData.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#ddb7ff]">
            02. Projects &amp; Build Tracks
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#e3e2e8] sm:text-3xl">
            Applied Focus &amp; Technical Explorations
          </h2>
        </div>

        {/* Interactive Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#1a1b20] p-1"
        >
          {CATEGORIES.map((category) => {
            const isSelected = activeFilter === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(category)}
                className={`min-h-[36px] rounded-lg px-3 py-1.5 font-mono text-xs transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd] ${
                  isSelected
                    ? 'bg-[#00f1fd] font-bold text-[#00373a] shadow-[0_0_14px_rgba(0,241,253,0.3)]'
                    : 'text-[#cfc2d6] hover:text-[#e3e2e8]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Alternating Large Showcase Rows */}
      <div className="mt-8 space-y-8">
        {filteredProjects.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={project.id}
              className="glass-panel grid grid-cols-1 gap-6 rounded-2xl p-5 transition-all hover:border-[#b76dff]/40 sm:p-6 lg:grid-cols-12 lg:items-center lg:gap-8"
            >
              <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                <ProjectPreviewArtwork project={project} />
              </div>

              <div className={`flex flex-col justify-between space-y-4 lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#988d9f]">
                    <span className="text-[#6ff6ff]">{project.category}</span>
                    <span aria-hidden="true">/</span>
                    <span>{project.statusLabel}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#e3e2e8]">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#cfc2d6]">
                    {project.summary}
                  </p>

                  <div className="rounded-lg border border-white/[0.06] bg-[#121317]/75 px-3.5 py-2.5">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#988d9f]">
                      Problem Addressed:{' '}
                    </span>
                    <span className="text-xs text-[#cfc2d6]">{project.problemSolved}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.08] bg-[#121317] px-2.5 py-1 font-mono text-xs text-[#cfc2d6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/10 bg-[#121317] px-3 py-2 font-mono text-xs text-[#e3e2e8] hover:border-[#ddb7ff]"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#b76dff] px-3 py-2 font-mono text-xs font-semibold text-[#121317] hover:opacity-90"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <span className="font-mono text-xs text-[#988d9f]">
                        Add repo or demo link in profile config
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex min-h-[40px] items-center gap-1 font-mono text-xs font-semibold text-[#6ff6ff] transition-colors hover:text-[#dcfdff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd] rounded-md px-2"
                  >
                    <span>Inspect Details</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
