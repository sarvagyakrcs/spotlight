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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </head>
      <body className="flex h-full bg-neutral-100 dark:bg-neutral-950 font-sans">
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
