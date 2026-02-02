"use client"

import { Ticket } from "../types"
import { Card } from "@/components/ui/card"
import { TicketStatusBadge } from "./TicketStatusBadge"

type Props = {
  tickets: Ticket[]
}

export function TicketTable({ tickets }: Props) {
  if (tickets.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No hay tickets registrados
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {tickets.map(ticket => (
        <Card key={ticket.id} className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{ticket.title}</h3>
              <p className="text-sm text-muted-foreground">
                {ticket.description}
              </p>
            </div>

            <TicketStatusBadge status={ticket.status} />
          </div>
        </Card>
      ))}
    </div>
  )
}
