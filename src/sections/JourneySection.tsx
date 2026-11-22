import { useState } from 'react';
import { BookOpen, Compass, Flag } from 'lucide-react';
import { profileData } from '../data/profile';

const MILESTONE_FILTERS = ['All', 'Education', 'Community', 'Leadership'] as const;

export function JourneySection() {
  const [selectedType, setSelectedType] =
    useState<(typeof MILESTONE_FILTERS)[number]>('All');

  const items =
    selectedType === 'All'
      ? profileData.journey
      : profileData.journey.filter((m) => m.type === selectedType);

  return (
    <section id="journey" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#ffb1c5]">
            06. Journey &amp; Milestones
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#e3e2e8] sm:text-3xl">
            Education &amp; Leadership Timeline
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Filter journey milestones"
          className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#1a1b20] p-1"
        >
          {MILESTONE_FILTERS.map((type) => {
            const active = selectedType === type;
            return (
              <button
                key={type}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setSelectedType(type)}
                className={`min-h-[36px] rounded-lg px-3 py-1.5 font-mono text-xs transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd] ${
                  active
                    ? 'bg-[#00f1fd] font-bold text-[#00373a]'
                    : 'text-[#cfc2d6] hover:text-[#e3e2e8]'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stitch-inspired Vertical Cyber Rail Timeline */}
      <div className="relative mt-8 space-y-4 pl-7 sm:pl-9">
        <div
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-2.5 w-0.5 bg-gradient-to-b from-[#00f1fd] via-[#b76dff] to-[#ff4a8e]/30 sm:left-3.5"
        />

        {items.map((item) => {
          const TypeIcon =
            item.type === 'Education'
              ? BookOpen
              : item.type === 'Community'
              ? Compass
              : Flag;

          const nodeColor =
            item.type === 'Education'
              ? 'bg-[#6ff6ff] shadow-[0_0_10px_#00f1fd]'
              : item.type === 'Community'
              ? 'bg-[#ddb7ff] shadow-[0_0_10px_#b76dff]'
              : 'bg-[#ffb1c5] shadow-[0_0_10px_#ff4a8e]';

          return (
            <div key={item.id} className="relative">
              <div
                aria-hidden="true"
                className={`absolute top-6 -left-[22px] h-2.5 w-2.5 rounded-full ring-4 ring-[#0d0e12] sm:-left-[26px] ${nodeColor}`}
              />

              <div className="glass-panel flex flex-col justify-between gap-3 rounded-xl p-5 sm:flex-row sm:items-center">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#988d9f]">
                    <span className="text-[#6ff6ff]">{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 text-[#cfc2d6]">
                      <TypeIcon className="h-3 w-3" />
                      {item.type}
                    </span>
                    {item.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-semibold text-[#e3e2e8]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#ddb7ff]">{item.organization}</p>
                  <p className="text-xs leading-relaxed text-[#cfc2d6]">{item.detail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
