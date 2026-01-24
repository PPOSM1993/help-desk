"use client"

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

export default function LoginForm() {
    return (
        <>
            <div className="">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-zinc-50">
                    Iniciar sesión
                </h1>
            </div>
        </>
    )
}