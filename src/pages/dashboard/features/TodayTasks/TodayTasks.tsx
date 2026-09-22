import { TaskStatusCard } from './components/TaskStatusCard'
import { useTodayTasksQuery } from './hooks/useTodayTasksQuery'

export function TodayTasks() {
  const { data } = useTodayTasksQuery()

  if (!data) {
    return null
  }

  const { chevronSrc, errorIconSrc, statuses, title } = data

  return (
    <section className="rounded-2xl border border-crono-border bg-white px-4 py-4 shadow-[0_1px_2px_rgba(1,14,39,0.02)] xl:col-span-2">
      <h2 className="text-[14px] font-bold leading-5 text-crono-dark">{title}</h2>

      <div className="mt-2 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
        {statuses.map((status, index) => (
          <div className="flex min-w-0 items-stretch gap-2" key={status.label}>
            <TaskStatusCard {...status} chevronSrc={chevronSrc} errorIconSrc={errorIconSrc} />
            {index === 0 || index === 2 ? (
              <span aria-hidden="true" className="hidden w-px shrink-0 bg-[#e2e7ef] xl:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
