import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { prisma } from '@/lib/prisma'
import { authOptions } from '../auth/[...nextauth]/route'



interface Expense {
  id: string
  amount: number
  category: string
  date: Date
  paymentMethod: string
  userId: string
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user?.id) {
    console.log('No session or user ID found:', session) //Debugging
    return new NextResponse(
      JSON.stringify({ error: 'You must be logged in to view expenses.' }),
      { status: 401 }
    )
  }

  const { searchParams } = new URL(request.url)
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  try {
    const expenses: Expense[] = await prisma.expense.findMany({
      where: {
        userId: session.user.id,
        date: {
          gte: startDate ? new Date(startDate) : undefined,
          lte: endDate ? new Date(endDate) : undefined,
        },
      },
      orderBy: {
        date: 'desc'
      }
    })

    const today = new Date()
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())

    const expensesToday = expenses.filter((e: Expense) => e.date.toDateString() === today.toDateString())
    const expensesThisWeek = expenses.filter((e: Expense) => e.date >= oneWeekAgo)
    const expensesThisMonth = expenses.filter((e: Expense) => e.date >= oneMonthAgo)

    const categorySums = expenses.reduce<Record<string, number>>((acc, expense: Expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount
      return acc
    }, {})

    const paymentMethodSums = expenses.reduce<Record<string, number>>((acc, expense: Expense) => {
      acc[expense.paymentMethod] = (acc[expense.paymentMethod] || 0) + expense.amount
      return acc
    }, {})

    const mostSpentCategory = Object.entries(categorySums).reduce<[string, number]>(
      (a, b) => (a[1] > b[1] ? a : b),
      ["", 0] // Initial value
    )[0];
    
    const mostUsedPaymentMethod = Object.entries(paymentMethodSums).reduce<[string, number]>(
      (a, b) => (a[1] > b[1] ? a : b),
      ["", 0] // Initial value
    )[0];

    return NextResponse.json({
      expenses,
      expensesToday: expensesToday.reduce((sum: number, e: Expense) => sum + e.amount, 0),
      expensesThisWeek: expensesThisWeek.reduce((sum: number, e: Expense) => sum + e.amount, 0),
      expensesThisMonth: expensesThisMonth.reduce((sum: number, e: Expense) => sum + e.amount, 0),
      mostSpentCategory,
      mostUsedPaymentMethod,
      categorySums,
    })
  } catch (error) {
    console.error('Failed to fetch expenses:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch expenses' }),
      { status: 500 }
    )
  }
}