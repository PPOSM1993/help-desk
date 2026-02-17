"use client"

import { User } from "../types/users"


interface Props {
  users: User[]
}

export default function UsersTable({ users }: Props) {
  if (!users.length) {
    return <p>No hay usuarios registrados.</p>
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Username</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Rol</th>
            <th className="p-3 text-left">Activo</th>
            <th className="p-3 text-left">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.username}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">
                {user.is_active ? "Sí" : "No"}
              </td>
              <td className="p-3">
                {new Date(user.date_joined).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
