"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
  search: string
  onSearchChange: (v: string) => void
  status: string
  onStatusChange: (v: string) => void
  priority: string
  onPriorityChange: (v: string) => void
  limit: number
  onLimitChange: (v: number) => void
}

export function TicketToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  priority,
  onPriorityChange,
  limit,
  onLimitChange,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <Input
        placeholder="Buscar ticket..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-[240px]"
      />

      {/* Status */}
      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="open">Abiertos</SelectItem>
          <SelectItem value="in_progress">En progreso</SelectItem>
          <SelectItem value="closed">Cerrados</SelectItem>
        </SelectContent>
      </Select>

      {/* Priority */}
      <Select value={priority} onValueChange={onPriorityChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Prioridad" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="low">Baja</SelectItem>
          <SelectItem value="medium">Media</SelectItem>
          <SelectItem value="high">Alta</SelectItem>
          <SelectItem value="urgent">Urgente</SelectItem>
        </SelectContent>
      </Select>

      {/* Limit */}
      <Select
        value={String(limit)}
        onValueChange={(v) => onLimitChange(Number(v))}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {[5, 10, 15, 20, 25, 50, 100].map(n => (
            <SelectItem key={n} value={String(n)}>
              {n} / pág
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
