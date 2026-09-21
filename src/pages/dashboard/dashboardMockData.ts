export type SidebarItem = {
  label: string
  icon: string
  iconSrc?: string
  href: string
  active?: boolean
  badge?: string
  hasMenu?: boolean
}

export const dashboardMockData = {
  sidebar: {
    brand: {
      name: 'crono',
      href: '/dashboard',
      logoSrc: '/static/sidebar-icons/crono-logo.svg',
      logoMarkSrc: '/static/sidebar-icons/crono-logo-mark.svg',
    },
    navItems: [
      {
        label: 'Dashboard',
        icon: 'dashboard',
        iconSrc: '/static/sidebar-icons/icon-01.svg',
        href: '/dashboard',
        active: true,
      },
      {
        label: 'Find New',
        icon: 'find-new',
        iconSrc: '/static/sidebar-icons/icon-02.svg',
        href: '/dashboard',
      },
      {
        label: 'Lists',
        icon: 'lists',
        iconSrc: '/static/sidebar-icons/lists.svg',
        href: '/dashboard',
      },
      {
        label: 'Templates',
        icon: 'templates',
        iconSrc: '/static/sidebar-icons/templates.svg',
        href: '/dashboard',
      },
      {
        label: 'Sequences',
        icon: 'sequences',
        iconSrc: '/static/sidebar-icons/icon-05.svg',
        href: '/dashboard',
      },
      {
        label: 'Tasks',
        icon: 'tasks',
        iconSrc: '/static/sidebar-icons/tasks.svg',
        href: '/dashboard',
      },
      {
        label: 'Inbox',
        icon: 'inbox',
        iconSrc: '/static/sidebar-icons/icon-06.svg',
        href: '/dashboard',
        badge: '24',
      },
      {
        label: 'Deals',
        icon: 'deals',
        iconSrc: '/static/sidebar-icons/icon-07.svg',
        href: '/dashboard',
      },
      {
        label: 'Analytics',
        icon: 'analytics',
        iconSrc: '/static/sidebar-icons/icon-08.svg',
        href: '/dashboard',
        hasMenu: true,
      },
    ] satisfies SidebarItem[],
    trial: {
      label: 'Trial ends in 2 days',
      cta: 'Upgrade plan',
      iconSrc: '/static/sidebar-icons/upgrade-gift.svg',
      drawingSrc: '/static/sidebar-icons/trial-drawing.png',
    },
    analyticsChevronSrc: '/static/sidebar-icons/analytics-chevron.svg',
    collapseChevronSrc: '/static/sidebar-icons/collapse-chevron.svg',
    user: {
      name: 'William Robertson',
      role: 'Sales',
      iconSrc: '/static/sidebar-icons/user-icon.svg',
    },
  },
}
