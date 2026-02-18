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
import { ArrowBigLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import ToolbarPage from "@/app/tickets/components/ToolbarPage"
import { User } from "../types/users"
import CreateUserModal from "./CreateUserModal"
import { getColumns } from "./UserClients"

export function UsersTable({ data = [] }: { data: User[] }) {
  const [globalFilter, setGlobalFilter] = useState("")
  const [pageSize, setPageSize] = useState(5)
  const [pageIndex, setPageIndex] = useState(0)

  const [open, setOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)

  const router = useRouter()


  const handleEdit = (user: User) => {
    setEditingUser(user)
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


  return (
    <>
      <div className="space-y-4">
        <ToolbarPage table={table} pageSize={pageSize} setPageSize={setPageSize} />
      </div>
    </>
  )
}
