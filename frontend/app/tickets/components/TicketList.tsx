"use client"

import { Ticket } from "../types/ticket"
import { TicketRow } from "./TicketRow"
import { TicketEmptyState } from "./TicketEmptyState"

type Props = {
  tickets: Ticket[]
}

export function TicketList({ tickets }: Props) {
  if (tickets.length === 0) {
    return <TicketEmptyState />
  }

  return (
    <div className="rounded-md border">
      {tickets.map(ticket => (
        <TicketRow key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
