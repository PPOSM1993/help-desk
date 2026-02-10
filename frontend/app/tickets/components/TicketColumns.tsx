import { ColumnDef } from "@tanstack/react-table"
import { TicketStatusBadge } from "./TicketStatusBadge"
import { TicketPriorityBadge } from "./TicketPriorityBadge"
import { TicketActions } from "./TicketActions"
import { Ticket } from "../types/ticket"


export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "id",
    header: "Nº",
    cell: ({ row }) =>  {
      return row.index + 1
    }
  },
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => (
      <TicketStatusBadge status={row.original.status} />
    ),
  },
  {
    accessorKey: "priority",
    header: "Prioridad",
    cell: ({ row }) => (
      <TicketPriorityBadge priority={row.original.priority} />
    ),
  },
  {
    accessorKey: "created_at",
    header: "Creado",
    cell: ({ row }) =>
      new Date(row.original.created_at).toLocaleDateString(),
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => <TicketActions ticket={row.original} />,
  },
]
