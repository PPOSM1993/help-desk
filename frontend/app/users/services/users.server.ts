"use server"

import { getAccessToken } from "@/lib/auth.server"
import { User } from "../types/users"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getUsers(): Promise<User[]> {
  const token = await getAccessToken()

  if (!token) {
    throw new Error("No autenticado")
  }

  const res = await fetch(
    `${API_URL}/api/authentication/users/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Error obteniendo usuarios")
  }

  return res.json()
}
