"use server"
import { getAccessToken } from "@/lib/auth.server"
import { Ticket } from "../types/ticket"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

const API_URL = process.env.NEXT_PUBLIC_API_URL

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

export async function createTicket(payload: any) {
  const cookieStore = cookies()
  const token = (await cookieStore).get("access_token")?.value

  if (!token) throw new Error("No token")

  const res = await fetch("http://localhost:8000/api/tickets/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })

  return res.json()
}


export async function deleteTicket(id: number) {
  const token = (await cookies()).get("access_token")?.value
  if (!token) throw new Error("No autenticado")

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tickets/${id}/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Error eliminando ticket: ${text}`)
  }

  // 🔥 ESTO ES LO QUE TE FALTABA
  revalidatePath("/tickets")
}