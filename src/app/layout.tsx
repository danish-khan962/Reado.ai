import type { Metadata } from "next"
import {
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
  Merriweather,
} from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { ThemeProvider } from "@/components/theme/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair-display",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Reado",
  description: "AI Powered Reading Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        playfairDisplay.variable,
        merriweather.variable,
        inter.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full cursor-none">
        <ClerkProvider>
            <SmoothCursor />
            {children}
        </ClerkProvider>
      </body>
    </html>
  )
}