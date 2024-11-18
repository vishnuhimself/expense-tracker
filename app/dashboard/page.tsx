'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardData {
  expenses: any[]
  expensesToday: number
  expensesThisWeek: number
  expensesThisMonth: number
  mostSpentCategory: string
  mostUsedPaymentMethod: string
  categorySums: Record<string, number>
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }

    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/expenses')
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to fetch dashboard data')
        }
        const data = await response.json()
        setDashboardData(data)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
        setError(errorMessage)
      } finally {
        setLoading(false)
      }
    }

    if (status === 'authenticated') {
      fetchDashboardData()
    }
  }, [status, router])

  if (status === 'loading' || loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!dashboardData) {
    return <div>No data available. Start tracking your expenses!</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name}!</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Expenses Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${dashboardData.expensesToday.toFixed(2)}</div>
          </CardContent>
        </Card>
        {/* Add more cards for weekly and monthly expenses */}
      </div>
    </div>
  )
}