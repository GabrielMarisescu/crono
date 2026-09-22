export type SidebarItem = {
  label: string
  icon: string
  iconSrc?: string
  href: string
  active?: boolean
  badge?: string
  hasMenu?: boolean
}

export type ReplyAvatar = {
  backgroundColor: string
  color: string
  imageSrc: string
  label: string
  text: string
}

export enum TaskStatusTone {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow',
}

export type TaskStatus = {
  count: number
  errorLabel?: string
  label: string
  tone: TaskStatusTone
}

export enum PerformanceMetricAccent {
  Contacts = 'contacts',
  Companies = 'companies',
  Activities = 'activities',
  Deals = 'deals',
  Green = 'green',
  Meetings = 'meetings',
}

export type PerformanceMetric = {
  accent: PerformanceMetricAccent
  current: string
  iconSrc?: string
  iconText?: string
  label: string
  progress: number
  total: string
}

export type OnboardingStep = {
  duration: string
  iconSrc: string
  label: string
}

export const dashboardMockData = {
  welcome: {
    title: 'Welcome Alex,',
    description:
      "Here's your performance overview where you can track your daily and monthly KPIs",
  },
  replies: {
    title: 'Replies',
    ctaLabel: 'Open inbox',
    count: 24,
    iconSrc: '/static/sidebar-icons/icon-06.svg',
    avatars: [
      {
        label: 'Reddit',
        text: 'r',
        backgroundColor: '#ff4500',
        color: '#ffffff',
        imageSrc: '/static/sidebar-icons/reply-avatar-reddit.svg',
      },
      {
        label: 'Dark channel',
        text: '',
        backgroundColor: '#17243b',
        color: '#ffffff',
        imageSrc: '/static/sidebar-icons/reply-avatar-dark-channel.svg',
      },
      {
        label: 'McDonalds',
        text: 'M',
        backgroundColor: '#ffffff',
        color: '#f9bb06',
        imageSrc: '/static/sidebar-icons/reply-avatar-mcdonalds.svg',
      },
      {
        label: 'Medium',
        text: 'M',
        backgroundColor: '#111111',
        color: '#ffffff',
        imageSrc: '/static/sidebar-icons/reply-avatar-medium.svg',
      },
    ] satisfies ReplyAvatar[],
  },
  todayTasks: {
    chevronSrc: '/static/sidebar-icons/task-chevron.svg',
    errorIconSrc: '/static/sidebar-icons/task-error.svg',
    title: "Today's tasks",
    statuses: [
      { count: 3, label: 'Overdue', tone: TaskStatusTone.Red },
      { count: 10, label: 'Pending Manual', tone: TaskStatusTone.Yellow },
      { count: 20, label: 'Pending Auto', tone: TaskStatusTone.Blue, errorLabel: '1 error' },
      { count: 8, label: 'Completed', tone: TaskStatusTone.Green },
    ] satisfies TaskStatus[],
  },
  performance: {
    editIconSrc: '/static/sidebar-icons/edit-kpis.svg',
    editLabel: 'Edit KPIs',
    metrics: [
      { accent: PerformanceMetricAccent.Contacts, current: '0', iconSrc: '/static/sidebar-icons/performance-contacts.svg', label: 'Contacts engaged', progress: 0, total: '500' },
      { accent: PerformanceMetricAccent.Companies, current: '0', iconSrc: '/static/sidebar-icons/performance-companies.svg', label: 'Companies engaged', progress: 0, total: '500' },
      { accent: PerformanceMetricAccent.Activities, current: '1000', iconSrc: '/static/sidebar-icons/performance-activities.svg', label: 'Activities', progress: 50, total: '2000' },
      { accent: PerformanceMetricAccent.Meetings, current: '20', iconSrc: '/static/sidebar-icons/performance-meetings.svg', label: 'Meetings', progress: 67, total: '30' },
      { accent: PerformanceMetricAccent.Deals, current: '100', iconSrc: '/static/sidebar-icons/performance-deals.svg', label: 'Deals', progress: 50, total: '200' },
      { accent: PerformanceMetricAccent.Green, current: '50K', iconText: '€', label: 'Pipeline', progress: 50, total: '100K' },
    ] satisfies PerformanceMetric[],
    title: 'May’s performance',
  },
  onboarding: {
    steps: [
      { duration: '5 min', iconSrc: '/static/sidebar-icons/onboarding-integrations.svg', label: 'Integrations Setup' },
      { duration: '5 min', iconSrc: '/static/sidebar-icons/onboarding-add-contact.svg', label: 'Add new Contact' },
      { duration: '10 min', iconSrc: '/static/sidebar-icons/onboarding-target-goal.svg', label: 'Create your first sequence' },
      { duration: '5 min', iconSrc: '/static/sidebar-icons/onboarding-add-to-sequence.svg', label: 'Add contacts to sequence' },
      { duration: '10 min', iconSrc: '/static/sidebar-icons/onboarding-run-task.svg', label: 'Run your first task' },
    ] satisfies OnboardingStep[],
    title: 'Onboarding',
  },
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
