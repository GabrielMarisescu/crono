import { Replies } from './features/Replies'
import { Onboarding } from './features/Onboarding'
import { Performance } from './features/Performance'
import { Signals } from './features/Signals'
import { Sidebar } from './features/Sidebar'
import { TodayTasks } from './features/TodayTasks'
import { WelcomeCard } from './features/WelcomeCard'

export function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <section className="min-w-0 flex-1 p-4">
          <div className="grid gap-4 xl:grid-cols-3">
            <WelcomeCard />
            <Replies />
            <Performance />
            <TodayTasks />
            <Onboarding />
            <Signals />
          </div>
        </section>
      </div>
    </main>
  )
}
