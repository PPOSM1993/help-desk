"use client"

import Link from "next/link"
import { Home, Ticket, Users, Settings } from "lucide-react"
import Image from "next/image"

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Tickets", href: "/tickets", icon: Ticket },
  { label: "Usuarios", href: "/users", icon: Users },
  { label: "Configuración", href: "/settings", icon: Settings },
]

type Props = {
  collapsed?: boolean
}

export function Sidebar({ collapsed }: Props) {
  return (
    <aside
      className={`
        border-r bg-background min-h-screen p-4
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png"
          alt="Mesa de Ayuda"
          width={collapsed ? 40 : 160}
          height={100}
        />
      </div>

      <nav className="space-y-2">
        {menuItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`
              flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted transition
              ${collapsed ? "justify-center" : "gap-3"}
            `}
          >
            <Icon className="h-5 w-5" />

            {!collapsed && (
              <span className="font-medium">
                {label}
              </span>
            )}
          </Link>
        ))}
      </nav>

    </aside>
  )
}
