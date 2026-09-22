import type { OnboardingStep } from '../../dashboardMockData'

type OnboardingProps = {
  steps: OnboardingStep[]
  title: string
}

export function Onboarding({ steps, title }: OnboardingProps) {
  return (
    <section className="rounded-2xl border border-crono-border bg-white p-4 shadow-[0_1px_2px_rgba(1,14,39,0.02)] xl:col-start-3">
      <h2 className="text-[14px] font-bold leading-5 text-crono-dark">{title}</h2>
      <div className="mt-2">
        {steps.map((step, index) => (
          <div className={`flex min-h-[58px] items-center gap-3 ${index > 0 ? 'border-t border-crono-border' : ''}`} key={step.label}>
            <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf7f7] text-[18px] font-medium text-crono-teal">
              {step.icon}
            </span>
            <span className="min-w-0 flex-1 truncate text-[14px] font-semibold text-crono-dark">{step.label}</span>
            <span className="shrink-0 text-[14px] text-crono-gray">{step.duration}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
