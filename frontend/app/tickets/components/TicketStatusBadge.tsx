"use client"
import { Badge } from "@/components/ui/badge"
import { TicketStatus } from "../types/ticket"

const map = {
  open: "Abierto",
  in_progress: "En progreso",
  closed: "Cerrado",
}

export function TicketStatusBadge({ status }: { status: TicketStatus }) {
  return (
    <Badge variant="secondary">
      {map[status]}
    </Badge>
  )
}
