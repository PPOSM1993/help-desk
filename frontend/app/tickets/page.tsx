import { getTickets } from "./services/tickets.server"
import { TicketTable } from "./components/TicketTable"

export default async function TicketsPage() {
  const tickets = await getTickets()

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Tickets</h1>
        <p className="text-sm text-muted-foreground">
          Gestión y seguimiento de tickets de soporte
        </p>
      </div>

      {/* DATA TABLE: SIEMPRE */}
      <TicketTable data={tickets ?? []} />
    </div>
  )
}
