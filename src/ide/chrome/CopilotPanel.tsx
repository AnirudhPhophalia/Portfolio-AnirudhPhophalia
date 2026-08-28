'use client'

import { Bot, Copy, ExternalLink, Send, ThumbsDown, ThumbsUp, Trash2, X } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { useIde } from '../IdeProvider'
import { links, profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { skillGroups } from '@/content/skills'

type Message = { role: 'assistant' | 'user'; text: string }

const suggestions = [
  'Tell me about Anirudh',
  'What projects has Anirudh built?',
  "What's his tech stack?",
  'Tell me about his work experience',
  'How can I contact Anirudh?',
  'Can I see his resume?',
]

function answerFor(question: string) {
  const query = question.toLowerCase()
  if (query.includes('project')) {
    return `Anirudh has built ${projects.length}+ notable projects, including ${projects.map((project) => project.title).join(', ')}. His work spans computer vision research, AI/OCR, healthcare, and full-stack products.`
  }
  if (query.includes('skill') || query.includes('stack') || query.includes('tech')) {
    return `His toolkit includes ${skillGroups.slice(0, 4).flatMap((group) => group.items.slice(0, 3)).join(', ')}, plus AWS, Docker, Git, OpenCV, and more.`
  }
  if (query.includes('experience') || query.includes('work') || query.includes('intern')) {
    return `He is currently a Samsung PRISM Project Intern working on multimodal privacy scanning. He has also researched SDR-based drone detection at DRDO, built Angular products at Cambiante, and contributed to the Backslash Computing Society.`
  }
  if (query.includes('contact') || query.includes('email') || query.includes('reach')) {
    return `You can reach Anirudh at ${links.email}, or connect with him on LinkedIn. His GitHub has the source for his projects.`
  }
  if (query.includes('resume') || query.includes('cv')) {
    return 'His resume is available from the document icon in the activity bar, or the Resume button below.'
  }
  return `${profile.title} based in ${profile.location}. ${profile.intro.replaceAll('**', '')}`
}

export function CopilotPanel() {
  const { dispatch } = useIde()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  const send = (event?: FormEvent, value = input) => {
    event?.preventDefault()
    const question = value.trim()
    if (!question) return
    setMessages((current) => [
      ...current,
      { role: 'user', text: question },
      { role: 'assistant', text: answerFor(question) },
    ])
    setInput('')
  }

  const close = () => dispatch({ type: 'OVERLAY', overlay: null })
  const followUps = messages.length ? suggestions.slice(0, 4) : []

  return (
    <div className="fixed inset-0 z-[55] bg-black/30" onClick={close}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Anirudh's AI Assistant"
        className="copilot-in absolute top-0 right-0 flex h-full w-full max-w-[360px] flex-col border-l border-line bg-panel shadow-2xl shadow-black/60"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex h-11 shrink-0 items-center gap-2 border-b border-line px-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent-2">
            <Bot className="h-4 w-4" />
          </span>
          <strong className="flex-1 text-xs text-fg-strong">Anirudh&apos;s AI Assistant</strong>
          <button type="button" title="Clear chat" aria-label="Clear chat" onClick={() => setMessages([])} className="p-1 text-faint hover:text-fg">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
          <button type="button" title="Close assistant" aria-label="Close assistant" onClick={close} className="p-1 text-faint hover:text-fg">
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="border-b border-line px-3 py-2">
          <span className="inline-flex items-center gap-1.5 rounded border border-accent/30 bg-accent/10 px-2 py-1 text-[10px] text-accent-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" /> portfolio · anirudh-phophalia
          </span>
        </div>

        <div className="ide-scroll flex-1 overflow-y-auto px-3 py-7">
          {!messages.length ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/50 bg-accent/15 text-accent-2 shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_25%,transparent)]">
                <Bot className="h-7 w-7" />
              </div>
              <h2 className="text-sm font-bold text-fg-strong">Hi! I&apos;m Anirudh&apos;s Copilot 👋</h2>
              <p className="mx-auto mt-2 max-w-[270px] text-[11px] leading-5 text-dim">Ask me anything about his projects, skills, experience, or achievements.</p>
              <div className="mt-4 grid grid-cols-2 gap-1.5 text-left">
                {suggestions.map((suggestion) => (
                  <button key={suggestion} type="button" onClick={() => send(undefined, suggestion)} className="min-h-12 rounded-md border border-line bg-surface px-2.5 py-2 text-[10px] leading-4 text-dim transition-colors hover:border-accent/50 hover:bg-surface-hi hover:text-fg">
                    <span className="mr-1 text-accent">✦</span>{suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className="group">
                  <div className="mb-1.5 flex items-center gap-2 text-[10px] text-dim">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${message.role === 'user' ? 'bg-accent text-white' : 'border border-accent/40 bg-accent/15 text-accent-2'}`}>
                      {message.role === 'user' ? <span className="text-[10px]">●</span> : <Bot className="h-3 w-3" />}
                    </span>
                    <span>{message.role === 'user' ? 'You' : "Anirudh's Copilot"}</span>
                  </div>
                  <div className={message.role === 'user' ? 'ml-8 rounded-md bg-[#2d3748] px-3 py-2 text-xs leading-5 text-fg-strong' : 'ml-8 rounded-md border border-line bg-surface/80 px-3 py-2 text-xs leading-5 text-fg'}>
                    {message.text}
                  </div>
                  {message.role === 'assistant' && (
                    <div className="ml-8 mt-1 flex gap-2 text-faint opacity-70 transition-opacity group-hover:opacity-100">
                      <button type="button" title="Helpful" aria-label="Helpful" className="hover:text-fg"><ThumbsUp className="h-3 w-3" /></button>
                      <button type="button" title="Not helpful" aria-label="Not helpful" className="hover:text-fg"><ThumbsDown className="h-3 w-3" /></button>
                      <button type="button" title="Copy response" aria-label="Copy response" onClick={() => void navigator.clipboard?.writeText(message.text)} className="hover:text-fg"><Copy className="h-3 w-3" /></button>
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-line pt-3">
                <div className="mb-2 text-[10px] text-faint">Suggested questions</div>
                <div className="flex flex-wrap gap-1.5">
                  {followUps.map((suggestion) => (
                    <button key={suggestion} type="button" onClick={() => send(undefined, suggestion)} className="rounded-full border border-line bg-surface px-2.5 py-1 text-[10px] text-dim hover:border-accent/50 hover:text-fg">✦ {suggestion}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="shrink-0 border-t border-line p-2">
          <form onSubmit={send} className="flex items-end gap-2 rounded-md border border-line bg-surface px-2 py-2 focus-within:border-accent/60">
            <textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); send() } }} rows={2} placeholder="Ask about Anirudh's projects, experience, skills..." className="min-h-9 flex-1 resize-none bg-transparent text-xs leading-5 text-fg outline-none placeholder:text-faint" />
            <button type="submit" title="Send message" aria-label="Send message" disabled={!input.trim()} className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-accent text-white transition-opacity disabled:opacity-30"><Send className="h-3.5 w-3.5" /></button>
          </form>
          <div className="flex items-center justify-between px-1 pt-1 text-[10px] text-faint"><span>{messages.length ? '2 messages left' : 'Local portfolio assistant'}</span><a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-fg">LinkedIn <ExternalLink className="h-2.5 w-2.5" /></a></div>
        </div>
      </aside>
    </div>
  )
}
