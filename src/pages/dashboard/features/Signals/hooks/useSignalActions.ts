import { useState } from 'react'
import type { Signal } from '../../../mocks/dashboardMockData'
import { SignalResolution } from '../types'

type SignalEntry = {
  id: string
  item: Signal
}

export function useSignalActions(count: number, items: Signal[]) {
  const [completedSignalIds, setCompletedSignalIds] = useState<Set<string>>(new Set())
  const [deletedSignalIds, setDeletedSignalIds] = useState<Set<string>>(new Set())

  const entries: SignalEntry[] = items.map((item, index) => ({
    id: `${item.description}-${index}`,
    item,
  }))
  const visibleSignals = entries.filter(
    ({ id }) => !completedSignalIds.has(id) && !deletedSignalIds.has(id),
  )

  function resolveSignal(signalId: string, resolution: SignalResolution) {
    if (resolution === SignalResolution.Completed) {
      setCompletedSignalIds((currentIds) => new Set(currentIds).add(signalId))
      return
    }

    if (resolution === SignalResolution.Deleted) {
      setDeletedSignalIds((currentIds) => new Set(currentIds).add(signalId))
    }
  }

  return {
    resolveSignal,
    unreadCount: Math.max(0, count - completedSignalIds.size - deletedSignalIds.size),
    visibleSignals,
  }
}
