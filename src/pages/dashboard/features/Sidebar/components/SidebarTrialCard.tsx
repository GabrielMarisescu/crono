type SidebarTrial = {
  cta: string
  drawingSrc: string
  iconSrc: string
  label: string
}

type SidebarTrialCardProps = {
  isCollapsed: boolean
  trial: SidebarTrial
}

export function SidebarTrialCard({
  isCollapsed,
  trial,
}: SidebarTrialCardProps) {
  return (
    <div
      className={[
        'relative mx-2 mt-3 overflow-hidden rounded-lg bg-crono-yellow-light px-2.5 py-3 text-crono-dark',
        isCollapsed ? 'hidden' : '',
      ].join(' ')}
    >
      <span
        aria-hidden="true"
        className="absolute -right-1 bottom-0 h-16 w-11 bg-crono-yellow opacity-80 mask-center mask-no-repeat mask-contain"
        style={{
          WebkitMaskImage: `url(${trial.drawingSrc})`,
          maskImage: `url(${trial.drawingSrc})`,
        }}
      />
      <p className="relative text-sm font-semibold leading-5">{trial.label}</p>
      <button
        className="relative mt-2 inline-flex h-8 items-center gap-1.5 rounded-md bg-crono-yellow px-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:brightness-95"
        type="button"
      >
        {trial.cta}
        <img
          alt=""
          aria-hidden="true"
          className="h-3.5 w-3.5"
          src={trial.iconSrc}
        />
      </button>
    </div>
  )
}
