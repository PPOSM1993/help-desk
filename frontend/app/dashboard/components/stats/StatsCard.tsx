import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

type StatCardProps = {
  title: string
  value: number | string
  icon: LucideIcon
  color?: "blue" | "green" | "yellow" | "red" | "indigo" | "violet"
}

const colorMap = {
  blue: "border-l-blue-500 text-blue-600",
  green: "border-l-green-500 text-green-600",
  yellow: "border-l-yellow-500 text-yellow-600",
  red: "border-l-red-500 text-red-600",
  indigo: "border-l-indigo-500 text-indigo-600",
  violet: "border-l-violet-500 text-violet-600",
}

export function StatCard({
  title,
  value,
  icon: Icon,
  color = "blue",
}: StatCardProps) {
  return (
    <Card className="relative overflow-hidden p-4 border-l-4">
      <div className={cn("absolute right-4 top-4", colorMap[color])}>
        <Icon className="h-5 w-5" />
      </div>

      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </Card>
  )
}
