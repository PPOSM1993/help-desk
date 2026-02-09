"use client"

import { Ticket } from "../types/ticket"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2Icon } from "lucide-react"

type Props = {
  ticket: Ticket
}

export function TicketActions({ ticket }: Props) {




  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" className="bg-yellow-500 hover:bg-yellow-600">
        <Pencil className="h-4 w-4 text-white" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="bg-red-500 hover:bg-red-600"
>
        <Trash2Icon className="h-4 w-4 text-white" />
      </Button>
    </div>
  )
}
