import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LiveChat from '@/components/LiveChat'
import AdminTopBar from '@/components/admin/AdminTopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EmailVerse - Advanced Email Marketing Platform',
  description: 'Scale your email marketing with AI-powered tools, automation, and analytics. Send personalized campaigns that convert.',
  keywords: 'email marketing, automation, AI, analytics, campaigns, newsletters',
  authors: [{ name: 'EmailVerse Team' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'EmailVerse - Advanced Email Marketing Platform',
    description: 'Scale your email marketing with AI-powered tools, automation, and analytics.',
    type: 'website',
    url: 'https://emailverse.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminTopBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <LiveChat />
      </body>
    </html>
  )
}