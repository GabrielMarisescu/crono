type IconSlotProps = {
  active?: boolean
  name: string
  src?: string
}

export function IconSlot({ active, name, src }: IconSlotProps) {
  if (src) {
    return (
      <img
        alt=""
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
        data-icon={name}
        src={src}
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      className={[
        'flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border text-[0]',
        active
          ? 'border-crono-teal bg-crono-teal-soft'
          : 'border-crono-gray bg-transparent group-hover:border-crono-dark',
      ].join(' ')}
      data-icon={name}
    />
  )
}
