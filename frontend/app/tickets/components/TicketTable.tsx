"use client"

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  getExpandedRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useState } from "react"
import ToolbarPage from "./ToolbarPage"
import { Ticket } from "../types/ticket"
import { ArrowBigLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CreateTicketModal } from "./CreateTicketModal"
import { useRouter } from "next/navigation"
import { getColumns } from "./TicketColumns"

export function TicketTable({ data = [] }: { data: Ticket[] }) {
  const [globalFilter, setGlobalFilter] = useState("")
  const [pageSize, setPageSize] = useState(5)
  const [pageIndex, setPageIndex] = useState(0)

  const [open, setOpen] = useState(false)
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null)

  const router = useRouter()

  const handleEdit = (ticket: Ticket) => {
    setEditingTicket(ticket)
    setOpen(true)
  }

  const columns = getColumns(handleEdit)

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination: {
        pageSize,
        pageIndex,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: updater => {
      const next =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater

      setPageIndex(next.pageIndex)
      setPageSize(next.pageSize)
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    autoResetPageIndex: false,
  })

  const handleCancel = () => {
    router.push("dashboard")
  }

  return (
    <div className="space-y-4">

      <ToolbarPage table={table} pageSize={pageSize} setPageSize={setPageSizae} />

      <div className="rounded-md border overflow-x-auto">
        <Table className="w-full table-auto bg-blue-500 hover:bg-blue-500">
          <TableHeader className="bg-blue-500 hover:bg-blue-500">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className="bg-blue-300 hover:bg-blue-300">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No hay Tickets Registrados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* 🔥 BOTONES + PAGINACIÓN */}
      <div className="flex items-center gap-2">

        {/* 🟢 CREAR */}
        <Button
          className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
          onClick={() => {
            setEditingTicket(null)
            setOpen(true)
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          Crear ticket
        </Button>

        {/* 🔴 CANCELAR */}
        <Button
          className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
          onClick={handleCancel}
        >
          <ArrowBigLeft className="h-4 w-4 mr-2" />
          Cancelar
        </Button>

        {/* 🔥 PAGINACIÓN */}
        <div className="flex items-center gap-2 ml-auto">

          {/* Botón anterior */}
          <Button
            size="sm"
            variant="outline"
            className="cursor-pointer"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}

          >
            {"<"}
          </Button>

          {/* Números */}
          {Array.from({ length: table.getPageCount() }).map((_, index) => {
            const isActive = table.getState().pagination.pageIndex === index

            return (
              <Button
                key={index}
                size="sm"
                className="bg-green-600 hover:bg-green-500 text-white hover:text-white cursor-pointer"
                variant={isActive ? "default" : "outline"}
                onClick={() =>
                  table.setPagination({
                    pageIndex: index,
                    pageSize,
                  })
                }
              >
                {index + 1}
              </Button>
            )
          })}

          {/* Botón siguiente */}
          <Button
            size="sm"
            variant="outline"
            className="cursor-pointer"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            {">"}
          </Button>

        </div>
      </div>

      {/* 🔥 MODAL ÚNICO */}
      <CreateTicketModal
        open={open}
        setOpen={setOpen}
        ticket={editingTicket}
      />
    </div>
  )
}
