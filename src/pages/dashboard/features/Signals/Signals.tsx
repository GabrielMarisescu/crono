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

  return (
    <section className="rounded-2xl border border-crono-border bg-white shadow-[0_1px_2px_rgba(1,14,39,0.02)] xl:col-span-2 xl:col-start-1 xl:min-h-130 xl:row-start-3">
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2">
          <h2 className="text-[14px] font-bold leading-5 text-crono-dark">{title}</h2>
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-crono-yellow px-1.5 text-[12px] font-bold text-white">
            {count}
          </span>
        </div>
        <p className="mt-1 text-[14px] leading-6 text-crono-gray">{description}</p>
      </div>

      <div className="mt-2 max-h-127.5 overflow-y-auto px-1">
        {items.map((item, index) => (
          <SignalRow
            avatarSrc={avatarSrc}
            completeIconSrc={completeIconSrc}
            deleteIconSrc={deleteIconSrc}
            isActionMenuOpen={activeSignalId === `${item.description}-${index}`}
            onActionToggle={(isOpen) => {
              setActiveSignalId(isOpen ? `${item.description}-${index}` : null)
            }}
            {...item}
            key={`${item.description}-${index}`}
          />
        ))}
      </div>
    </section>
  )
}
