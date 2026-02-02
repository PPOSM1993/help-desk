import { Ticket } from "../../types/ticket"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getTickets(token: string) {
  console.log("TOKEN QUE LLEGA:", token)

  const res = await fetch(`${API_URL}/api/tickets/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  })

  if (!res.ok) {
    const errorText = await res.text()
    console.error("STATUS:", res.status)
    console.error("BODY:", errorText)
    throw new Error("Error al obtener tickets")
  }

  return res.json()
}

export async function createTicket(
  token: string,
  data: {
    title: string
    description: string
    priority: string
    categoryId: number
  }
) {
  const res = await fetch(`${API_URL}/api/tickets/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const errorText = await res.text()
    console.error("ERROR:", errorText)
    throw new Error("Error al crear ticket")
  }

  return res.json()
}
