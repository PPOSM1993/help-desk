export type TicketStatus = "open" | "in_progress" | "closed"
export type TicketPriority = "low" | "medium" | "high"

export type Ticket = {
  id: number
  title: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  created_at: string
}
