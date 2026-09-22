import { TaskStatusTone, type TaskStatus } from '../../../dashboardMockData'

const toneClasses: Record<TaskStatus['tone'], string> = {
  [TaskStatusTone.Blue]: 'bg-crono-blue-light',
  [TaskStatusTone.Green]: 'bg-crono-green-light',
  [TaskStatusTone.Red]: 'bg-crono-red-light',
  [TaskStatusTone.Yellow]: 'bg-crono-yellow-light',
}

const countToneClasses: Record<TaskStatus['tone'], string> = {
  [TaskStatusTone.Blue]: 'text-crono-blue',
  [TaskStatusTone.Green]: 'text-crono-green',
  [TaskStatusTone.Red]: 'text-crono-red',
  [TaskStatusTone.Yellow]: 'text-crono-yellow-dark',
}

type TaskStatusCardProps = TaskStatus & {
  chevronSrc: string
  errorIconSrc: string
}

export function TaskStatusCard({
  chevronSrc,
  count,
  errorIconSrc,
  errorLabel,
  label,
  tone,
}: TaskStatusCardProps) {
  return (
    <div className={`relative flex min-h-22 min-w-0 flex-1 flex-col justify-center rounded-xl px-4 py-3 ${toneClasses[tone]}`}>
      {errorLabel ? (
        <span className="absolute right-3 top-2 inline-flex items-center gap-1 rounded-full bg-white px-1 py-0 text-[11px] font-medium leading-none text-crono-red">
          {errorLabel}
          <img alt="" aria-hidden="true" className="h-6 w-6" src={errorIconSrc} />
        </span>
      ) : null}
      <strong className={`text-[24px] font-medium leading-7 ${countToneClasses[tone]}`}>
        {count}
      </strong>
      <span className="mt-1 flex items-center justify-between gap-2 text-[14px] font-medium leading-5 text-[#344052]">
        {label}
        {tone !== TaskStatusTone.Green ? (
          <img alt="" aria-hidden="true" className="h-4 w-4 shrink-0" src={chevronSrc} />
        ) : null}
      </span>
    </div>
  )
}
