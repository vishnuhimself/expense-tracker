import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChartPieIcon, LockClosedIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  { name: 'Expense Tracking', description: 'Easily log and categorize your expenses', icon: CurrencyDollarIcon },
  { name: 'Visual Analytics', description: 'Gain insights with beautiful charts and graphs', icon: ChartPieIcon },
  { name: 'Secure Payments', description: 'Your financial data is always protected', icon: LockClosedIcon },
  { name: 'Budget Forecasting', description: 'Plan ahead with our AI-powered predictions', icon: ChartBarIcon },
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
    <div className="bg-gray-900 text-white">
      <Head>
        <title>ExpenseTracker - Manage Your Finances with Ease</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold mb-6"
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
            >
              <Link href="/auth/signin" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Start Your Free Trial
              </Link>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 animate-pulse"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">Powerful Features for Your Financial Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <motion.div 
                  key={feature.name} 
                  className="bg-gray-700 p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
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
        <section className="py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-700 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
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
            <Link href="/auth/signin" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
              Begin Your Financial Journey
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}