"use client"

import { useMemo, useState } from "react"
import { Ticket } from "../types/ticket"

export function useTicketsTable(tickets: Ticket[]) {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("all")
  const [priority, setPriority] = useState("all")
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const filteredTickets = useMemo(() => {
    let data = [...tickets]

    if (search) {
      data = data.filter(t =>
        t.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (status !== "all") {
      data = data.filter(t => t.status === status)
    }

    if (priority !== "all") {
      data = data.filter(t => t.priority === priority)
    }

    return data
  }, [tickets, search, status, priority])

  const totalPages = Math.ceil(filteredTickets.length / limit)

  const paginatedTickets = useMemo(() => {
    const start = (page - 1) * limit
    return filteredTickets.slice(start, start + limit)
  }, [filteredTickets, page, limit])

  return {
    search,
    setSearch,
    status,
    setStatus,
    priority,
    setPriority,
    limit,
    setLimit,
    page,
    setPage,
    totalPages,
    tickets: paginatedTickets,
  }
}
