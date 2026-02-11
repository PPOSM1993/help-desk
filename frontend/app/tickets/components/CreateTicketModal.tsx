"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CreateTicketForm } from "./CreateTicketForm"
import { Ticket } from "../types/ticket"

type Props = {
  open: boolean
  onClose: (value: boolean) => void
  ticket: Ticket | null
}

export function CreateTicketModal({ open, setOpen, ticket }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="md:max-w-xl md:rounded-md px-4 py-6">
        <DialogHeader>
          <DialogTitle>Nuevo ticket</DialogTitle>
        </DialogHeader>

        <CreateTicketForm ticket={ticket} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
