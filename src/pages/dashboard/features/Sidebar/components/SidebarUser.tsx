type SidebarUserData = {
  iconSrc: string
  name: string
  role: string
}

type SidebarUserProps = {
  isCollapsed: boolean
  user: SidebarUserData
}

export function SidebarUser({ isCollapsed, user }: SidebarUserProps) {
  return (
    <div>
      <div
        className={[
          'flex h-16.5 items-center gap-3 border-t border-crono-border px-3',
          isCollapsed ? 'justify-center px-0' : '',
        ].join(' ')}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dbe6f6] text-white">
          <img
            alt=""
            aria-hidden="true"
            className="h-5 w-5"
            src={user.iconSrc}
          />
        </div>
        <div className={['min-w-0', isCollapsed ? 'hidden' : ''].join(' ')}>
          <p className="truncate text-sm font-medium text-crono-dark">
            {user.name}
          </p>
          <p className="text-sm text-crono-gray">{user.role}</p>
        </div>
      </div>
    </div>
  )
}
