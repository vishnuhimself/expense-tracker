import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ClientAuthCheck } from '@/components/ClientAuthCheck'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="w-full border-b bg-background/95 p-4">
        <nav className="container flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            ExpenseTracker
          </Link>
          
          <ClientAuthCheck />
        </nav>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Expense Tracker</h1>
        
        <p className="text-center mb-8">
          Easily manage your expenses and track your financial goals.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/auth/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/auth/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </main>

      <footer className="mt-16 border-t">
        <div className="container mx-auto p-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ExpenseTracker. All rights reserved.
        </div>
      </footer>
    </div>
  )
}