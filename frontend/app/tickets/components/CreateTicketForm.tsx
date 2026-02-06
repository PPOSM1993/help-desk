"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { createTicket } from "../services/tickets.server"

type Props = {
  onSuccess: () => void
}

export function CreateTicketForm({ onSuccess }: Props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("medium")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    try {
      await createTicket({
        title,
        description,
        priority,
      })

      console.log("✅ Ticket creado correctamente")
      onSuccess()
    } catch (error) {
      console.error("❌ Error creando ticket:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Título */}
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingrese nombre del ticket"
          required
        />
      </div>

      {/* Descripción */}
      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          placeholder="Describe el problema"
          required
        />
      </div>

      {/* Prioridad */}
      <div className="space-y-2">
        <Label>Prioridad</Label>
        <Select value={priority} onValueChange={setPriority}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">🟢 Baja</SelectItem>
            <SelectItem value="medium">🟡 Media</SelectItem>
            <SelectItem value="high">🟠 Alta</SelectItem>
            <SelectItem value="urgent">🔴 Urgente</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Footer */}
      <div className="flex justify-end pt-4 border-t">
        <Button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 rounded-sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          {loading ? "Creando..." : "Crear ticket"}
        </Button>
      </div>
    </form>
  )
}
