"use client"

import  Notification from "../components/Notification"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// import {QueryClientProvider, QueryClient} from "@tanstack/react-query"

import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Grubz',
//   description: 'Want food? we got Food',
// }

const queryClient = new QueryClient()

// const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    // <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <Notification />
          <Navbar />
          {children}
          <Footer />
          </body>
      </html>
    // </QueryClientProvider>
=======
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navbar />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        </body>
    </html>
>>>>>>> d4be5785325845e0762f5ee88df19c0c46433190
  )
}
