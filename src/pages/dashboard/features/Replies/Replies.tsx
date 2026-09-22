import type { ReplyAvatar } from '../../dashboardMockData'
import { ReplyAvatars } from './components/ReplyAvatars'

type RepliesProps = {
  avatars: ReplyAvatar[]
  count: number
  ctaLabel: string
  iconSrc: string
  title: string
}

export function Replies({
  avatars,
  count,
  ctaLabel,
  iconSrc,
  title,
}: RepliesProps) {
  return (
    <section className="mt-2 min-h-35 rounded-2xl border border-crono-border bg-white p-5 shadow-[0_1px_2px_rgba(1,14,39,0.02)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[14px] font-bold text-crono-dark">{title}</h2>
        <button
          className="inline-flex items-center gap-2 text-[14px] font-medium text-crono-teal transition-colors hover:text-[#087f79]"
          type="button"
        >
          {ctaLabel}
          <span aria-hidden="true" className="text-[22px] leading-none">
            &gt;
          </span>
        </button>
      </div>

      <div className="mt-4 flex min-h-19.5 items-center justify-between gap-5 rounded-2xl bg-crono-moonlight px-7 py-4">
        <div className="flex items-center gap-7">
          <span className="flex h-14.5 w-14.5 shrink-0 items-center justify-center rounded-full bg-[#c9f1ef]">
            <span
              aria-hidden="true"
              className="h-7 w-7 bg-crono-teal mask-center  mask-no-repeat mask-contain"
              style={{
                WebkitMaskImage: `url(${iconSrc})`,
                maskImage: `url(${iconSrc})`,
              }}
            />
          </span>
          <strong className="text-[36px] font-medium leading-none text-[#344052]">
            {count}
          </strong>
        </div>

        <ReplyAvatars avatars={avatars} />
      </div>
    </section>
  )
}
