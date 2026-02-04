import { StatsGrid } from "./components/stats/StatsGrid"
import { RecentActivity } from "./components/activity/RecentActivity"
import { AlertsPanel } from "./components/alerts/AlertsPanel"
import { TicketsByStatus } from "./components/charts/TicketsByStatus"
import { TicketsByDate } from "./components/charts/TicketsByDate"

export default function DashboardPage() {
  
  return (
    <div className="space-y-6">

      {/* KPIs */}
      <StatsGrid />

      {/* Charts + Alertas */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <TicketsByStatus />
          <TicketsByDate />
        </div>

        <AlertsPanel />
      </div>

      {/* Actividad */}
      <RecentActivity />

    </div>
  )
}
