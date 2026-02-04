"use client"

type Ticket = {
  id: number
  title: string
  status: string
  priority: string
}

export function TicketTable({ tickets }: { tickets: Ticket[] }) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Título</th>
          <th>Estado</th>
          <th>Prioridad</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(t => (
          <tr key={t.id}>
            <td>{t.title}</td>
            <td>{t.status}</td>
            <td>{t.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
