import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      console.log('No session or user ID found:', session) // Debug log
      return new NextResponse(
        JSON.stringify({ error: 'You must be logged in to view expenses.' }),
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // For testing, return empty data structure if no expenses exist
    return NextResponse.json({
      expenses: [],
      expensesToday: 0,
      expensesThisWeek: 0,
      expensesThisMonth: 0,
      mostSpentCategory: 'None',
      mostUsedPaymentMethod: 'None',
      categorySums: {},
    })

  } catch (error) {
    console.error('Failed to fetch expenses:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch expenses' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
}