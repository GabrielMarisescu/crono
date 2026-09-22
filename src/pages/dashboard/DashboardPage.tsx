import { Replies } from './features/Replies'
import { Onboarding } from './features/Onboarding'
import { Performance } from './features/Performance'
import { Signals } from './features/Signals'
import { Sidebar } from './features/Sidebar'
import { TodayTasks } from './features/TodayTasks'
import { WelcomeCard } from './features/WelcomeCard'
import { useDashboardQuery } from './hooks/useDashboardQuery'

export function DashboardPage() {
  const { data, isError, isPending } = useDashboardQuery()

  if (isPending) {
    return <main className="min-h-screen bg-[#f6f7f9]" />
  }

  if (isError || !data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f6f7f9] text-crono-dark">
        Unable to load dashboard
      </main>
    )
  }

  const { onboarding, performance, replies, signals, sidebar, todayTasks, welcome } = data

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <div className="flex min-h-screen w-full">
        <Sidebar data={sidebar} />
        <section className="min-w-0 flex-1 p-4">
          <div className="grid gap-4 xl:grid-cols-3">
            <WelcomeCard {...welcome} />
            <Replies {...replies} />
            <Performance {...performance} />
            <TodayTasks {...todayTasks} />
            <Onboarding {...onboarding} />
            <Signals {...signals} />
          </div>
        </section>
      </div>
    </main>
  )
}
