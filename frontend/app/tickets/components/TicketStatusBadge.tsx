import { cn } from "@/lib/utils"

type Props = {
  status: "open" | "in_progress" | "closed"
}

const styles = {
  open: "bg-blue-100 text-blue-700",
  in_progress: "bg-yellow-100 text-yellow-700",
  closed: "bg-green-100 text-green-700",
}

export function TicketStatusBadge({ status }: Props) {
  return (
    <span
      className={cn(
        "px-2 py-1 text-xs rounded font-medium",
        styles[status]
      )}
    >
      {status.replace("_", " ")}
    </span>
  )
}
