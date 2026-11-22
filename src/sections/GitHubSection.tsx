import { useEffect, useState } from 'react';
import { ExternalLink, FolderGit2, GitBranch, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
}

export function GitHubSection() {
  const username = profileData.githubUsername;
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('Unable to fetch GitHub repositories');
        return res.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        if (!cancelled) {
          setRepos(data.filter((repo) => !repo.name.startsWith('.')));
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError('GitHub API is currently unreachable. Please check the profile link directly.');
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return (
    <section id="github" className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6ff6ff]">
            03. GitHub &amp; Code
          </p>
          <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#e3e2e8] sm:text-3xl">
            Developer Workspace &amp; Code Focus
          </h2>
        </div>

        {username && (
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#00f1fd]/40 bg-[#1a1b20] px-4 py-2 font-mono text-xs font-semibold text-[#6ff6ff] hover:bg-[#292a2e]"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>@{username}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {username ? (
        <div className="mt-8">
          {loading && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-36 animate-pulse rounded-xl border border-white/[0.06] bg-[#1a1b20]"
                />
              ))}
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-[#ffb4ab]/30 bg-[#1a1b20] p-5 text-sm text-[#ffb4ab]">
              {error}
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel flex flex-col justify-between rounded-xl p-5 transition-colors hover:border-[#00f1fd]/45"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-base font-semibold text-[#e3e2e8] truncate">
                        {repo.name}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#988d9f]" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#cfc2d6]">
                      {repo.description || 'Repository on GitHub.'}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between font-mono text-xs text-[#988d9f]">
                    <span>{repo.language || 'Code'}</span>
                    <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Terminal Coding Identity Card */}
          <div className="glass-panel-elevated rounded-2xl p-6 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#ddb7ff]">
                <Terminal className="h-4 w-4" />
                <span>Developer Identity</span>
              </div>
              <span className="text-[#988d9f]">Profile Link Ready</span>
            </div>

            <div className="mt-4 space-y-3 font-mono text-xs leading-relaxed text-[#cfc2d6]">
              <p>
                <span className="text-[#6ff6ff]">focus:</span> AI Agents, Data Science, Cloud (Azure &amp; AWS), Android Collaboration
              </p>
              <p>
                <span className="text-[#6ff6ff]">education:</span> B.Tech CSE (AI-ML) @ GLA · BS Data Science @ IITM
              </p>
              <p>
                <span className="text-[#6ff6ff]">github:</span> Not supplied in imported LinkedIn profile; ready to connect via{' '}
                <code className="rounded bg-[#0d0e12] px-1.5 py-0.5 text-[#ddb7ff]">
                  githubUsername
                </code>{' '}
                in profile config.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#b76dff]/40 bg-[#121317] px-4 py-2 font-mono text-xs text-[#f0dbff] hover:border-[#ddb7ff]"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Active Technical Tracks (No fabricated stars or commit counts) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                title: 'AI Research & Agent Workflows',
                detail: 'Exploring structured research generation and thoughtful AI search workflows.',
                tag: 'AI Agents · Research',
              },
              {
                title: 'Data Science Foundations',
                detail: 'Applied data analysis and quantitative foundations through IIT Madras BS program.',
                tag: 'IIT Madras · Data Science',
              },
              {
                title: 'Cloud Computing Exploration',
                detail: 'Azure Fundamentals certification paired with AWS Student Community Builder leadership.',
                tag: 'Azure · AWS',
              },
              {
                title: 'Campus Android & Community',
                detail: 'Supporting peer engineering projects as Associate Android Team member at GDG GLA.',
                tag: 'GDG GLA · Android',
              },
            ].map((track) => (
              <div
                key={track.title}
                className="glass-panel flex flex-col justify-between rounded-xl p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <GitBranch className="h-4 w-4 text-[#00f1fd]" />
                    <span className="font-mono text-[11px] text-[#988d9f]">{track.tag}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-[#e3e2e8]">
                    {track.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#cfc2d6]">{track.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
