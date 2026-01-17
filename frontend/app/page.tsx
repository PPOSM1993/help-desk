import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogIn, User2, UserPlus } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center gap-16 px-6 py-32 text-center sm:text-left">

        {/* Logo / Branding */}
        <div className="flex flex-col items-center gap-6 sm:items-center">
          <Image
            src="/logo.png" // opcional, puedes cambiarlo
            alt="Mesa de Ayuda"
            width={400}
            height={300}
          />

          <h1 className="max-w-xl text-4xl text-center font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
            Sistema de Mesa de Ayuda
          </h1>

          <p className="max-w-xl text-lg text-center leading-8 text-zinc-600 dark:text-zinc-400">
            Plataforma centralizada para la gestión de tickets de soporte,
            seguimiento de incidencias y atención eficiente a usuarios.
          </p>
        </div>

        {/* CTA */}
        <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-start">
          <Link href="/login" className="w-full">
            <Button className="h-12 w-full rounded-sm text-base">
              <LogIn className="mr-2 h-4 w-4" />
              Iniciar sesión
            </Button>
          </Link>

          <Link href="/register" className="w-full">
            <Button
              variant="outline"
              className="h-12 w-full rounded-sm text-base"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Crear cuenta
            </Button>
          </Link>
        </div>

      </main>
    </div>
  )
}
