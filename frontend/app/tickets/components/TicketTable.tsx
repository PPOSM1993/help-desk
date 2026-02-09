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
import { TicketEmptyState } from "./TicketEmptyState"
import ToolbarPage from "./ToolbarPage"
import { columns } from "./TicketColumns"
import { Ticket } from "../types/ticket"
import { ArrowBigLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CreateTicketModal } from "./CreateTicketModal"


export function TicketTable({ data }: { data: Ticket[] }) {
  const [globalFilter, setGlobalFilter] = useState("")
  const [pageSize, setPageSize] = useState(10)
  const [openCreate, setOpenCreate] = useState(false)


  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination: { pageSize, pageIndex: 0 },
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel()

  })


  if (!data.length) {
    return <TicketEmptyState />
  }



  return (
    <div className="space-y-4">
      {/* Toolbar va aquí */}
      <ToolbarPage table={table} pageSize={pageSize} setPageSize={setPageSize} />

      <div className="rounded-sm border shadowxsm overflow-x-auto">
        <Table>
          <TableHeader className="bg-blue-400 hover:bg-blue-400">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id} className="bg-blue-400 hover:bg-blue-400">
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

          <TableBody className="bg-blue-200 hover:bg-blue-200">
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id} className="bg-blue-300 hover:bg-blue-300">
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2">
        <Button
          className="h-8 w-34 rounded-sm bg-green-600 hover:bg-green-600 text-white uppercase cursor-pointer bg:text-white"
          onClick={() => setOpenCreate(true)}
        >
          <Plus className="h-2 w-2" />
          Crear ticket
        </Button>

        <CreateTicketModal
          open={openCreate}
          onClose={() => setOpenCreate(false)}
        />

        <Button
          variant="outline"
          className="h-8 rounded-xs bg-red-500 border-md border-none hover:bg-red-500 text-white uppercase cursor-pointer bg:text-white"
        >
          <ArrowBigLeft className="h-4 w-4" />
          Cancelar
        </Button>
        <div className="flex items-center gap-2 justify-end flex-1">
          {Array.from({ length: table.getPageCount() }).map((_, index) => {
            const isActive = table.getState().pagination.pageIndex === index

            return (

              <Button
                key={index}
                size="sm"
                variant={isActive ? "default" : "outline"}
                className="h-8 w-8 rounded-none p-0 bg-green-600 border-md border-gray-500 hover:bg-green-600 text-white"
                onClick={() => table.setPageIndex(index)}
              >
                {index + 1}
              </Button>
            )
          })}
        </div>

      </div>
    </div>
  )
}