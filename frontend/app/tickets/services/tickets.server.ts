import { getAccessToken } from "@/lib/auth.server"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export type Ticket = {
  id: number
  title: string
  description: string
  priority: string
  status: string
  created_at: string
}

export async function getTickets(): Promise<Ticket[]> {
  const token = await getAccessToken()

  console.log("TOKEN:", token)

  if (!token) {
    throw new Error("No autenticado")
  }

  const res = await fetch(`${API_URL}/api/tickets/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  })

  if (!res.ok) {
    const text = await res.text()
    console.error("STATUS:", res.status)
    console.error("BODY:", text)
    throw new Error("Error al cargar tickets")
  }

  return res.json()
}
