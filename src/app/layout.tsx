import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TFC FRUITS - Freshness Delivered Daily',
  description: 'Premium quality farm-fresh fruits delivered to your doorstep. Based in Vengara, Gandidas Padi, Malappuram. Wide selection of local and exotic varieties.',
  keywords: 'fruits, fresh fruits, fruit delivery, Malappuram, Vengara, organic fruits, farm fresh',
  authors: [{ name: 'TFC FRUITS' }],
  openGraph: {
    title: 'TFC FRUITS - Freshness Delivered Daily',
    description: 'Premium quality farm-fresh fruits delivered to your doorstep',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}