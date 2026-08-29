/**
 * Single source of truth for identity, links, and the numbers shown in the
 * home stat row. Everything user-facing that isn't a project/skill/role lives
 * here so there's exactly one place to edit a handle or a resume path.
 */

export const profile = {
  firstName: 'Anirudh',
  lastName: 'Phophalia',
  handle: 'AnirudhPhophalia',
  /** Shown in the title-bar search pill — the person, not the git handle. */
  repoName: 'anirudh phophalia : portfolio',
  shellUser: 'anirudh',
  title: 'AI/ML Engineer & Full Stack Developer',
  location: 'India',
  /** Role pills on the home hero. `current` renders as the employer badge. */
  roles: [
    { label: 'AI / ML Engineer', tone: 'accent' as const },
    { label: 'Computer Vision', tone: 'green' as const },
    { label: 'Full Stack Dev', tone: 'blue' as const },
    { label: '@ Samsung PRISM', tone: 'pink' as const, current: true },
  ],
  tagline:
    'Building intelligent systems through research-driven ML and production software.',
  /** Cycled by the home hero's typewriter, in order. */
  taglines: [
    'Building intelligent systems 🛠️',
    'Computer vision for real-world problems 👁️',
    'Research-driven ML with measurable results 📈',
    'Full-stack products that solve real problems 💻',
    'Always learning, always building ✨',
    '💻 Crafting code by day, 🎏 flying kites by breeze, and 🔢 solving math puzzles by night.',
  ],
  intro:
    'I work where **machine learning** meets **shipped software** — computer vision, **deep learning research**, and the **full-stack applications** that turn ideas into useful products.',
  /** `**term**` spans render in the theme blue — see <Emphasis>. */
  bio: "Hi! I'm **Anirudh Phophalia**, a Computer Science student at **Thapar Institute** and a Data Science student at **IIT Madras**. I build **computer vision and deep learning systems**, full-stack applications, and research projects that connect strong engineering with practical impact.",
} as const

export const links = {
  github: 'https://github.com/AnirudhPhophalia',
  linkedin: 'https://www.linkedin.com/in/anirudh-phophalia',
  kaggle: 'https://www.kaggle.com/anirudhphophalia',
  x: 'https://x.com/aniphophalia',
  email: 'anirudhphophalia@gmail.com',
} as const

export const resumes = [
  {
    id: 'resume',
    label: 'Anirudh_Phophalia_Resume.pdf',
    href: '/Resume.pdf',
    /** The one-click "Download Resume" target across the activity bar, File menu and settings. */
    default: true,
  },
] as const

export const defaultResume = resumes[0]

export const stats = [
  { value: '9.61', label: 'CGPA', suffix: '/ 10' },
  { value: '15', label: 'Projects', suffix: '+' },
  { value: '4+', label: 'Experiences', suffix: '' },
  { value: '94', label: 'Class 12', suffix: '%' },
]

/** Two-column "CURRENT FOCUS" list in about.html. */
export const currentFocus = [
  { emoji: '🔎', text: 'Multimodal computer vision, OCR, and semantic analysis for privacy scanning' },
  { emoji: '📡', text: 'SDR-based drone detection and RF signal analysis at DRDO' },
  { emoji: '🧠', text: 'Deep learning, transformer models, and explainable AI' },
  { emoji: '⚙️', text: 'Full-stack applications with reliable APIs and data workflows' },
  { emoji: '📊', text: 'Applied data science and machine learning experimentation' },
  { emoji: '📚', text: 'Talk to me about computer vision, web development, or ML research' },
]
