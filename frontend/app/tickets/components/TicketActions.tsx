"use client"

import { Ticket } from "../types/ticket"
import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"
import { deleteTicket } from "../services/tickets.server"
import { useRouter } from "next/navigation"
import React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Props = {
  ticket: Ticket
  onEdit: (ticket: Ticket) => void
}

export function TicketActions({ ticket, onEdit }: Props) {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  const handleDelete = async () => {
    try {
      setLoading(true)
      await deleteTicket(ticket.id)
      router.refresh()
    } catch (error) {
      console.error(error)
      alert("Error al eliminar el ticket")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex gap-2">

      {/* 🟡 EDITAR */}
      <Button
        size="icon"
        className="bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer"
        onClick={() => onEdit(ticket)}
      >
        <Pencil className="h-4 w-4" />
      </Button>

      {/* 🔴 ELIMINAR */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="icon"
            className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              ¿Eliminar ticket?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={handleDelete}
              disabled={loading}
              className="bg-red-600 hover:bg-red-500 text-white"
            >
              {loading ? "Eliminando..." : "Eliminar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
