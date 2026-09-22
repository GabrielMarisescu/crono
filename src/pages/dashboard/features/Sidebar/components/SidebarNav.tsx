import type { SidebarItem } from '../../../mocks/dashboardMockData'
import { SidebarNavItem } from './SidebarNavItem'

type SidebarNavProps = {
  analyticsChevronSrc: string
  isCollapsed: boolean
  items: SidebarItem[]
}

export function SidebarNav({
  analyticsChevronSrc,
  isCollapsed,
  items,
}: SidebarNavProps) {
  return (
    <nav aria-label="Main navigation" className="flex flex-col gap-3 py-1">
      {items.map((item) => (
        <SidebarNavItem
          key={item.label}
          analyticsChevronSrc={analyticsChevronSrc}
          isCollapsed={isCollapsed}
          {...item}
        />
      ))}
    </nav>
  )
}
