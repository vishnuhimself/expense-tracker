'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "./ui/button"

export function ClientAuthCheck() {
  const { data: session } = useSession()

  if (session) {
    return (
      <Link href="/dashboard">
        <Button size="sm">Dashboard</Button>
      </Link>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <Link href="/auth/signin">
        <Button variant="ghost" size="sm">Sign in</Button>
      </Link>
      <Link href="/auth/signup">
        <Button size="sm">Get Started</Button>
      </Link>
    </div>
  )
}