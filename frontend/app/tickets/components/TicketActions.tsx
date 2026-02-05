"use client"

import { Ticket } from "../types/ticket"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash2Icon } from "lucide-react"

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
    <>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" className="bg-yellow-500 hover:bg-yellow-500 rounded-none ">
          <Pencil className="h-4 w-4 text-white" />
        </Button>
        <Button variant="ghost" size="icon" className="bg-red-500 hover:bg-red-500 rounded-none">
          <Trash2Icon className="h-4 w-4 text-white" />
        </Button>
      </div>
    </>
  )
}
