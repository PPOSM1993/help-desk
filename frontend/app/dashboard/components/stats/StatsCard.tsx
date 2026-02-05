import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

type StatCardProps = {
  title: string
  value: number | string
  icon: LucideIcon
  variant?: "blue" | "green" | "yellow" | "red" | "indigo" | "violet"
}

const variants = {
  blue: {
    card: "bg-blue-500 border-blue-200",
    icon: "text-gray-100 bg-blue-500",
  },
  green: {
    card: "bg-green-500 border-green-200",
    icon: "text-gray-100 bg-green-500",
  },
  yellow: {
    card: "bg-yellow-500 border-yellow-200",
    icon: "text-gray-100 bg-yellow-500",
  },
  red: {
    card: "bg-red-50 border-red-200",
    icon: "text-red-600 bg-red-100",
  },
  indigo: {
    card: "bg-indigo-500 border-indigo-200",
    icon: "text-indigo-600 bg-indigo-100",
  },
  violet: {
    card: "bg-red-500 border-violet-200",
    icon: "text-gray-100 bg-red-500",
  },
}

export function StatCard({
  title,
  value,
  icon: Icon,
  variant = "blue",
}: StatCardProps) {
  const styles = variants[variant]

  return (
    <Card className={cn("border-none rounded-sm", styles.card)}>
      <CardContent className="p-4 flex flex-col items-start gap-2 cursor-pointer">
        {/* Icono */}
        <div
          className={cn(
            "p-2 rounded-md",
            styles.icon
          )}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Texto */}
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <p className="text-3xl font-bold">
          {value}
        </p>
      </CardContent>
    </Card>
  )
}
