import  Notification from '@/components/Notification'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// import {QueryClientProvider, QueryClient} from "@tanstack/react-query"

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Grubz',
  description: 'Want food? we got Food',
}

// const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
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
  )
}
