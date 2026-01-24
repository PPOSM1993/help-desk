"use client"
import { useForm } from "react-hook-form"

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
import { Label } from "@radix-ui/react-label"
import { LogIn, MoveLeftIcon } from "lucide-react"
import Link from "next/link"


type LoginFormValues = {
    email: string
    password: string
}


export default function LoginForm() {
    const form = useForm<LoginFormValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    })
    return (
        <>
            <div className="flex flex-col  space-y-3 border-b border-gray-200 bg-white px-4 py-6 text-center">
                <div className="mb-6 space-y-2 text-center">
                    <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
                    <p className="text-sm text-muted-foreground">
                        Ingresa tus credenciales para acceder
                    </p>
                </div>
                <Form {...form} >
                    <form action="" className="space-y-4">
                        {/* Email */}

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md">Nombre de Usuario</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Ingrese Nombre de Usuario"
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
                                    <FormLabel className="text-md">Contraseña</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Enter Password"
                                            className="rounded-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-start">
                            <div className="w-full">
                                <Button type="submit" className="h-8 w-full bg-green-600 hover:bg-green-600 text-white rounded-none border-none cursor-pointer">
                                    <LogIn className="mr-2 h-4 w-4" />
                                    Iniciar sesión
                                </Button>


                            </div>
                        </div>

                        <Link href="/auth/register" className="m-4 text-sm text-muted-foreground">
                            No tienes una cuenta?
                        </Link>

                    </form>


                    <Button
                        className="h-8 w-full rounded-none border-none cursor-pointer"
                        variant="secondary"
                    >
                        <MoveLeftIcon />
                        Volver a Inicio
                    </Button>
                </Form>
            </div>
        </>
    )
}