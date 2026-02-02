import TicketTable from "./components/TicketTable"

export default async function TicketsPage() {


  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Tickets</h1>
      <TicketTable  />
    </div>
  )
}
