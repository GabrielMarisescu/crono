import { PerformanceMetricCard } from './components/PerformanceMetricCard'
import { usePerformanceQuery } from './hooks/usePerformanceQuery'

export function Performance() {
  const { data } = usePerformanceQuery()

  if (!data) {
    return null
  }

  const { editIconSrc, editLabel, metrics, title } = data

  return (
    <section className="mt-2 rounded-2xl border border-crono-border bg-white p-4 shadow-[0_1px_2px_rgba(1,14,39,0.02)] xl:row-span-2 xl:flex xl:flex-col">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[14px] font-bold leading-5 text-crono-dark">{title}</h2>
        <button className="inline-flex items-center gap-1 text-[14px] font-medium text-crono-teal" type="button">
          {editLabel}
          <img alt="" aria-hidden="true" className="h-4 w-4" src={editIconSrc} />
        </button>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 xl:flex-1 xl:grid-rows-3">
        {metrics.map((metric) => (
          <PerformanceMetricCard {...metric} key={metric.label} />
        ))}
      </div>
    </section>
  )
}
