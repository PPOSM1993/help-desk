
import { ColumnDef } from "@tanstack/react-table"
import { UserActions } from "./UsersActions"
import { User } from "../types/users"



export const getColumns = (
  onEdit: (user: User) => void
): ColumnDef<User>[] => [
    {
      accessorKey: "id",
      header: "Nº",
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: "rut",
      header: "RUT",
      cell: ({ row }) => row.original.rut,
    },
    {
      accessorKey: "first_name",
      header: "Nombre",
      cell: ({ row }) => row.original.first_name,
    },
    {
      accessorKey: "last_name",
      header: "Apellido",
      cell: ({ row }) => row.original.last_name,
    },

    {
      accessorKey: "username",
      header: "Usuario",
      cell: ({ row }) => row.original.username,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => row.original.email,
    },
    {
      accessorKey: "role",
      header: "Rol",
      cell: ({ row }) => row.original.role,
    },
    {
      accessorKey: "is_active",
      header: "Activo",
      cell: ({ row }) => row.original.is_active,
    },
    {
      id: "actions",
      header: "Acciones",
      cell: ({ row }) => (
        <UserActions
          user={row.original}
          onEdit={onEdit}
        />
      ),
    },
  ]
