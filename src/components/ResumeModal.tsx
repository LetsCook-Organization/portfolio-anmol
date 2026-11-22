import { useEffect } from 'react';
import { Download, ExternalLink, FileText, Mail, X } from 'lucide-react';
import { profileData } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasDedicatedResume = Boolean(profileData.resumeUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-[#b76dff]/30 bg-[#1a1b20] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.75)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#b76dff]/30 bg-[#121317] text-[#ddb7ff]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="font-display text-xl font-semibold text-[#e3e2e8]">
                {hasDedicatedResume ? 'Resume' : 'Profile & Resume'}
              </h2>
              <p className="text-xs font-mono text-[#988d9f]">
                {profileData.name} · {profileData.location}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume dialog"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#121317] text-[#cfc2d6] transition-colors hover:text-[#e3e2e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {hasDedicatedResume && profileData.resumeUrl ? (
            <div className="rounded-lg border border-white/[0.08] bg-[#121317] p-4">
              <p className="text-sm text-[#cfc2d6]">
                Open or download Anmol Gola&apos;s latest resume PDF.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#b76dff] px-4 py-2 text-xs font-semibold text-[#121317] transition-opacity hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open Resume</span>
                </a>
                <a
                  href={profileData.resumeUrl}
                  download
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[#00f1fd]/40 bg-[#1f1f24] px-4 py-2 text-xs font-semibold text-[#6ff6ff] transition-colors hover:bg-[#292a2e]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-lg border border-white/[0.08] bg-[#121317] p-4">
                <p className="text-sm leading-relaxed text-[#cfc2d6]">
                  A standalone resume PDF has not been attached yet. You can open or download the supplied LinkedIn Profile PDF below, or request the latest resume directly via email.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={profileData.linkedinProfilePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#b76dff] to-[#842bd2] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(183,109,255,0.4)]"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View LinkedIn Profile PDF</span>
                </a>

                <a
                  href={profileData.linkedinProfilePdfUrl}
                  download="Anmol_Gola_LinkedIn_Profile.pdf"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#00f1fd]/35 bg-[#121317] px-4 py-2.5 text-xs font-semibold text-[#6ff6ff] transition-colors hover:bg-[#292a2e]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Profile PDF</span>
                </a>

                <a
                  href={`mailto:${profileData.email}?subject=${encodeURIComponent('Resume Request — Portfolio')}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/10 bg-[#1f1f24] px-4 py-2.5 text-xs font-semibold text-[#e3e2e8] transition-colors hover:bg-[#292a2e]"
                >
                  <Mail className="h-4 w-4 text-[#ffb1c5]" />
                  <span>Request via Email</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
