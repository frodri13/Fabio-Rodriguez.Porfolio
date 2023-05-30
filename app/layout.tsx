import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import DarkModeToggle from '@/components/DarModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabio Rodriguez Porfolio',
  description: 'Previews of my projects and contact info.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[rgb(36,36,36)] dark:text-white 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-violet-300 dark:scrollbar-thumb-orange-300`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
