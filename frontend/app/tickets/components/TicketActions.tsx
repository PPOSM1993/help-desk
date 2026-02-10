"use client"

import { Ticket } from "../types/ticket"
import { Button } from "@/components/ui/button"
import { Pencil, Trash, Trash2Icon } from "lucide-react"
import { deleteTicket, updateTicket } from "../services/tickets.server"
import { useRouter } from "next/navigation"

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
import React from "react"

type Props = {
  ticket: Ticket
}

export function TicketActions({ ticket }: Props) {

  const router = useRouter();
  const [loading, setIsLoading] = React.useState(false)

  const handleDelete = async () => {
    try {
          await deleteTicket(ticket.id)
    router.refresh()
    console.log("Deleted ticket", ticket.id)
    } catch (error) {
      console.error("❌ Error al eliminar ticket:", error)
      alert("Error al eliminar el ticket. Por favor, inténtalo de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdate = async () => {
    try {
      await updateTicket(ticket.id, {
        title: ticket.title,
        description: ticket.description,
        priority: ticket.priority,
      })
      console.log("✅ Ticket actualizado correctamente")
    } catch (error) {
      console.error("❌ Error al actualizar ticket:", error)
      alert("Error al actualizar el ticket. Por favor, inténtalo de nuevo.")
    }
  }


  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white"
      onClick={handleUpdate}
      >
        <Pencil className="h-4 w-4 text-white" />
      </Button>

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon" className="bg-red-500 hover:bg-red-600 cursor-pointer">
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
            El Ticket será eliminado permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
 as        <AlertDialogCancel disabled={loading}>
            Cancelar
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-red-600 hover:bg-red-500 hover:bg-red-600 cursor-pointer text-white"
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}
