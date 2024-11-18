'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DashboardData {
  expenses: any[]
  expensesToday: number
  expensesThisWeek: number
  expensesThisMonth: number
  mostSpentCategory: string
  mostUsedPaymentMethod: string
  categorySums: Record<string, number>
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | undefined>(undefined)

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (status === 'loading') return
      if (status === 'unauthenticated') {
        setError('You must be logged in to view this page')
        setLoading(false)
        return
      }

      try {
        const queryParams = new URLSearchParams()
        if (dateRange?.from) queryParams.append('startDate', dateRange.from.toISOString())
        if (dateRange?.to) queryParams.append('endDate', dateRange.to.toISOString())

        const response = await fetch(`/api/expenses?${queryParams}`)
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data')
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

    fetchDashboardData()
  }, [dateRange, status])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!dashboardData) {
    return <div>No data available. Start tracking your expenses!</div>
  }

  const { expensesToday, expensesThisWeek, expensesThisMonth, mostSpentCategory, mostUsedPaymentMethod, categorySums } = dashboardData

  const pieChartData = Object.entries(categorySums).map(([name, value]) => ({ name, value }))

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name}!</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${expensesToday.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${expensesThisWeek.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${expensesThisMonth.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Expense Statistics</CardTitle>
          <CardDescription>
            {dateRange ? 
              `From ${dateRange.from.toLocaleDateString()} to ${dateRange.to.toLocaleDateString()}` : 
              "Current Month"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm font-medium">Most Spent Category</p>
              <p className="text-2xl font-bold">{mostSpentCategory}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Most Used Payment Method</p>
              <p className="text-2xl font-bold">{mostUsedPaymentMethod}</p>
            </div>
          </div>
          <DatePickerWithRange setDateRange={setDateRange} />
          <div className="mt-4 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}