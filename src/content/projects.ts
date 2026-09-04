/** Maps to a theme colour slot so every card reads as its own accent. */
export type ProjectTone = 'purple' | 'orange' | 'green' | 'blue' | 'pink' | 'yellow'

export interface Project {
  id: string
  emoji: string
  title: string
  tags: string[]
  tone: ProjectTone
  description: string
  highlights: [string, string]
  techStack: string[]
  githubUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'vakformer',
    emoji: '🌊',
    title: 'VAK-Former',
    tags: ['Computer Vision', 'Semantic Segmentation', 'Research'],
    tone: 'purple',
    description:
      'A Swin-L based Mask2Former-style framework for semantic segmentation in autonomous maritime USV inspection.',
    highlights: [
      'Achieved 97.71% F1-score on the LaRS maritime dataset',
      'Reached 12.33 FPS using a Swin-L backbone',
    ],
    techStack: ['PyTorch', 'Swin-L', 'Mask2Former', 'MMCV', 'MMDetection', 'MMSegmentation'],
    githubUrl: 'https://github.com/VAK-Former/VAK-Former',
    demoUrl: 'https://zenodo.org/records/19482302',
  },
  {
    id: 'steel',
    emoji: '🏭',
    title: 'Steel Surface Micro-Crack Detection',
    tags: ['Deep Learning', 'Computer Vision', 'Explainable AI'],
    tone: 'orange',
    description:
      'A two-stage pipeline combining ResNet18 classification, U-Net segmentation, and Grad-CAM for steel surface crack inspection.',
    highlights: [
      'ResNet18 classification reached 99.28% accuracy and 0.988 ROC-AUC',
      'U-Net segmentation reached a validation Dice score of approximately 0.71',
    ],
    techStack: ['PyTorch', 'ResNet18', 'U-Net', 'OpenCV', 'Grad-CAM', 'ONNX', 'FastAPI'],
    githubUrl: 'https://github.com/AnirudhPhophalia/Steel-surface-micro-crack-detection-using-CNN-and-explainable-AI',
  },
  {
    id: 'medinternia',
    emoji: '🩺',
    title: 'MedInternia',
    tags: ['Full Stack', 'Healthcare', 'Open Source'],
    tone: 'green',
    description:
      'A medical education and collaboration platform for doctors, interns, students, and patients.',
    highlights: [
      'Supports case-based learning, peer review, medical jobs, webinars, and user profiles',
      'Selected among the Top 50 projects in GSSoC 2026 with 110 contributors',
    ],
    techStack: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/AnirudhPhophalia/MedInternia',
    demoUrl: 'https://medinternia.vercel.app/',
  },
  {
    id: 'invoicesnap',
    emoji: '🧾',
    title: 'InvoiceSnap',
    tags: ['Full Stack', 'AI/OCR', 'Analytics'],
    tone: 'blue',
    description:
      'A full-stack AI invoice management system with OCR extraction, anomaly-aware review, GST reporting, and analytics.',
    highlights: [
      'Uses digital PDF parsing, Gemini extraction, and local OCR fallback',
      'Includes vendor risk scoring, duplicate detection, batch extraction, and GST exports',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Tesseract.js'],
    githubUrl: 'https://github.com/AnirudhPhophalia/InvoiceSnap',
  },
]
