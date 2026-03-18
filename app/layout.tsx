import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
        
        {/* Tawk.to Chat Integration */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69ba6f7965362b1c3680a9b1/1jk046snf';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}