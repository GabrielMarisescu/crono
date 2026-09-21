import { Link } from 'react-router'

const metrics = [
  {
    label: 'Pipeline value',
    value: '$482K',
    delta: '+12.4%',
    tone: 'text-emerald-700',
  },
  {
    label: 'Active accounts',
    value: '128',
    delta: '+8 this week',
    tone: 'text-cyan-700',
  },
  {
    label: 'Meetings booked',
    value: '37',
    delta: '+5 today',
    tone: 'text-violet-700',
  },
  {
    label: 'Response rate',
    value: '64%',
    delta: '+3.1%',
    tone: 'text-amber-700',
  },
]

const pipelineStages = [
  { label: 'Prospecting', value: 62, color: 'bg-cyan-500' },
  { label: 'Qualified', value: 46, color: 'bg-violet-500' },
  { label: 'Proposal', value: 28, color: 'bg-amber-500' },
  { label: 'Closing', value: 18, color: 'bg-emerald-500' },
]

const activities = [
  {
    account: 'Northstar Labs',
    owner: 'Maya',
    status: 'Proposal sent',
    nextStep: 'Review pricing',
    value: '$86K',
  },
  {
    account: 'Aster Health',
    owner: 'Jonas',
    status: 'Discovery',
    nextStep: 'Book stakeholder call',
    value: '$42K',
  },
  {
    account: 'Helio Systems',
    owner: 'Rina',
    status: 'Negotiation',
    nextStep: 'Confirm legal notes',
    value: '$118K',
  },
  {
    account: 'Studio Vale',
    owner: 'Elena',
    status: 'Qualified',
    nextStep: 'Send pilot plan',
    value: '$34K',
  },
]

export function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
        <aside className="border-b border-slate-200 bg-white px-5 py-5 lg:w-64 lg:border-r lg:border-b-0">
          <div className="flex items-center justify-between lg:block">
            <div>
              <p className="text-sm font-semibold text-slate-500">Crono</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-normal text-slate-950">
                Dashboard
              </h1>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 lg:mt-6 lg:inline-block">
              Live
            </span>
          </div>

          <nav className="mt-6 flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            <Link
              className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-medium text-white"
              to="/dashboard"
            >
              Overview
            </Link>
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              to="/dashboard"
            >
              Accounts
            </Link>
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              to="/dashboard"
            >
              Activity
            </Link>
          </nav>
        </aside>

        <section className="flex-1 px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Monday snapshot</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950">
                Sales performance
              </h2>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-medium uppercase text-slate-500">
                Team target
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-950">78% reached</p>
            </div>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <article
                className="rounded-lg border border-slate-200 bg-white p-5"
                key={metric.label}
              >
                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <p className="text-3xl font-semibold tracking-normal">{metric.value}</p>
                  <p className={`text-sm font-semibold ${metric.tone}`}>
                    {metric.delta}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
            <article className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Pipeline</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-normal">
                    Stage health
                  </h3>
                </div>
                <p className="text-sm font-medium text-slate-500">154 deals</p>
              </div>

              <div className="mt-6 space-y-5">
                {pipelineStages.map((stage) => (
                  <div key={stage.label}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium text-slate-700">{stage.label}</span>
                      <span className="text-slate-500">{stage.value}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${stage.color}`}
                        style={{ width: `${stage.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-medium text-slate-500">Activity</p>
                <h3 className="mt-1 text-xl font-semibold tracking-normal">
                  Priority accounts
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Account</th>
                      <th className="px-5 py-3 font-semibold">Owner</th>
                      <th className="px-5 py-3 font-semibold">Status</th>
                      <th className="px-5 py-3 font-semibold">Next step</th>
                      <th className="px-5 py-3 text-right font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activities.map((activity) => (
                      <tr key={activity.account}>
                        <td className="px-5 py-4 font-semibold text-slate-950">
                          {activity.account}
                        </td>
                        <td className="px-5 py-4 text-slate-600">{activity.owner}</td>
                        <td className="px-5 py-4 text-slate-600">{activity.status}</td>
                        <td className="px-5 py-4 text-slate-600">
                          {activity.nextStep}
                        </td>
                        <td className="px-5 py-4 text-right font-semibold text-slate-950">
                          {activity.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}
