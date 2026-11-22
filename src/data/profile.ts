export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Agents' | 'Cloud & Data' | 'Android & Community';
  summary: string;
  problemSolved: string;
  technologies: string[];
  visualTheme: 'violet' | 'cyan' | 'rose';
  visualLabel: string;
  statusLabel: string;
  githubUrl: string | null;
  liveUrl: string | null;
  sourceBasis: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  accent: 'violet' | 'cyan' | 'rose';
  items: string[];
}

export interface ActivityItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  category: 'Cloud & AI' | 'Developer Community' | 'Campus Leadership';
  highlight: string;
  accent: 'violet' | 'cyan' | 'rose';
}

export interface JourneyMilestone {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  type: 'Education' | 'Community' | 'Leadership';
  detail: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  location: string;
  availabilityLabel: string;
  greeting: string;
  roles: string[];
  headlineSummary: string;
  portraitUrl: string;
  linkedinProfilePdfUrl: string;
  /**
   * Connect a dedicated Resume PDF path or external URL here when available.
   * When null, the Resume modal offers the supplied LinkedIn Profile PDF and direct email request.
   */
  resumeUrl: string | null;
  /**
   * Set Anmol's GitHub username (e.g. "anmolgola") to enable live repository fetching via GitHub REST API.
   * When null, the GitHub section displays Anmol's verified engineering tracks without fabricated stats.
   */
  githubUsername: string | null;
  email: string;
  linkedinUrl: string;
  academics: {
    institution: string;
    program: string;
    period: string;
  }[];
  aboutPillars: {
    label: string;
    title: string;
    description: string;
  }[];
  certifications: string[];
  skillGroups: SkillGroup[];
  projects: ProjectItem[];
  activities: ActivityItem[];
  journey: JourneyMilestone[];
  inquiryTopics: string[];
}

export const profileData: ProfileData = {
  name: 'Anmol Gola',
  shortName: 'Anmol Gola',
  location: 'Mathura, Uttar Pradesh, India',
  availabilityLabel: 'Open to Collaborations & Learning',
  greeting: "Hello, I'm",
  roles: [
    'AI & ML Developer in Progress',
    'Google Student Ambassador',
    'AWS Student Community Builder Leader',
    'BS Data Science @ IIT Madras',
  ],
  headlineSummary:
    'Building at the intersection of AI/ML, Data Science, Cloud technologies, and campus developer ecosystems.',
  portraitUrl: '/assets/aistudio/anmol_proffesional_7039e7ce.png',
  linkedinProfilePdfUrl: '/assets/aistudio/Profile__3__12603ea4.pdf',
  resumeUrl: null,
  githubUsername: null,
  email: 'anmolgola5678@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/anmolgola66571',
  academics: [
    {
      institution: 'GLA University',
      program: 'B.Tech in Computer Science (AI & ML)',
      period: 'Aug 2025 – Present',
    },
    {
      institution: 'IIT Madras',
      program: 'BS in Data Science',
      period: 'May 2025 – Jul 2026',
    },
  ],
  aboutPillars: [
    {
      label: 'Learning',
      title: 'AI, Data Science & Cloud Foundations',
      description:
        'Combining dual academic tracks in Computer Science (AI-ML) at GLA University and Data Science at IIT Madras with hands-on exploration in Azure and AWS.',
    },
    {
      label: 'Building',
      title: 'AI Research Workflows & Mobile Initiatives',
      description:
        'Exploring AI research agents, structured reporting workflows, and collaborative Android development alongside peers.',
    },
    {
      label: 'Community',
      title: 'Campus Technology Leadership',
      description:
        'Promoting peer knowledge-sharing and technical awareness through Google Student Ambassadors India, AWS SBCL, GDG GLA University, and Unstop.',
    },
  ],
  certifications: [
    'Microsoft Certified: Azure Fundamentals',
    'Microsoft Applied Skills: Generate reports with AI research agents',
    'Generative AI: The Evolution of Thoughtful Online Search',
    'Design Thinking',
    'AI FOR BEGINNERS',
  ],
  skillGroups: [
    {
      id: 'ai-ml',
      title: 'AI & Research',
      subtitle: 'Focus areas & applied credentials',
      accent: 'violet',
      items: [
        'AI Agents',
        'AI for Research',
        'AI Reports',
        'Generative AI',
        'Artificial Intelligence & ML',
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      subtitle: 'Cloud computing & ecosystem learning',
      accent: 'cyan',
      items: [
        'Microsoft Azure',
        'Azure Fundamentals',
        'Amazon Web Services (AWS)',
        'Cloud Computing',
      ],
    },
    {
      id: 'data-dev',
      title: 'Data Science & Development',
      subtitle: 'Academic tracks & collaborative teams',
      accent: 'rose',
      items: [
        'Data Science',
        'Android Collaboration (GDG)',
        'Design Thinking',
        'Computer Science Foundations',
      ],
    },
  ],
  projects: [
    {
      id: 'ai-research-agents',
      title: 'AI Research & Report Generation',
      category: 'AI & Agents',
      summary:
        'Applied workflows using AI research agents to synthesize thoughtful online search into structured analytical reports.',
      problemSolved:
        'Turning fragmented multi-source technical research into verifiable, structured summaries without manual synthesis overhead.',
      technologies: ['AI Agents', 'AI for Research', 'Generative AI', 'AI Reports'],
      visualTheme: 'violet',
      visualLabel: 'Applied Credential Track',
      statusLabel: 'Editable Showcase Slot',
      githubUrl: null,
      liveUrl: null,
      sourceBasis: 'Microsoft Applied Skills & Top Skills',
    },
    {
      id: 'cloud-data-architecture',
      title: 'Cloud & Data Science Exploration',
      category: 'Cloud & Data',
      summary:
        'Bridging statistical data science coursework from IIT Madras with foundational cloud architecture on Microsoft Azure and AWS.',
      problemSolved:
        'Connecting academic data science concepts with scalable cloud environments for reproducible experimentation.',
      technologies: ['Data Science', 'Microsoft Azure', 'AWS', 'Cloud Computing'],
      visualTheme: 'cyan',
      visualLabel: 'Cloud & Academic Track',
      statusLabel: 'Editable Showcase Slot',
      githubUrl: null,
      liveUrl: null,
      sourceBasis: 'IIT Madras BS Data Science & Azure Fundamentals',
    },
    {
      id: 'gdg-android-collaboration',
      title: 'Campus Android & Community Builds',
      category: 'Android & Community',
      summary:
        'Collaborative Android initiatives and peer workshops supported as part of the Associate Android Team at GDG GLA University.',
      problemSolved:
        'Helping student developers transition from classroom concepts to collaborative mobile engineering and community shipping.',
      technologies: ['Android', 'Design Thinking', 'Community Workshops', 'Team Collaboration'],
      visualTheme: 'rose',
      visualLabel: 'GDG GLA Collaboration',
      statusLabel: 'Editable Showcase Slot',
      githubUrl: null,
      liveUrl: null,
      sourceBasis: 'GDG GLA University Associate Android Team',
    },
  ],
  activities: [
    {
      id: 'google-ambassador',
      role: 'Ambassador',
      organization: 'Google Student Ambassadors India',
      period: 'April 2026 – Present',
      category: 'Developer Community',
      highlight:
        'Engaging with peers to promote technology-driven initiatives, awareness, and collaborative knowledge-sharing on campus.',
      accent: 'cyan',
    },
    {
      id: 'aws-sbcl',
      role: 'AWS SBCL (Student Community Builder Leader)',
      organization: 'Amazon Web Services (AWS)',
      period: 'September 2026 – Present',
      location: 'Mathura, Uttar Pradesh, India',
      category: 'Cloud & AI',
      highlight:
        'Fostering student cloud learning and community-led AWS exploration within the regional student developer ecosystem.',
      accent: 'violet',
    },
    {
      id: 'gdg-gla',
      role: 'Associate Android Team',
      organization: 'Google Developers Groups — GLA University, Mathura',
      period: 'February 2026 – August 2026',
      location: 'Mathura, Uttar Pradesh, India',
      category: 'Developer Community',
      highlight:
        'Supported collaborative Android projects and community engineering sessions with student developers.',
      accent: 'cyan',
    },
    {
      id: 'unstop-champion',
      role: 'Campus Champion',
      organization: 'Unstop',
      period: 'September 2026 – Present',
      location: 'Mathura, Uttar Pradesh, India',
      category: 'Campus Leadership',
      highlight:
        'Connecting campus peers with competitions, hackathons, and skill-building opportunities.',
      accent: 'rose',
    },
    {
      id: 'star-club',
      role: 'Event Co-Head',
      organization: 'STAR CLUB GLAU',
      period: 'November 2026 – Present',
      location: 'Mathura, Uttar Pradesh, India',
      category: 'Campus Leadership',
      highlight:
        'Co-leading student club event organization and technical/campus community programming at GLA University.',
      accent: 'violet',
    },
    {
      id: 'lets-cook',
      role: 'Chief Strategy Officer',
      organization: "Let's Cook Community - The Foundry",
      period: 'September 2026 – Present',
      location: 'Mathura, Uttar Pradesh, India',
      category: 'Campus Leadership',
      highlight:
        'Shaping community direction and collaborative initiatives for builders and student creators.',
      accent: 'cyan',
    },
    {
      id: 'edc-iitd',
      role: 'Ambassador',
      organization: 'eDC (Entrepreneurship Development Cell) IIT Delhi',
      period: 'December 2025 – January 2026',
      category: 'Campus Leadership',
      highlight:
        'Represented student entrepreneurship initiatives and connected campus peers with eDC IIT Delhi programs.',
      accent: 'rose',
    },
  ],
  journey: [
    {
      id: 'star-club-2026',
      period: 'Nov 2026 – Present',
      title: 'Event Co-Head',
      organization: 'STAR CLUB GLAU',
      location: 'Mathura, India',
      type: 'Leadership',
      detail: 'Co-heading campus events and community engagement initiatives.',
    },
    {
      id: 'aws-unstop-foundry-2026',
      period: 'Sep 2026 – Present',
      title: 'AWS SBCL · Campus Champion · Chief Strategy Officer',
      organization: "AWS · Unstop · Let's Cook Community - The Foundry",
      location: 'Mathura, India',
      type: 'Community',
      detail:
        'Leading student cloud community building, hackathon outreach, and builder strategy.',
    },
    {
      id: 'gsa-2026',
      period: 'Apr 2026 – Present',
      title: 'Campus Ambassador',
      organization: 'Google Student Ambassadors India',
      type: 'Community',
      detail: 'Promoting peer learning and technology-driven campus initiatives.',
    },
    {
      id: 'gdg-2026',
      period: 'Feb 2026 – Aug 2026',
      title: 'Associate Android Team',
      organization: 'Google Developers Groups — GLA University',
      location: 'Mathura, India',
      type: 'Community',
      detail: 'Collaborated on team projects and campus Android developer activities.',
    },
    {
      id: 'edc-2025',
      period: 'Dec 2025 – Jan 2026',
      title: 'Campus Ambassador',
      organization: 'eDC IIT Delhi',
      type: 'Leadership',
      detail: 'Student ambassador for Entrepreneurship Development Cell outreach.',
    },
    {
      id: 'gla-2025',
      period: 'Aug 2025 – Present',
      title: 'B.Tech Computer Science Engineering (AI & ML)',
      organization: 'GLA University',
      location: 'Mathura, India',
      type: 'Education',
      detail: 'Undergraduate engineering specialization in Artificial Intelligence & Machine Learning.',
    },
    {
      id: 'iitm-2025',
      period: 'May 2025 – Jul 2026',
      title: 'BS in Data Science',
      organization: 'Indian Institute of Technology, Madras',
      type: 'Education',
      detail: 'Pursuing foundational and applied Data Science coursework at IIT Madras.',
    },
    {
      id: 'school-2015',
      period: 'Jan 2015 – Apr 2025',
      title: 'Schooling',
      organization: 'MPSM Grace Convent',
      type: 'Education',
      detail: 'Completed primary and secondary schooling prior to university studies.',
    },
  ],
  inquiryTopics: [
    'Project Collaboration',
    'Hackathon Team',
    'Tech Community / Event',
    'Opportunity / Internship',
  ],
};
