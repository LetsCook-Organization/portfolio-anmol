import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { profileData } from '../data/profile';
import {
  buildMailtoHref,
  submitContactInquiry,
  validateContactForm,
  type ContactValidationErrors,
} from '../utils/contactService';

export function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState(profileData.inquiryTopics[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    status: 'idle' | 'sent' | 'not_configured' | 'error';
    feedback: string;
  }>({ status: 'idle', feedback: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setIstTime(`IST ${formatted}`);
      } catch {
        setIstTime('IST');
      }
    };
    updateClock();
    const id = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(id);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const payload = {
      name,
      email,
      subject,
      topic: selectedTopic,
      message,
    };

    const validationErrors = validateContactForm(payload);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSubmitState({ status: 'idle', feedback: '' });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ status: 'idle', feedback: '' });

    const result = await submitContactInquiry(payload);
    setIsSubmitting(false);

    if (result.status === 'sent') {
      setSubmitState({ status: 'sent', feedback: result.message });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else if (result.status === 'not_configured') {
      setSubmitState({ status: 'not_configured', feedback: result.message });
    } else {
      setSubmitState({ status: 'error', feedback: result.message });
    }
  };

  const mailtoHref = buildMailtoHref(profileData.email, {
    name,
    email,
    subject,
    topic: selectedTopic,
    message,
  });

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-5 pt-14 pb-20 sm:px-8">
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6ff6ff]">
            07. Contact
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#e3e2e8] sm:text-3xl">
            Let&apos;s Connect &amp; Collaborate
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#cfc2d6]">
          Open to project collaborations, hackathon teams, technical discussions, and student opportunities.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: Direct Identity Card */}
        <div className="glass-panel-elevated flex flex-col justify-between rounded-2xl p-6 lg:col-span-5">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#b76dff]/40 bg-[#121317]">
                <img
                  src={profileData.portraitUrl}
                  alt="Anmol Gola"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold text-[#e3e2e8] truncate">
                  {profileData.name}
                </h3>
                <p className="text-xs text-[#cfc2d6]">
                  AI &amp; ML · Data Science · Community
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 font-mono text-xs text-[#988d9f]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#ddb7ff]" />
                    Mathura, India
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#6ff6ff]" />
                    {istTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-white/[0.08] pt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-[#988d9f]">
                Direct Channels
              </p>

              <div className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-[#121317] px-4 py-3">
                <div className="min-w-0">
                  <p className="font-mono text-[11px] text-[#988d9f]">Email</p>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="block truncate font-mono text-xs font-medium text-[#6ff6ff] hover:underline"
                  >
                    {profileData.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-[#1f1f24] px-3 font-mono text-xs text-[#e3e2e8] transition-colors hover:border-[#00f1fd]/50"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#6ff6ff]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#121317] px-4 py-3 transition-colors hover:border-[#b76dff]/45"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[11px] text-[#988d9f]">LinkedIn</p>
                  <p className="truncate font-mono text-xs font-medium text-[#ddb7ff]">
                    linkedin.com/in/anmolgola66571
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-[#988d9f]" />
              </a>
            </div>
          </div>

          <p className="mt-6 border-t border-white/[0.08] pt-4 text-xs leading-relaxed text-[#988d9f]">
            Always glad to connect with fellow student builders, community organizers, and engineering mentors.
          </p>
        </div>

        {/* Right Column: Validated Contact Form */}
        <div className="glass-panel rounded-2xl p-6 lg:col-span-7">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Inquiry Topic Selector */}
            <div>
              <span className="block font-mono text-xs uppercase tracking-wider text-[#988d9f]">
                Topic
              </span>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {profileData.inquiryTopics.map((topic) => {
                  const active = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`min-h-[44px] rounded-lg border px-3.5 py-2 text-left text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd] ${
                        active
                          ? 'border-[#00f1fd]/60 bg-[#292a2e] text-[#6ff6ff] shadow-[0_0_16px_rgba(0,241,253,0.18)]'
                          : 'border-white/[0.07] bg-[#121317] text-[#cfc2d6] hover:border-white/20'
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs text-[#cfc2d6]"
                >
                  Name <span className="text-[#ffb1c5]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0d0e12] px-3.5 py-2.5 text-sm text-[#e3e2e8] placeholder:text-[#988d9f]/60 focus:border-[#00f1fd] focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-[#ffb4ab]">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs text-[#cfc2d6]"
                >
                  Email <span className="text-[#ffb1c5]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0d0e12] px-3.5 py-2.5 text-sm text-[#e3e2e8] placeholder:text-[#988d9f]/60 focus:border-[#00f1fd] focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-[#ffb4ab]">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block font-mono text-xs text-[#cfc2d6]"
              >
                Subject <span className="text-[#ffb1c5]">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
                }}
                placeholder="What would you like to discuss?"
                aria-invalid={Boolean(errors.subject)}
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#0d0e12] px-3.5 py-2.5 text-sm text-[#e3e2e8] placeholder:text-[#988d9f]/60 focus:border-[#00f1fd] focus:outline-none"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-[#ffb4ab]">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs text-[#cfc2d6]"
              >
                Message <span className="text-[#ffb1c5]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                }}
                placeholder="Share a quick overview of your idea, event, or collaboration..."
                aria-invalid={Boolean(errors.message)}
                className="mt-1.5 w-full resize-y rounded-lg border border-white/10 bg-[#0d0e12] px-3.5 py-2.5 text-sm text-[#e3e2e8] placeholder:text-[#988d9f]/60 focus:border-[#00f1fd] focus:outline-none"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-[#ffb4ab]">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#b76dff] via-[#842bd2] to-[#ff4a8e] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(183,109,255,0.3)] transition-all hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f1fd]"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              <a
                href={mailtoHref}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/10 bg-[#121317] px-4 py-2.5 text-xs font-semibold text-[#cfc2d6] transition-colors hover:border-[#00f1fd]/50 hover:text-[#6ff6ff]"
              >
                <Mail className="h-4 w-4" />
                <span>Open Email App</span>
              </a>
            </div>

            {/* Honest Status Feedback (Never fakes delivery when unconfigured) */}
            {submitState.status === 'sent' && (
              <div
                role="status"
                className="flex items-start gap-2.5 rounded-xl border border-[#00f1fd]/40 bg-[#121317] p-4 text-xs text-[#6ff6ff]"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{submitState.feedback}</span>
              </div>
            )}

            {submitState.status === 'not_configured' && (
              <div
                role="status"
                className="flex flex-col gap-3 rounded-xl border border-[#ddb7ff]/35 bg-[#121317] p-4 text-xs text-[#cfc2d6]"
              >
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ddb7ff]" />
                  <span>{submitState.feedback}</span>
                </div>
                <div>
                  <a
                    href={mailtoHref}
                    className="inline-flex min-h-[38px] items-center gap-2 rounded-lg bg-[#00f1fd] px-3.5 py-2 font-mono text-xs font-bold text-[#00373a] hover:opacity-90"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Send via Email Client</span>
                  </a>
                </div>
              </div>
            )}

            {submitState.status === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl border border-[#ffb4ab]/40 bg-[#121317] p-4 text-xs text-[#ffb4ab]"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{submitState.feedback}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
