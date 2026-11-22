import { Award, Compass, Layers, Users } from 'lucide-react';
import { profileData } from '../data/profile';

const PILLAR_ICONS = [Compass, Layers, Users];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6ff6ff]">
            01. About
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#e3e2e8] sm:text-3xl">
            Curious by default, collaborative in practice.
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#cfc2d6]">
          Bridging dual degrees in AI &amp; Data Science with cloud learning and student technology communities.
        </p>
      </div>

      {/* 3 Concise Visual Pillars */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {profileData.aboutPillars.map((pillar, idx) => {
          const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
          return (
            <div
              key={pillar.label}
              className="glass-panel flex flex-col justify-between rounded-xl p-5 transition-colors hover:border-[#b76dff]/35"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#ddb7ff]">{pillar.label}</span>
                  <Icon className="h-4 w-4 text-[#00f1fd]" />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-[#e3e2e8]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#cfc2d6]">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verified Certifications Strip */}
      <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#1a1b20]/75 p-5">
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-[#ffb1c5]" />
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#e3e2e8]">
            Verified Certifications &amp; Credentials
          </h3>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {profileData.certifications.map((cert) => (
            <div
              key={cert}
              className="rounded-lg border border-white/[0.06] bg-[#121317]/80 px-3.5 py-2.5 text-xs font-medium text-[#cfc2d6]"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
