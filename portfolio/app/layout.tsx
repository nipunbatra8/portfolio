import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Nipun Batra - Portfolio</title>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-h8xvRFvfdsLKQfN0RKxuyRHs7GcpHj.jpeg"
        />
      </head>
      <body className={cn("min-h-screen bg-background antialiased", inter.className)}>{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
