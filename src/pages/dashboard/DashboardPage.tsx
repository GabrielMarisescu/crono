import { dashboardMockData } from './dashboardMockData'
import { Replies } from './features/Replies'
import { Sidebar } from './features/Sidebar'
import { WelcomeCard } from './features/WelcomeCard'

export function DashboardPage() {
  const { replies, welcome } = dashboardMockData

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <section className="min-w-0 flex-1 p-4">
          <div className="grid gap-4 xl:grid-cols-3">
            <WelcomeCard {...welcome} />
            <Replies {...replies} />
            <div
              aria-hidden="true"
              className="min-h-[140px] rounded-2xl border border-[#dde5f0] bg-white shadow-[0_1px_2px_rgba(1,14,39,0.02)]"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
