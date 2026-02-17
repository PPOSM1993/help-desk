export type User = {
  id: number
  email: string
  username: string
  first_name: string
  last_name: string
  rut?: string
  phone?: string
  birth_date?: string
  role: "admin" | "agent" | "client"
  is_active: boolean
  date_joined: string
}
