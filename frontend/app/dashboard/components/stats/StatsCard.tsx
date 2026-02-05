import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

type StatCardProps = {
  title: string
  value: number | string
  icon: LucideIcon
  variant?: "blue" | "green" | "yellow" | "red"
  onClick?: () => void
}

const variants = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-400",
  red: "bg-red-500",
}

export function StatCard({
  title,
  value,
  icon: Icon,
  variant = "blue",
  onClick,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-sm border-none text-white cursor-pointer",
        variants[variant]
      )}
      onClick={onClick}
    >
      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-3xl font-bold leading-none">{value}</h3>
        <p className="text-sm mt-1">{title}</p>
      </div>

      {/* Ícono grande decorativo */}
      <Icon className="absolute right-4 top-4 h-14 w-14 text-white/30" />

      {/* Footer */}
      <div className="bg-black/10 px-4 py-2 text-sm flex items-center justify-center gap-1 hover:bg-black/20 transition">
        Más info
        <span>→</span>
      </div>
    </Card>
  )
}
