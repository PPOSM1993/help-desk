"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CreateTicketForm } from "./CreateTicketForm"

type Props = {
  open: boolean
  onClose: () => void
}

export function CreateTicketModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="md:max-w-xl md:rounded-md px-4 py-6">
        <DialogHeader>
          <DialogTitle>Nuevo ticket</DialogTitle>
        </DialogHeader>

        <CreateTicketForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  )
}
