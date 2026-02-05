"use client"

import { Ticket } from "../types/ticket"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {
  ticket: Ticket
}

export function TicketActions({ ticket }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log("Ver", ticket.id)}>
          Ver detalle
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => console.log("Editar", ticket.id)}>
          Editar
        </DropdownMenuItem>

        <DropdownMenuItem
          className="text-destructive"
          onClick={() => console.log("Cerrar", ticket.id)}
        >
          Cerrar ticket
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
