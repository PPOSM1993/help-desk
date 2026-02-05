export type TicketStatus =
  | "open"
  | "in_progress"
  | "closed"
  | "expired"
  | "pending"
  | "resolved"

export type TicketPriority =
  | "low"
  | "medium"
  | "high"
  | "urgent"

export type Ticket = {
  id: number
  title: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  created_at: string
}
