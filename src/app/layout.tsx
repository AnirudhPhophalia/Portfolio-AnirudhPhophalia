import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Syne } from 'next/font/google'
import './globals.css'

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
})

// Syne 700/800 for display type — the pairing the reference IDE uses.
const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/AnirudhPhophalia'),
  // Browser-tab title; the longer positioning line lives in openGraph below.
  title: 'Anirudh Phophalia | Portfolio',
  description:
    'Portfolio of Anirudh Phophalia, built as a code editor. Computer Science and Data Science student working on machine learning, computer vision, and full-stack applications.',
  keywords: [
    'Anirudh Phophalia',
    'AI ML Engineer',
    'Full Stack Developer',
    'Agentic AI',
    'Next.js',
    'Thapar Institute',
  ],
  authors: [{ name: 'Anirudh Phophalia' }],
  creator: 'Anirudh Phophalia',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://github.com/AnirudhPhophalia',
    siteName: 'Anirudh Phophalia — Portfolio',
    title: 'Anirudh Phophalia — AI/ML Engineer & Full Stack Developer',
    description:
      'A portfolio that opens like a code editor: every section is a file you can open in a tab.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anirudh Phophalia — AI/ML Engineer & Full Stack Developer',
    description:
      'A portfolio that opens like a code editor: every section is a file you can open in a tab.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  colorScheme: 'dark',
}

const THEME_INIT = `try{var t=localStorage.getItem('ide.theme');var v=['arnav-dark','rose-pine','tokyo-night','catppuccin','nord','gruvbox'];document.documentElement.dataset.theme=v.indexOf(t)>-1?t:'arnav-dark'}catch(e){document.documentElement.dataset.theme='arnav-dark'}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="arnav-dark"
      className={`${jetbrains.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Anirudh Phophalia',
              url: 'https://github.com/AnirudhPhophalia',
              jobTitle: 'AI/ML Engineer & Full Stack Developer',
              sameAs: [
                'https://github.com/AnirudhPhophalia',
                'https://www.linkedin.com/in/anirudh-phophalia',
                'https://www.kaggle.com/anirudhphophalia',
                'https://x.com/aniphophalia',
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Thapar Institute of Engineering and Technology',
              },
              knowsAbout: [
                'Machine Learning',
                'Computer Vision',
                'Deep Learning',
                'OCR',
                'Angular',
                'Python',
                'PyTorch',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
