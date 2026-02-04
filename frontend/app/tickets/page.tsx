"use server"
import { TicketTable } from "./components/TicketTable"
import { getTickets } from "./services/tickets.server"
import { cookies } from "next/headers";

export default async function TicketsPage() {
  const c = await cookies()
  console.log(c.getAll().map(x => x.name))



  const tickets = await getTickets()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tickets</h1>
      <TicketTable tickets={tickets} />
    </div>
  )
}
