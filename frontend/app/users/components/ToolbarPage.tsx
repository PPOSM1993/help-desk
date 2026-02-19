



"use client"
// ToolbarPage.tsx
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ToolbarPage({ table, pageSize, setPageSize }: any) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Search */}
      <Input
        placeholder="Buscar Usuario..."
        value={(table.getState().globalFilter as string) ?? ""}
        onChange={e => table.setGlobalFilter(e.target.value)}
      className="w-80 rounded-md border-sm focus:ring-0 focus:border-primary-500 focus:outline-none"
      />

      {/* Estado */}
      <Select
        onValueChange={value =>
          table.getColumn("status")?.setFilterValue(
            value === "all" ? "" : value
          )
        }
      >
        <SelectTrigger className="w-40 rounded-md border-sm focus:ring-0 focus:border-primary-500 focus:outline-none">
          <SelectValue placeholder="Rol" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="admin">Administrador</SelectItem>
          <SelectItem value="agent">Agente</SelectItem>
          <SelectItem value="client">Cliente</SelectItem>
        </SelectContent>
      </Select>

      {/* Prioridad */}
      <Select
        onValueChange={value =>
          table.getColumn("priority")?.setFilterValue(
            value === "all" ? "" : value
          )
        }
      >
        <SelectTrigger className="w-40 rounded-md border-sm focus:ring-0 focus:border-primary-500 focus:outline-none">
          <SelectValue placeholder="Activo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Si</SelectItem>
          <SelectItem value="low">No</SelectItem>
        </SelectContent>
      </Select>

      {/* Page size */}
      <Select onValueChange={v => setPageSize(Number(v))}>
        <SelectTrigger className="w-32 rounded-md border-sm focus:ring-0 focus:border-primary-500 focus:outline-none">
          <SelectValue placeholder="Filas" />
        </SelectTrigger>
        <SelectContent>
          {[5, 10, 15, 20, 25, 50, 100].map(size => (
            <SelectItem key={size} value={String(size)}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
