import { Sidebar } from './components/Sidebar'

export function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        <Sidebar />
        <section className="flex-1" />
      </div>
    </main>
  )
}
