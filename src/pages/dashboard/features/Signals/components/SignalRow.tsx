import type { Signal } from '../../../dashboardMockData'

type SignalRowProps = Signal & {
  avatarSrc: string
  completeIconSrc: string
  deleteIconSrc: string
  isActionMenuOpen: boolean
  onActionToggle: (isOpen: boolean) => void
  onResolve: (resolution: 'completed' | 'deleted') => void
}

const categoryClasses: Record<Signal['category'], string> = {
  company: 'text-crono-blue',
  role: 'text-[#8846dc]',
  website: 'text-[#e769cb]',
}

export function SignalRow({ avatarSrc, category, completeIconSrc, date, deleteIconSrc, description, isActionMenuOpen, onActionToggle, onResolve, tags }: SignalRowProps) {
  return (
    <article className="relative flex min-h-18.5 items-center gap-3 border-crono-border px-3 py-3 first:border-t-0">
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#17243b]">
        <span aria-hidden="true" className="absolute -left-0.5 top-0 h-2 w-2 rounded-full bg-crono-yellow" />
        <img alt="" className="h-full w-full rounded-full object-cover" src={avatarSrc} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-semibold leading-5 text-crono-dark">{description}</p>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px] leading-4">
          <span className={categoryClasses[category]}>{tags[0]}</span>
          {tags.slice(1).map((tag) => (
            <span className="rounded-full bg-crono-moonlight px-2 py-0.5 text-crono-teal" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <span className="hidden shrink-0 text-[12px] text-crono-gray md:block">{date}</span>
      <button
        aria-expanded={isActionMenuOpen}
        aria-haspopup="menu"
        className="shrink-0 rounded-full bg-crono-teal-action px-5 py-2 text-[14px] font-medium text-white transition-colors hover:bg-crono-teal"
        onClick={() => onActionToggle(!isActionMenuOpen)}
        type="button"
      >
        Action
      </button>
      {isActionMenuOpen ? (
        <div className="absolute right-3 top-full z-20 mt-2 w-52 overflow-hidden rounded-2xl border border-crono-border bg-white p-1 shadow-[0_5px_16px_rgba(1,14,39,0.14)]" role="menu">
          <button
            className="group/complete flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[14px] font-medium text-crono-dark hover:bg-crono-moonlight hover:text-crono-teal"
            onClick={() => onResolve('completed')}
            role="menuitem"
            type="button"
          >
            Complete
            <span
              aria-hidden="true"
              className="h-5 w-5 bg-current mask-center mask-no-repeat  mask-contain"
              style={{ WebkitMaskImage: `url(${completeIconSrc})`, maskImage: `url(${completeIconSrc})` }}
            />
          </button>
          <button
            className="group/delete flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[14px] font-medium text-crono-dark hover:bg-crono-moonlight hover:text-crono-teal"
            onClick={() => onResolve('deleted')}
            role="menuitem"
            type="button"
          >
            Delete
            <span
              aria-hidden="true"
              className="h-5 w-5 bg-current mask-center mask-no-repeat  mask-contain"
              style={{ WebkitMaskImage: `url(${deleteIconSrc})`, maskImage: `url(${deleteIconSrc})` }}
            />
          </button>
        </div>
      ) : null}
    </article>
  )
}
