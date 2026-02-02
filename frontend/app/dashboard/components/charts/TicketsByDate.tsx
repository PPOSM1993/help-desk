import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function TicketsByDate() {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-semibold">Tickets por fecha</h3>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        📈 Tickets creados por día (chart aquí)
      </CardContent>
    </Card>
  )
}
