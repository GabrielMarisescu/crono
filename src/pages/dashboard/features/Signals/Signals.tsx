import { useState } from 'react'
import type { Signal } from '../../dashboardMockData'
import { SignalRow } from './components/SignalRow'

type SignalsProps = {
  avatarSrc: string
  completeIconSrc: string
  count: number
  deleteIconSrc: string
  description: string
  items: Signal[]
  title: string
}

export function Signals({ avatarSrc, completeIconSrc, count, deleteIconSrc, description, items, title }: SignalsProps) {
  const [activeSignalId, setActiveSignalId] = useState<string | null>(null)
  const [completedSignalIds, setCompletedSignalIds] = useState<Set<string>>(new Set())
  const [deletedSignalIds, setDeletedSignalIds] = useState<Set<string>>(new Set())
  const unreadCount = Math.max(0, count - completedSignalIds.size - deletedSignalIds.size)

  return (
    <section className="rounded-2xl border border-crono-border bg-white shadow-[0_1px_2px_rgba(1,14,39,0.02)] xl:col-span-2 xl:col-start-1 xl:min-h-130 xl:row-start-3">
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2">
          <h2 className="text-[14px] font-bold leading-5 text-crono-dark">{title}</h2>
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-crono-yellow px-1.5 text-[12px] font-bold text-white">
            {unreadCount}
          </span>
        </div>
        <p className="mt-1 text-[14px] leading-6 text-crono-gray">{description}</p>
      </div>

      <div className="mt-2 max-h-127.5 overflow-y-auto px-1">
        {items.map((item, index) => {
          const signalId = `${item.description}-${index}`

          if (completedSignalIds.has(signalId) || deletedSignalIds.has(signalId)) {
            return null
          }

          return (
          <SignalRow
            avatarSrc={avatarSrc}
            completeIconSrc={completeIconSrc}
            deleteIconSrc={deleteIconSrc}
            isActionMenuOpen={activeSignalId === signalId}
            onActionToggle={(isOpen) => {
              setActiveSignalId(isOpen ? signalId : null)
            }}
            onResolve={(resolution) => {
              if (resolution === 'completed') {
                setCompletedSignalIds((currentIds) => new Set(currentIds).add(signalId))
              } else {
                setDeletedSignalIds((currentIds) => new Set(currentIds).add(signalId))
              }
              setActiveSignalId(null)
            }}
            {...item}
            key={signalId}
          />
          )
        })}
      </div>
    </section>
  )
}
