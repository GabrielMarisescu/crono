import { Link } from 'react-router'
import type { SidebarItem } from '../../../dashboardMockData'
import { IconSlot } from './IconSlot'

type SidebarNavItemProps = SidebarItem & {
  analyticsChevronSrc: string
  isCollapsed: boolean
}

export function SidebarNavItem({
  active,
  analyticsChevronSrc,
  badge,
  hasMenu,
  href,
  icon,
  iconSrc,
  isCollapsed,
  label,
}: SidebarNavItemProps) {
  return (
    <Link
      aria-label={label}
      className={[
        'group relative flex h-12 items-center gap-3 rounded-none text-sm font-medium transition-colors',
        isCollapsed ? 'justify-center px-0' : 'px-4',
        active
          ? 'text-crono-teal'
          : 'text-crono-gray hover:bg-[#f5f9fb] hover:text-crono-dark',
      ].join(' ')}
      to={href}
    >
      {active ? (
        <span className="absolute left-0 top-1/2 h-9 w-0.75 -translate-y-1/2 rounded-r-full bg-crono-teal" />
      ) : null}
      <IconSlot active={active} name={icon} src={iconSrc} />
      <span
        className={[
          'min-w-0 flex-1 truncate',
          isCollapsed ? 'hidden' : '',
        ].join(' ')}
      >
        {label}
      </span>
      {badge ? (
        <span
          className={[
            'rounded-full bg-crono-yellow px-2.5 py-1 text-sm font-bold leading-none text-white',
            isCollapsed ? 'hidden' : '',
          ].join(' ')}
        >
          {badge}
        </span>
      ) : null}
      {hasMenu && !isCollapsed ? (
        <img
          alt=""
          aria-hidden="true"
          className="h-3 w-3 shrink-0"
          src={analyticsChevronSrc}
        />
      ) : null}
    </Link>
  )
}
