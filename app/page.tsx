'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BarChart3, LineChart, CreditCard } from 'lucide-react'

const features = [
  {
    title: "Easy Track Expenses",
    description: "Efficiently monitor your spending and track financial engagement with intuitive analytics.",
    icon: BarChart3,
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Real-time Analytics",
    description: "Track expenses and make data-driven decisions faster with our powerful analytics tools.",
    icon: LineChart,
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Monitor Budget",
    description: "Keep a detailed log of all your financial transactions and interactions in one place.",
    icon: CreditCard,
    image: "/placeholder.svg?height=400&width=600"
  }
]

const faqs = [
  {
    question: "Can I customize my expense categories?",
    answer: "Yes, you can fully customize your expense categories and create new ones to match your specific needs."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial with full access to all features. No credit card required."
  },
  {
    question: "How secure is my financial data?",
    answer: "We use bank-level encryption and security measures to ensure your data is always protected and private."
  },
  {
    question: "Can I export my expense data?",
    answer: "Yes, you can export your data in multiple formats including CSV, PDF, and Excel at any time."
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <nav className="container h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            ExpenseTracker
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth/signin">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container py-24 space-y-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Streamline Your
              <span className="block text-primary">Financial Management</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The all-in-one platform that empowers individuals to track, manage, and grow their finances seamlessly.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/auth/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">Learn More</Button>
            </Link>
          </motion.div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-center gap-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="relative w-40 h-8">
                    <div className="w-full h-full bg-muted rounded-md animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-24 space-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`space-y-4 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">{feature.title}</h2>
                <p className="text-lg text-muted-foreground">{feature.description}</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    Learn more
                    <LineChart className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Stats Section */}
        <section className="container py-24">
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">100K+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">$2M+</h3>
              <p className="text-muted-foreground">Expenses Tracked</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-24">
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Everything you need to know about ExpenseTracker.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container py-24">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Join thousands of users who are already managing their finances better with ExpenseTracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Features</Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">About</Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Documentation</Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Help Center</Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Security</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ExpenseTracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}