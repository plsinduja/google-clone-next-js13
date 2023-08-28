import './globals.css';
import Footer from "@/components/Footer";
import Head from './Head'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head />
      <body className="relative min-h-screen">
      {children}
      {/* Footer */}
      <Footer />
      </body>
    </html>
  )
}
