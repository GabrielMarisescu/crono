import type { ReplyAvatar } from '../../../mocks/dashboardMockData'

type ReplyAvatarsProps = {
  avatars: ReplyAvatar[]
}

export function ReplyAvatars({ avatars }: ReplyAvatarsProps) {
  return (
    <div className="flex shrink-0 items-center">
      {avatars.map((avatar, index) => (
        <span
          aria-label={avatar.label}
          className={[
            'flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[22px] font-bold leading-none shadow-sm',
            index > 0 ? '-ml-3' : '',
          ].join(' ')}
          key={avatar.label}
          role="img"
          style={{
            backgroundColor: avatar.backgroundColor,
            color: avatar.color,
          }}
        >
          <img
            alt=""
            className="h-full w-full rounded-full object-cover"
            src={avatar.imageSrc}
          />
        </span>
      ))}
    </div>
  )
}
