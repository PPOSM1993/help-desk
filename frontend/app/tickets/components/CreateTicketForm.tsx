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

type Props = {
    onSuccess: () => void
}

export function CreateTicketForm({ onSuccess }: Props) {
    const [priority, setPriority] = useState("medium")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)

        const payload = {
            title: formData.get("title"),
            description: formData.get("description"),
            priority,
        }

        const token = localStorage.getItem("access")
        console.log("TOKEN:", localStorage.getItem("access"))




        try {
            const res = await fetch("http://localhost:8000/api/tickets/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            })


            if (!res.ok) {
                const error = await res.text()
                console.error("Error backend:", error)
                return
            }

            onSuccess()
        } catch (err) {
            console.error("Error de red:", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                    id="title"
                    name="title"
                    required
                    placeholder="Ingrese nombre del ticket"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    placeholder="Describe el problema"
                />
            </div>

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

            <div className="flex justify-end pt-4 border-t">
                <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-2 w-2" />
                    {loading ? "Creando..." : "Crear ticket"}
                </Button>
            </div>
        </form>
    )
}
