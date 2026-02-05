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
    <div className="flex flex-wrap gap-4 items-center">
      {/* Search */}
      <Input
        placeholder="Buscar ticket..."
        value={(table.getState().globalFilter as string) ?? ""}
        onChange={e => table.setGlobalFilter(e.target.value)}
        className="w-64"
      />

      {/* Estado */}
      <Select
        onValueChange={value =>
          table.getColumn("status")?.setFilterValue(
            value === "all" ? "" : value
          )
        }
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="open">Abierto</SelectItem>
          <SelectItem value="closed">Cerrado</SelectItem>
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
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Prioridad" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="low">Baja</SelectItem>
          <SelectItem value="medium">Media</SelectItem>
          <SelectItem value="high">Alta</SelectItem>
        </SelectContent>
      </Select>

      {/* Page size */}
      <Select onValueChange={v => setPageSize(Number(v))}>
        <SelectTrigger className="w-32">
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
