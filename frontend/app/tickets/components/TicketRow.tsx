"use client"
import { Ticket } from "../types/ticket"
import { TicketStatusBadge } from "./TicketStatusBadge"
import { TicketPriorityBadge } from "./TicketPriorityBadge"

type Props = {
  ticket: Ticket
}

export function TicketRow({ ticket }: Props) {
  return (
    <div className="flex items-center justify-between border-b px-4 py-3 hover:bg-muted/50">
      <div>
        <p className="font-medium">{ticket.title}</p>
        <p className="text-sm text-muted-foreground">
          #{ticket.id} · {new Date(ticket.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <TicketPriorityBadge priority={ticket.priority} />
        <TicketStatusBadge status={ticket.status} />
        <span>{new Date(ticket.created_at).toLocaleDateString()}</span>

      </div>
    </div>
  )
}
