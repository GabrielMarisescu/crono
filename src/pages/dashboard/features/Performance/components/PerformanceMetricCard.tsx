import { PerformanceMetricAccent, type PerformanceMetric } from '../../../dashboardMockData'

const accentClasses: Record<PerformanceMetric['accent'], string> = {
  [PerformanceMetricAccent.Activities]: 'text-crono-purple bg-crono-purple',
  [PerformanceMetricAccent.Companies]: 'text-crono-blue-company bg-crono-blue-company',
  [PerformanceMetricAccent.Contacts]: 'text-crono-blue bg-crono-blue',
  [PerformanceMetricAccent.Deals]: 'text-crono-pink bg-crono-pink',
  [PerformanceMetricAccent.Green]: 'text-crono-green bg-crono-green',
  [PerformanceMetricAccent.Meetings]: 'text-crono-yellow-dark bg-crono-yellow-dark',
}

export function PerformanceMetricCard({
  accent,
  current,
  iconSrc,
  iconText,
  label,
  progress,
  total,
}: PerformanceMetric) {
  const [textColor, barColor] = accentClasses[accent].split(' ')

  return (
    <div className="h-full rounded-lg border border-crono-border px-2 py-2">
      <div className="flex items-center justify-between gap-1 text-[12px] leading-4 text-crono-gray-dark">
        <span className="truncate">{label}</span>
      </div>
      <div className={`mt-4 flex items-center gap-1 text-[16px] font-medium leading-5 ${textColor}`}>
        {iconSrc ? (
          <span
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 bg-current mask-center mask-no-repeat mask-contain ${textColor}`}
            style={{ WebkitMaskImage: `url(${iconSrc})`, maskImage: `url(${iconSrc})` }}
          />
        ) : (
          <span aria-hidden="true" className="shrink-0 text-[16px]">
            {iconText}
          </span>
        )}
        {current}<span className="font-normal text-[#a9b0bd]">/{total}</span>
      </div>
      <div className="mt-1 h-0.75 overflow-hidden rounded-full bg-[#edf0f5]">
        <div className={`h-full ${barColor}`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
