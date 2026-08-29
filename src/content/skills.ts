/**
 * Skills are rendered as grouped tag pills, not percentage bars — there is no
 * honest proficiency number to put on a bar, so the JSON-ish grouping carries
 * the structure instead.
 */
export interface SkillGroup {
  key: string
  label: string
  /** Maps to a theme accent slot so each group reads as its own colour. */
  tone: 'accent' | 'green' | 'blue' | 'pink' | 'yellow' | 'purple'
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'languages',
    label: 'Languages',
    tone: 'accent',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'R', 'MATLAB'],
  },
  {
    key: 'ai',
    label: 'Machine Learning & AI',
    tone: 'purple',
    items: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'Transformer Models', 'OCR'],
  },
  {
    key: 'ml',
    label: 'Web Development',
    tone: 'green',
    items: ['Angular', 'React', 'Vue.js', 'Node.js', 'Express.js', 'NestJS', 'Flask'],
  },
  {
    key: 'backend',
    label: 'Databases',
    tone: 'blue',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'OracleDB', 'SQLite'],
  },
  {
    key: 'tools',
    label: 'Tools & Platforms',
    tone: 'pink',
    items: ['Anaconda', 'AWS', 'Docker', 'Vercel', 'Cloudinary', 'Linux', 'Kali Linux', 'Postman', 'Git', 'GitHub', 'Bitbucket', 'Jira'],
  },
  {
    key: 'frameworks',
    label: 'Frameworks & Libraries',
    tone: 'yellow',
    items: ['Swagger', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'OpenCV', 'Hugging Face', 'CSS3', 'HTML5', 'Bootstrap', 'TailwindCSS', 'Celery', 'Redis'],
  },
]

export interface Achievement {
  emoji: string
  title: string
  description: string
  year: string
}

export const achievements: Achievement[] = [
  {
    emoji: '📄',
    title: 'Research Publication — VAK-Former',
    description:
      'Transformer-Driven Semantic Segmentation for Robust Autonomous Inspection in Unmanned Surface Vessels is under review at The Journal of Supercomputing (Springer).',
    year: '2026',
  },
  {
    emoji: '🏆',
    title: 'Top 50 — GSSoC 2026',
    description: 'MedInternia was selected among the Top 50 projects in GSSoC 2026 with 110 contributors.',
    year: '2026',
  },
  {
    emoji: '🎓',
    title: 'Amazon ML Summer School',
    description: 'Selected for Amazon ML Summer School 2026.',
    year: 'Jul–Aug 2026',
  },
  {
    emoji: '⭐',
    title: 'Merit Scholarship — Two Consecutive Years',
    description: 'Received the Merit Scholarship for two consecutive years at Thapar Institute.',
    year: '2024–2026',
  },
  {
    emoji: '🚀',
    title: 'Semifinalist — Indian–Israeli Hackathon',
    description: 'Reached the semifinal stage in August 2025 after building MedInternia.',
    year: 'Aug 2025',
  },
  {
    emoji: '🏅',
    title: 'Class 10 ICSE Board Exam — City Topper, Jaipur',
    description:
      'Achieved city-topper recognition in the ICSE Class 10 board examinations in Jaipur, reflecting strong academic consistency and dedication.',
    year: '2022',
  }
]
