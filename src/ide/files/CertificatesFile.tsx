import { ExternalLink } from 'lucide-react'
import { FileHeading, Tagline, TechPill } from './parts'
import { certificates } from '@/content/certificates'

const groups = [
  {
    title: 'Certificates',
    entries: certificates.filter((c) => !['Google Skills Profile — Gold League', 'Credly Skills Profile', 'Holopin Profile'].includes(c.title)),
  },
  {
    title: 'Profiles & Badges',
    entries: certificates.filter((c) => ['Google Skills Profile — Gold League', 'Credly Skills Profile', 'Holopin Profile'].includes(c.title)),
  },
]

export function CertificatesFile() {
  return (
    <>
      <Tagline syntax="hash">certificates.png — credentials & proof</Tagline>

      <FileHeading
        title="Certificates"
        sub={<span className="font-mono">const credentials = [ ...proof, ...profiles ]</span>}
      />

      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.title} className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-bold text-fg-strong">{group.title}</h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                {group.entries.length} items
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {group.entries.map((certificate, index) => (
                <article
                  key={`${group.title}-${certificate.title}`}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className="rise-item group relative flex flex-col overflow-hidden rounded-lg border border-line bg-panel p-5 transition-colors hover:border-accent/60"
                >
                  <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" aria-hidden="true" />

                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {group.title === 'Profiles & Badges' ? '🏅' : '📜'}
                    </span>
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded border border-line bg-surface px-2 py-1 text-[11px] text-dim transition-colors hover:border-accent hover:text-fg-strong"
                    >
                      Open
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                    </a>
                  </div>

                  <p className="mb-2 text-[11px] tracking-[0.16em] uppercase text-c-blue">
                    {certificate.issuer}
                  </p>

                  <h3 className="font-display text-xl leading-tight font-bold text-fg-strong">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-[12px] font-mono text-faint">{certificate.issueDate}</p>

                  <p className="mt-3 text-[13px] leading-6 text-dim">{certificate.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <TechPill>{group.title === 'Profiles & Badges' ? 'Profile' : 'Certificate'}</TechPill>
                    <TechPill>{certificate.issuer}</TechPill>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
