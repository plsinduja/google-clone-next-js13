import './globals.css'
import { Inter } from 'next/font/google'
import Head from './Head'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
