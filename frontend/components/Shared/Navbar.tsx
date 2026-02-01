"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Menu, Search } from "lucide-react"

type Props = {
  onMenuClick?: () => void
}

export function Navbar({ onMenuClick }: Props) {
  return (
    <header className="border-b bg-background px-6 py-3">
      <div className="flex items-center gap-4">

        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Buscador */}
        <div className="flex-1 max-w-sm relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Buscar..."
            className="pl-8 bg-muted/50"
          />
        </div>

      </div>
    </header>
  )
}
