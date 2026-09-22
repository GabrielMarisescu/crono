import { useOnboardingQuery } from './hooks/useOnboardingQuery'

export function Onboarding() {
  const { data } = useOnboardingQuery()

  if (!data) {
    return null
  }

  const { steps, title } = data

  return (
    <section className="rounded-2xl border border-crono-border bg-white p-4 shadow-[0_1px_2px_rgba(1,14,39,0.02)] xl:col-start-3 xl:row-start-3">
      <h2 className="text-[14px] font-bold leading-5 text-crono-dark">{title}</h2>
      <div className="mt-2">
        {steps.map((step, index) => (
          <div className={`flex min-h-[104px] items-center gap-3 ${index > 0 ? 'border-t border-crono-border' : ''}`} key={step.label}>
            <img alt="" aria-hidden="true" className="h-10 w-10 shrink-0 object-contain" src={step.iconSrc} />
            <span className="min-w-0 flex-1 truncate text-[14px] font-semibold text-crono-dark">{step.label}</span>
            <span className="shrink-0 text-[14px] text-crono-gray">{step.duration}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
