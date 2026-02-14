"use client"

import React from "react"

interface LoadingProps {
    error: Error
    reset: () => void
}

export default function Loading({ error, reset }: LoadingProps) {
    return (
        <>
            Loading
        </>
    )
}