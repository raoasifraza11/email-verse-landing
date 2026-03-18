import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vxm7fwhczt");
          `}
        </Script>

        {/* Google Tag */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-T0N3ZSNX5J" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T0N3ZSNX5J');
          `}
        </Script>

        {/* Instantly */}
        <Script id="vtag-ai-js" strategy="afterInteractive" src="https://r2.leadsy.ai/tag.js" data-pid="1lN5aFVQa57afvgnx" data-version="062024" />
      </head>
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