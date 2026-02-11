import {
  Ticket,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react"
import { StatCard } from "./StatsCard"

const iconItems = [
  { icon: Ticket, label: "Total tickets", value: 128 },
  { icon: Clock, label: "Abiertos", value: 50 },
  { icon: CheckCircle, label: "Cerrados", value: 86 },
  { icon: Users, label: "Usuarios", value: 23 },
]

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
        value={50}
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
        variant="red"
      />
    </div>
  )
}
