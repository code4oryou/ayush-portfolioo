import './globals.css'
import { Crimson_Pro, JetBrains_Mono } from 'next/font/google'

const crimson = Crimson_Pro({ subsets: ['latin'] })
const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayush Mandal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${crimson.className} bg-[var(--paper)] text-[var(--ink)] dark:bg-[var(--dark-bg)] dark:text-[var(--dark-text)]`}>
        {children}
      </body>
    </html>
  )
}
