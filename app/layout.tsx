import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mitchjolly Solutions - Global Cloud Telephony That Scales With You",
  description:
    "iGCT by Mitchjolly connects you worldwide through reliable, cloud-powered voice solutions for enterprise sales teams.",
  keywords: "cloud telephony, global calling, voice solutions, iGCT, B2B sales tools, VoIP, SIP trunking",
  authors: [{ name: "Mitchjolly Solutions" }],
  openGraph: {
    title: "Mitchjolly Solutions - Global Cloud Telephony",
    description: "Reliable, cloud-powered voice solutions for enterprise sales teams",
    url: "https://mitchjolly.com",
    siteName: "Mitchjolly Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitchjolly Solutions - Global Cloud Telephony",
    description: "Reliable, cloud-powered voice solutions for enterprise sales teams",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mitchjolly Solutions",
              url: "https://mitchjolly.com",
              logo: "https://mitchjolly.com/logo.png",
              description:
                "Global cloud telephony provider offering scalable voice and calling solutions for enterprise sales teams",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tucson",
                addressRegion: "AZ",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-520-XXX-XXXX",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
