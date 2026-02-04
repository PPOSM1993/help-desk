"use client"

import { Button } from "@/components/ui/button"

type Props = {
  page: number
  totalPages: number
  onChange: (p: number) => void
}

export function TicketPagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        size="sm"
        variant="outline"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Anterior
      </Button>

      <span className="text-sm">
        Página {page} de {totalPages}
      </span>

      <Button
        size="sm"
        variant="outline"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Siguiente
      </Button>
    </div>
  )
}
