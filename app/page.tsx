import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Expense Tracker</h1>
      <div className="flex items-center gap-4">
        <Link href="/auth/signin">
          <Button variant="ghost" size="sm">Sign in</Button>
        </Link>
        <Link href="/auth/signup">
          <Button size="sm">Get Started</Button>
        </Link>
      </div>
    </main>
  )
}