// app/tickets/components/TicketColumns.tsx
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TicketActions } from "./TicketActions"
import { Ticket } from "../types/ticket"

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "priority",
    header: "Prioridad",
  },
  {
    accessorKey: "created_at",
    header: "Creado",
    cell: ({ row }) =>
      new Date(row.original.created_at).toLocaleDateString(),
  },
  {
    id: "actions",
    cell: ({ row }) => <TicketActions ticket={row.original} />,
  },
]
