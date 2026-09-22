import { useState } from 'react'
import type { DashboardData } from '../../api/dashboardApi'
import { SidebarLogo } from './components/SidebarLogo'
import { SidebarNav } from './components/SidebarNav'
import { SidebarTrialCard } from './components/SidebarTrialCard'
import { SidebarUser } from './components/SidebarUser'
import { useIsCompactViewport } from './components/useIsCompactViewport'

type SidebarProps = {
  data: DashboardData['sidebar']
}

export function Sidebar({ data }: SidebarProps) {
  const [isManuallyCollapsed, setIsManuallyCollapsed] = useState(false)
  const isCompactViewport = useIsCompactViewport()
  const isCollapsed = isCompactViewport || isManuallyCollapsed
  const {
    analyticsChevronSrc,
    brand,
    collapseChevronSrc,
    navItems,
    trial,
    user,
  } = data

  return (
    <aside
      className={[
        'flex min-h-screen flex-col border-r border-crono-border bg-white transition-[width] duration-200 ease-out',
        isCollapsed ? 'w-17' : 'w-52',
      ].join(' ')}
    >
      <div className="flex w-full flex-1 flex-col">
        <div
          className={[
            'relative flex h-17.5 items-center px-4',
            isCollapsed ? 'justify-center px-0' : 'justify-between',
          ].join(' ')}
        >
          <SidebarLogo brand={brand} isCollapsed={isCollapsed} />
          <button
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-pressed={isCollapsed}
            className={[
              'flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] text-[#9aa6ba] transition-colors hover:bg-[#eaf0f7] hover:text-[#536078]',
              isCompactViewport ? 'hidden' : '',
              isCollapsed ? 'absolute -right-3 top-6' : '',
            ].join(' ')}
            onClick={() => {
              setIsManuallyCollapsed((currentValue) => !currentValue)
            }}
            type="button"
          >
            <img
              alt=""
              aria-hidden="true"
              className={[
                'transition-transform',
                isCollapsed ? 'h-7 w-7 rotate-180' : 'h-5 w-5',
              ].join(' ')}
              src={collapseChevronSrc}
            />
          </button>
        </div>

        <SidebarNav
          analyticsChevronSrc={analyticsChevronSrc}
          isCollapsed={isCollapsed}
          items={navItems}
        />

        <SidebarTrialCard isCollapsed={isCollapsed} trial={trial} />
      </div>

      <SidebarUser isCollapsed={isCollapsed} user={user} />
    </aside>
  )
}
