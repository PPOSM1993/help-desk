import { TicketList } from "./components/TicketList"
import { getTickets } from "./services/tickets.server"

export default async function TicketsPage() {
  const tickets = await getTickets()

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">🎫 Tickets</h1>
      <TicketList tickets={tickets} />
    </section>
  )
}
