"use client"

import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"
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
import { User } from "../types/users"

type Props = {
  user: User
  onEdit: (ticket: User) => void
}

export function UserActions({ user, onEdit }: Props) {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)



  return (
    <div className="flex gap-2">

      {/* 🟡 EDITAR */}
      <Button
        size="icon"
        className="bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer"
        onClick={() => onEdit(user)}
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
