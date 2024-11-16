import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  switch (req.method) {
    case 'GET':
      try {
        const expenses = await prisma.expense.findMany({
          where: {
            userId: session.user.id,
          },
          orderBy: {
            date: 'desc',
          },
        })
        res.status(200).json(expenses)
      } catch (error) {
        res.status(500).json({ error: 'Error fetching expenses' })
      }
      break

    case 'POST':
      try {
        const { name, amount, category, paymentMode, date, notes } = req.body
        const expense = await prisma.expense.create({
          data: {
            name,
            amount: parseFloat(amount),
            category,
            paymentMode,
            date: new Date(date),
            notes,
            userId: session.user.id,
          },
        })
        res.status(201).json(expense)
      } catch (error) {
        res.status(500).json({ error: 'Error creating expense' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
