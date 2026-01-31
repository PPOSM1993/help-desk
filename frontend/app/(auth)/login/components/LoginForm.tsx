"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { LogIn, MoveLeftIcon } from "lucide-react"
import { login } from "@/lib/api/auth"

type LoginFormValues = {
  username: string
  password: string
}

export default function LoginForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const backPage = () => {
    router.push("/")
  }
  const onSubmit = async (values: LoginFormValues) => {
    try {
      const data = await login(values)

      // tokens
      localStorage.setItem("access", data.access)
      localStorage.setItem("refresh", data.refresh)

      toast.success("Bienvenido", {
        description: "Has iniciado sesión correctamente",
      })

      router.push("/dashboard")
    } catch (error: any) {

      toast.error("Error al iniciar sesión", {
        description: error.message || "Credenciales incorrectas",
      })
      console.log("LOGIN ERROR:", error);
      setErrorMessage(error.message);
    }
  }


  return (
    <div className="flex flex-col space-y-3 border-b border-gray-200 bg-white px-4 py-6 text-center">
      {/* HEADER */}
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
        <p className="text-sm text-muted-foreground">
          Ingresa tus credenciales para acceder
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* USERNAME */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">
                  Nombre de Usuario
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Ingrese nombre de usuario"
                    className="rounded-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PASSWORD */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">
                  Contraseña
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="rounded-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* BACKEND ERROR */}
          {errorMessage && (
            <div className="rounded-md bg-red-50 px-4 py-2 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* SUBMIT */}
          <Button
            type="submit"
            className="h-10 w-full bg-green-600 text-white rounded-none hover:bg-green-600"
            disabled={isLoading}
          >
            <LogIn className="mr-2 h-4 w-4" />
            {isLoading ? "Ingresando..." : "Iniciar sesión"}
          </Button>

          {/* REGISTER */}
          <Link
            href="/register"
            className="block text-sm text-muted-foreground"
          >
            ¿No tienes una cuenta?
          </Link>
        </form>
      </Form>

      {/* BACK TO HOME */}
      <Button
        className="h-10 w-full rounded-none"
        variant="secondary"
        onClick={backPage}
      >
        <MoveLeftIcon className="mr-2 h-4 w-4" />
        Volver a inicio
      </Button>
    </div>
  )
}
