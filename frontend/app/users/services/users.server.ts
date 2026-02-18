"use server"

import { getAccessToken } from "@/lib/auth.server"
import { User } from "../types/users"
import { cookies } from "next/headers"

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


export async function createUser(payload: any) {
  const cookieStore = cookies()
  const token = (await cookieStore).get("access_token")?.value

  if (!token) throw new Error("No token")

  const res = await fetch("http://localhost:8000/api/authentication/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })

  return res.json()
}