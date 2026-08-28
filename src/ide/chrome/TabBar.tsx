'use client'

import { ChevronRight, Copy, ExternalLink, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useIde } from '../IdeProvider'
import { FileIcon } from '../FileIcon'
import { fileById, type FileId } from '../registry'
import { profile } from '@/content/profile'

export function TabBar() {
  const { state, dispatch } = useIde()
  const [menu, setMenu] = useState<{ id: FileId; x: number; y: number } | null>(null)

  useEffect(() => {
    if (!menu) return
    const close = () => setMenu(null)
    const escape = (event: KeyboardEvent) => event.key === 'Escape' && close()
    window.addEventListener('click', close)
    window.addEventListener('keydown', escape)
    return () => {
      window.removeEventListener('click', close)
      window.removeEventListener('keydown', escape)
    }
  }, [menu])

  const showMenu = (event: React.MouseEvent, id: FileId) => {
    event.preventDefault()
    event.stopPropagation()
    setMenu({ id, x: Math.min(event.clientX, window.innerWidth - 230), y: event.clientY })
  }

  const copyPath = (id: FileId, relative = false) => {
    const file = fileById(id)
    if (!file) return
    const path = relative ? `${file.folder === '.' ? '' : `${file.folder}/`}${file.name}` : `/${file.folder === '.' ? file.name : `${file.folder}/${file.name}`}`
    void navigator.clipboard?.writeText(path)
    setMenu(null)
  }

  return (
    <div className="ide-scroll-none flex h-[30px] shrink-0 items-stretch overflow-x-auto bg-panel">
      {state.tabs.map((id) => {
        const file = fileById(id)
        if (!file) return null
        const active = state.activeTab === id

        return (
          <div
            key={id}
            onDoubleClick={(event) => showMenu(event, id)}
            onContextMenu={(event) => showMenu(event, id)}
            className={`group relative flex shrink-0 items-center gap-2 border-r border-line pr-1.5 pl-3 text-[11px] transition-colors ${
              active ? 'bg-bg text-fg-strong' : 'bg-panel text-dim hover:text-fg'
            }`}
          >
            {/* Active tab gets the accent top rule, same as the editor. */}
            {active && <span className="absolute inset-x-0 top-0 h-px bg-accent" />}
            <button
              type="button"
              onClick={() => dispatch({ type: 'OPEN', id })}
              className="flex items-center gap-2 py-1"
            >
              <FileIcon kind={file.icon} className="h-3.5 w-3.5" />
              {file.name}
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: 'CLOSE', id })}
              aria-label={`Close ${file.name}`}
              className={`rounded p-0.5 transition-opacity hover:bg-surface-hi ${
                active ? 'opacity-70' : 'opacity-0 group-hover:opacity-70'
              }`}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )
      })}
      {menu && (
        <div
          role="menu"
          className="fixed z-50 w-56 overflow-hidden rounded-md border border-line bg-panel py-1 text-xs shadow-2xl shadow-black/60"
          style={{ left: menu.x, top: menu.y }}
          onClick={(event) => event.stopPropagation()}
        >
          <TabMenuItem label="Close" onClick={() => { dispatch({ type: 'CLOSE', id: menu.id }); setMenu(null) }} />
          <TabMenuItem label="Close Others" onClick={() => { dispatch({ type: 'CLOSE_OTHERS', id: menu.id }); setMenu(null) }} />
          <TabMenuItem label="Close to the Right" onClick={() => { dispatch({ type: 'CLOSE_TO_RIGHT', id: menu.id }); setMenu(null) }} />
          <TabMenuItem label="Close All Tabs" onClick={() => { dispatch({ type: 'CLOSE_ALL' }); setMenu(null) }} />
          <div className="my-1 border-t border-line" />
          <TabMenuItem icon={<Copy className="h-3.5 w-3.5" />} label="Copy Relative Path" onClick={() => copyPath(menu.id, true)} />
          <TabMenuItem icon={<Copy className="h-3.5 w-3.5" />} label="Copy Path" onClick={() => copyPath(menu.id)} />
          <TabMenuItem icon={<ExternalLink className="h-3.5 w-3.5" />} label="Open in New Window" onClick={() => { window.open(window.location.href, '_blank', 'noopener,noreferrer'); setMenu(null) }} />
        </div>
      )}
    </div>
  )
}

function TabMenuItem({
  label,
  onClick,
  icon,
}: {
  label: string
  onClick: () => void
  icon?: React.ReactNode
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-dim hover:bg-surface-hi hover:text-fg-strong"
    >
      <span className="flex w-4 items-center justify-center">{icon}</span>
      {label}
    </button>
  )
}

export function Breadcrumb() {
  const { state } = useIde()
  const file = state.activeTab ? fileById(state.activeTab) : null
  if (!file) return null

  const crumbs = [profile.handle, ...(file.folder === '.' ? [] : [file.folder])]

  return (
    <div className="flex h-[26px] shrink-0 items-center gap-1 bg-bg px-4 text-[11px] text-dim">
      {crumbs.map((c) => (
        <span key={c} className="flex items-center gap-1">
          {c}
          <ChevronRight className="h-3 w-3" />
        </span>
      ))}
      <span className="flex items-center gap-1.5 text-fg">
        <FileIcon kind={file.icon} className="h-3 w-3" />
        {file.name}
      </span>
    </div>
  )
}
