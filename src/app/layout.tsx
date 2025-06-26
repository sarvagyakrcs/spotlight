import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import { Analytics } from "@vercel/analytics/react"


import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sarvagya Kumar',
    default:
      'Sarvagya Kumar - Software developer, freelancer, and part time batman',
  },
  description:
    'I\'m Sarvagya, a CSE Student and Freelancer based in Bangalore, Karnataka.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased dark" suppressHydrationWarning>
      <body className="flex h-full bg-neutral-50 dark:bg-zinc-950/70 font-sans">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
