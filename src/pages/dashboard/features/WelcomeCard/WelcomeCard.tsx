import { useWelcomeQuery } from './hooks/useWelcomeQuery'

export function WelcomeCard() {
  const { data } = useWelcomeQuery()

  if (!data) {
    return null
  }

  const { description, title } = data

  return (
    <section className="mt-2 flex min-h-35 items-center rounded-2xl border border-crono-border bg-white px-9 py-7 shadow-[0_1px_2px_rgba(1,14,39,0.02)]">
      <div>
        <h1 className="text-[24px] font-bold leading-7.5 text-crono-dark">
          {title}
        </h1>
        <p className="mt-3 max-w-130 text-[14px] leading-6 text-crono-gray">
          {description}
        </p>
      </div>
    </section>
  )
}
