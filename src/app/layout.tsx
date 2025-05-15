// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next' // ✅ Import Metadata type

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kyle Cervantes',
  description: 'My personal developer portfolio.',
  icons: {
    icon: '/images/Profile.png', // ✅ Make sure this path exists in the /public folder
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
