import { TicketTable } from "./components/TicketTable"
import { getTickets } from "./services/tickets.service"

export default async function TicketsPage() {
  // ⚠️ por ahora hardcodeado (luego auth real)
  const token = "PEGA_AQUI_UN_ACCESS_TOKEN_VALIDO"

  try {
    const tickets = await getTickets(token)

    return (
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Tickets</h1>

        <TicketTable tickets={tickets} />
      </div>
    )
  } catch (error) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold text-red-600">
          Error al cargar tickets
        </h1>
        <p className="text-sm text-muted-foreground">
          Intenta nuevamente más tarde
        </p>
      </div>
    )
  }
}
