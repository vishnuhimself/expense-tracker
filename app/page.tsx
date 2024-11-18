'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PieChartIcon as ChartPie, LockKeyhole, DollarSign, BarChart3 } from 'lucide-react';

const features = [
  { name: 'Expense Tracking', description: 'Easily log and categorize your expenses', icon: DollarSign },
  { name: 'Visual Analytics', description: 'Gain insights with beautiful charts and graphs', icon: ChartPie },
  { name: 'Secure Payments', description: 'Your financial data is always protected', icon: LockKeyhole },
  { name: 'Budget Forecasting', description: 'Plan ahead with our AI-powered predictions', icon: BarChart3 },
];

const faqs = [
  {
    question: "How does the 7-day free trial work?",
    answer: "You get full access to all features for 7 days. No credit card required. Cancel anytime."
  },
  {
    question: "Can I export my expense data?",
    answer: "Yes, you can export your data in CSV or PDF format at any time."
  },
  {
    question: "Is my financial information secure?",
    answer: "We use bank-level encryption to ensure your data is always protected."
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "This app has revolutionized how I track my business expenses. Highly recommended!"
  },
  {
    name: "Sarah Lee",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote: "The visual analytics help me understand my spending patterns like never before."
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                ExpenseTracker
              </Link>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/auth/signin" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:bg-gray-700"
              >
                Sign in
              </Link>
              <Link 
                href="/auth/signup" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Master Your Finances with ExpenseTracker
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Intelligent expense tracking and budgeting for the modern era
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/auth/signup" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-400 bg-blue-900/20 hover:bg-blue-900/30 md:text-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">Powerful Features for Your Financial Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <motion.div 
                  key={feature.name} 
                  className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-600/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-600/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold mb-6">Ready to Take Control of Your Finances?</h2>
            <p className="text-xl text-gray-300 mb-10">Start your 7-day free trial today. No credit card required.</p>
            <Link 
              href="/auth/signup" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
            >
              Begin Your Financial Journey
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}