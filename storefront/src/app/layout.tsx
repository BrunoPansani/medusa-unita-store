import { getBaseURL } from "@/lib/util/env"
import { Toaster } from "@medusajs/ui"
import { Analytics } from "@vercel/analytics/next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import { Metadata } from "next"
import "@/styles/globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Unitá Porcelanas — Atacado B2B",
    template: "%s | Unitá Porcelanas",
  },
  description:
    "Loja B2B de canecas de porcelana para atacado e revenda. Fábrica própria em Pedreira, SP.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-mode="light" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <main className="relative">{props.children}</main>
        <Toaster className="z-[99999]" position="bottom-left" />
        <Analytics />
      </body>
    </html>
  )
}
