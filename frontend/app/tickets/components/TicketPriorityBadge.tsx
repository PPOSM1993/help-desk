"use client"

import { Badge } from "@/components/ui/badge"
import { TicketPriority } from "../types/ticket"

const map = {
  low: "Bajo",
  medium: "Medio",
  high: "Alto",
  urgent: "Urgente",
}

const styles = {
  low: "bg-gray-200 text-gray-800 rounded-none border-none",
  medium: "bg-yellow-200 text-yellow-800 rounded-none border-none",
  high: "bg-orange-200 text-orange-800 rounded-none border-none",
  urgent: "bg-red-200 text-red-800 rounded-none border-none",
}

export function TicketPriorityBadge({ priority }: { priority: TicketPriority }) {
  return (
    <Badge className={styles[priority]}>
      {map[priority].toLocaleUpperCase()}
    </Badge>
  )
}
