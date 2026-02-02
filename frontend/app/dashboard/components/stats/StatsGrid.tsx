import {
  Ticket,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react"
import { StatCard } from "./StatsCard"

export function StatsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total tickets"
        value={128}
        icon={Ticket}
        variant="blue"
      />

      <StatCard
        title="Abiertos"
        value={42}
        icon={Clock}
        variant="yellow"
      />

      <StatCard
        title="Cerrados"
        value={86}
        icon={CheckCircle}
        variant="green"
      />

      <StatCard
        title="Usuarios"
        value={23}
        icon={Users}
        variant="violet"
      />
    </div>
  )
}
