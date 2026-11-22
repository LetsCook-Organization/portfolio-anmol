import { Cloud, Cpu, Database } from 'lucide-react';
import { profileData } from '../data/profile';

const ACCENT_MAP = {
  violet: {
    border: 'hover:border-[#b76dff]/45',
    iconColor: 'text-[#ddb7ff]',
    dot: 'bg-[#b76dff]',
    Icon: Cpu,
  },
  cyan: {
    border: 'hover:border-[#00f1fd]/45',
    iconColor: 'text-[#6ff6ff]',
    dot: 'bg-[#00f1fd]',
    Icon: Cloud,
  },
  rose: {
    border: 'hover:border-[#ff4a8e]/45',
    iconColor: 'text-[#ffb1c5]',
    dot: 'bg-[#ff4a8e]',
    Icon: Database,
  },
} as const;

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#ddb7ff]">
            04. Technology &amp; Skills
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#e3e2e8] sm:text-3xl">
            Core Stack &amp; Focus Areas
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#cfc2d6]">
          Skills and domains grounded in coursework, certifications, and community work.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {profileData.skillGroups.map((group) => {
          const style = ACCENT_MAP[group.accent];
          const Icon = style.Icon;
          return (
            <div
              key={group.id}
              className={`glass-panel flex flex-col justify-between rounded-2xl p-6 transition-colors ${style.border}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#121317]">
                    <Icon className={`h-5 w-5 ${style.iconColor}`} />
                  </div>
                  <span className="font-mono text-xs text-[#988d9f]">{group.subtitle}</span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-[#e3e2e8]">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-[#121317]/80 px-3.5 py-2.5 text-sm text-[#cfc2d6]"
                    >
                      <span>{item}</span>
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
