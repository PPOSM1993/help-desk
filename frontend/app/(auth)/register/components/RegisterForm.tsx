"use client"

import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
}

    from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { LogIn, MoveLeftIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"


type RegisterFormValues = {
    name: string
    email: string
    password: string
}


export default function RegisterForm() {
    const form = useForm<RegisterFormValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    return (
        <>
            <div className="flex flex-col  space-y-3 border-b border-gray-200 bg-white px-4 py-6 text-center">
                <div className="mb-6 space-y-2 text-center">
                    <h1 className="text-2xl font-semibold">Crear Usuario</h1>
                </div>
                <Form {...form} >
                    <form action="">

                    </form>
                </Form>
            </div>
        </>
    )
}