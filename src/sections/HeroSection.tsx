import { useEffect, useState } from 'react';
import { ArrowRight, FileText, GraduationCap, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export function HeroSection({ onNavigate, onOpenResume }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profileData.roles.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative mx-auto max-w-[1200px] px-5 pt-10 pb-16 sm:px-8 lg:pt-14 lg:pb-20"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
        {/* Left Column: Identity, Headline, CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 lg:col-span-7"
        >
          {/* Ambient Violet & Cyan Corner Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#b76dff]/18 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#00f1fd]/12 blur-3xl"
          />

          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs tracking-wider text-[#6ff6ff]">
                {profileData.availabilityLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#988d9f]">
                <MapPin className="h-3.5 w-3.5 text-[#ddb7ff]" />
                {profileData.location}
              </span>
            </div>

            <div>
              <p className="font-mono text-sm text-[#cfc2d6]">{profileData.greeting}</p>
              <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-[#e3e2e8] sm:text-5xl lg:text-[60px] lg:leading-[1.06]">
                ANMOL{' '}
                <span className="bg-gradient-to-r from-[#f0dbff] via-[#00f1fd] to-[#ffb1c5] bg-clip-text text-transparent">
                  GOLA
                </span>
              </h1>
            </div>

            {/* Dynamic Role Line */}
            <div className="flex min-h-[28px] items-center gap-2 font-mono text-sm text-[#ddb7ff] sm:text-base">
              <span className="text-[#00f1fd]" aria-hidden="true">
                &rsaquo;
              </span>
              <span key={roleIndex} className="transition-opacity duration-300">
                {profileData.roles[roleIndex]}
              </span>
            </div>

            <p className="font-display text-lg font-semibold tracking-tight text-[#e3e2e8] sm:text-xl">
              Building. Learning. Exploring.
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-[#cfc2d6] sm:text-base">
              {profileData.headlineSummary}
            </p>
          </div>

          {/* Primary Actions */}
          <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#b76dff] via-[#842bd2] to-[#ff4a8e] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(183,109,255,0.35)] transition-transform hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#00f1fd]/40 bg-[#121317]/80 px-5 py-2.5 text-sm font-semibold text-[#6ff6ff] transition-colors hover:bg-[#00f1fd]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd]"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/10 bg-[#1f1f24] px-4 py-2.5 text-sm font-medium text-[#e3e2e8] transition-colors hover:border-[#ddb7ff]/50 hover:bg-[#292a2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd]"
            >
              <FileText className="h-4 w-4 text-[#ddb7ff]" />
              <span>Resume</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Portrait & Academic Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-elevated relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 sm:p-6 lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/4.3] w-full max-w-sm overflow-hidden rounded-xl bg-gradient-to-tr from-[#b76dff] via-[#00f1fd] to-[#ff4a8e] p-[2px] shadow-[0_0_32px_rgba(183,109,255,0.28)] lg:max-w-none">
            <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-[#121317]">
              {!imageFailed ? (
                <img
                  src={profileData.portraitUrl}
                  alt="Anmol Gola portrait"
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#1f1f24] to-[#0d0e12] p-6 text-center">
                  <span className="font-display text-4xl font-bold text-[#ddb7ff]">AG</span>
                  <span className="mt-2 font-mono text-xs text-[#988d9f]">Anmol Gola</span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0e12]/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-2 text-xs">
                <span className="font-mono text-[#e3e2e8]">Anmol Gola</span>
                <span className="font-mono text-[#6ff6ff]">AI &amp; ML · Cloud</span>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {profileData.academics.map((item) => (
              <div
                key={item.institution}
                className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-[#121317]/80 px-3.5 py-2.5"
              >
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#ddb7ff]" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#e3e2e8] truncate">
                    {item.institution}
                  </p>
                  <p className="text-xs text-[#cfc2d6] truncate">{item.program}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-Width Factual Focus Strip */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-white/[0.07] bg-[#1a1b20]/85 px-4 py-3.5">
          <p className="font-mono text-xs text-[#988d9f]">Undergraduate</p>
          <p className="mt-1 font-display text-sm font-semibold text-[#e3e2e8]">
            B.Tech CSE (AI &amp; ML)
          </p>
          <p className="mt-0.5 text-xs text-[#ddb7ff]">GLA University</p>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-[#1a1b20]/85 px-4 py-3.5">
          <p className="font-mono text-xs text-[#988d9f]">Dual Program</p>
          <p className="mt-1 font-display text-sm font-semibold text-[#e3e2e8]">
            BS in Data Science
          </p>
          <p className="mt-0.5 text-xs text-[#6ff6ff]">IIT Madras</p>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-[#1a1b20]/85 px-4 py-3.5">
          <p className="font-mono text-xs text-[#988d9f]">Community</p>
          <p className="mt-1 font-display text-sm font-semibold text-[#e3e2e8]">
            Google &amp; AWS
          </p>
          <p className="mt-0.5 text-xs text-[#ffb1c5]">Student Leadership</p>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-[#1a1b20]/85 px-4 py-3.5">
          <p className="font-mono text-xs text-[#988d9f]">Focus Areas</p>
          <p className="mt-1 font-display text-sm font-semibold text-[#e3e2e8]">
            AI Agents &amp; Cloud
          </p>
          <p className="mt-0.5 text-xs text-[#cfc2d6]">Azure · Research · Android</p>
        </div>
      </div>
    </section>
  );
}
