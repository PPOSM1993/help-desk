import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-semibold">Actividad reciente</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm">
          🎫 <strong>#123</strong> Ticket creado — hace 10 min
        </div>
        <div className="text-sm">
          🔄 <strong>#120</strong> Ticket actualizado — hace 1h
        </div>
        <div className="text-sm">
          💬 <strong>#118</strong> Nueva respuesta — ayer
        </div>
      </CardContent>
    </Card>
  )
}
