import { getTickets } from "./services/tickets.server"
import { TicketTable } from "./components/TicketTable"
import { TicketEmptyState } from "./components/TicketEmptyState"

export default async function TicketsPage() {
  const tickets = await getTickets()

  if (!tickets || tickets.length === 0) {
    return <TicketEmptyState />
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Tickets</h1>
        <p className="text-sm text-muted-foreground">
          Gestión y seguimiento de tickets de soporte
        </p>
      </div>

      {/* DATA TABLE */}
      <TicketTable data={tickets} />
    </div>
  )
}
