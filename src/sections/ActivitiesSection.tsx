import { useState } from 'react';
import { Calendar, MapPin, Sparkles, Users } from 'lucide-react';
import { profileData } from '../data/profile';

const ACTIVITY_FILTERS = [
  'All',
  'Developer Community',
  'Cloud & AI',
  'Campus Leadership',
] as const;

export function ActivitiesSection() {
  const [filter, setFilter] = useState<(typeof ACTIVITY_FILTERS)[number]>('All');

  const visibleActivities =
    filter === 'All'
      ? profileData.activities
      : profileData.activities.filter((item) => item.category === filter);

  return (
    <section id="activities" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6ff6ff]">
            05. Activities &amp; Community
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#e3e2e8] sm:text-3xl">
            Developer Ecosystem &amp; Campus Leadership
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Filter community activities"
          className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#1a1b20] p-1"
        >
          {ACTIVITY_FILTERS.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setFilter(item)}
                className={`min-h-[36px] rounded-lg px-3 py-1.5 font-mono text-xs transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd] ${
                  active
                    ? 'bg-[#b76dff] font-bold text-[#121317] shadow-[0_0_14px_rgba(183,109,255,0.35)]'
                    : 'text-[#cfc2d6] hover:text-[#e3e2e8]'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleActivities.map((activity) => {
          const accentColor =
            activity.accent === 'cyan'
              ? 'text-[#6ff6ff]'
              : activity.accent === 'rose'
              ? 'text-[#ffb1c5]'
              : 'text-[#ddb7ff]';

          return (
            <article
              key={activity.id}
              className="glass-panel flex flex-col justify-between rounded-xl p-5 transition-colors hover:border-[#b76dff]/35"
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-xs">
                  <span className={accentColor}>{activity.category}</span>
                  <Users className="h-3.5 w-3.5 text-[#988d9f]" />
                </div>

                <h3 className="mt-3 font-display text-lg font-bold text-[#e3e2e8]">
                  {activity.role}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-[#ddb7ff]">
                  {activity.organization}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#cfc2d6]">
                  {activity.highlight}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/[0.07] pt-3 font-mono text-[11px] text-[#988d9f]">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {activity.period}
                </span>
                {activity.location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {activity.location}
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#1a1b20]/70 px-4 py-3 text-xs text-[#cfc2d6]">
        <Sparkles className="h-4 w-4 shrink-0 text-[#00f1fd]" />
        <span>
          Actively involved in student technology communities, campus events, peer workshops, and builder collaborations.
        </span>
      </div>
    </section>
  );
}
