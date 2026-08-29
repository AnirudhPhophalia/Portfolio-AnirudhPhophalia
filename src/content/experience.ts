export interface Role {
  company: string
  role: string
  period: string
  /** Drives the filled/outline timeline marker. */
  current: boolean
  description: string[]
  techStack: string[]
  link?: string
}

export const experiences: Role[] = [
  {
    company: 'Samsung R&D Institute, Bangalore',
    role: 'Samsung PRISM Project Intern',
    period: 'Aug 2026 – Present',
    current: true,
    description: [
      'Developing an AI-driven Smart Data Privacy Scanner using multimodal computer vision, OCR, and semantic analysis to detect personally identifiable information.',
    ],
    techStack: ['Computer Vision', 'OCR', 'Semantic Analysis', 'Python'],
  },
  {
    company: 'Defence Research and Development Organisation (DRDO)',
    role: 'Summer Research Intern',
    period: 'Jun 2026 – Present',
    current: false,
    description: [
      'Developing SDR-based drone detection and RF signal analysis pipelines using signal processing and machine learning techniques for drone communication identification.',
    ],
    techStack: ['SDR', 'Signal Processing', 'Machine Learning', 'Python'],
  },
  {
    company: 'Cambiante Technologies',
    role: 'Frontend Developer Intern',
    period: 'Jun 2025 – Jul 2025',
    current: false,
    description: [
      'Developed core Angular modules for Cam-Shot, an AI-powered event photo management platform, including authentication, photo galleries, and event management interfaces.',
      'Integrated REST APIs and optimized frontend performance by resolving UI bugs, improving component reusability, and streamlining data flow.',
    ],
    techStack: ['Angular', 'REST APIs', 'JavaScript'],
    link: 'https://drive.google.com/file/d/1_r_dvCIRiptC0FCjroRkrkqxFh1qB594/view?usp=drive_link',
  },
  {
    company: 'Backslash Computing Society, TIET',
    role: 'Technical Core Member',
    period: 'Sep 2024 – Dec 2025',
    current: false,
    description: [
      'Led the end-to-end development of the Cryptic Hunt Portal, enabling a smooth experience for 500+ participants during Synapse.',
      'Mentored junior members through workshops on Web Development, Git/GitHub, and AI/ML.',
    ],
    techStack: ['Web Development', 'Git', 'GitHub', 'AI/ML'],
  },
]

export interface Education {
  emoji: string
  institution: string
  degree: string
  period: string
  score: string
  highlights: string[]
}

export const education: Education[] = [
  {
    emoji: '🎓',
    institution: 'Thapar Institute of Engineering and Technology',
    degree: 'B.Tech, Computer Science Engineering',
    period: 'Aug 2024 – May 2028',
    score: 'CGPA 9.61 / 10',
    highlights: [],
  },
  {
    emoji: '🏫',
    institution: 'Indian Institute of Technology Madras',
    degree: 'B.S. in Data Science and Applications',
    period: 'May 2024 – Present',
    score: 'Remote',
    highlights: [],
  },
  {
    emoji: '🏫',
    institution: 'Cambridge Court World School, Jaipur',
    degree: 'Class 12 — CBSE · PCM',
    period: '2024',
    score: '94%',
    highlights: [],
  },
  {
    emoji: '📘',
    institution: 'Mayura School',
    degree: 'Class 10 — ICSE',
    period: '2022',
    score: '96.5%',
    highlights: [],
  },
]
