'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { SimpleLayout } from '@/components/SimpleLayout'

// Testimonials data - you can modify this as needed
const testimonials = [
  {
    id: 1,
    name: 'onoffmags',
    role: 'Founder',
    company: 'Discoverr - United Kingdom',
    profilePic: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4a696e33147d13c3434a5157146067c1-1747916590949/94948fab-048b-4821-8364-1b883e1c5599.png',
    rating: 5,
    date: '2024-11-15',
    content: 'Sarvagya did an outstanding job on our software development project with exceptional attention to detail and professionalism. Working with him was a breeze thanks to his politeness and high level of cooperation 👍',
    source: {
      platform: 'Fiverr',
      href: 'https://www.fiverr.com/thesarvagya?public_mode=true'
    }
  },
  {
    id: 2,
    name: 'onoffmags + repeat client',
    role: 'Founder',
    company: 'Discoverr - United Kingdom',
    profilePic: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4a696e33147d13c3434a5157146067c1-1747916590949/94948fab-048b-4821-8364-1b883e1c5599.png',
    rating: 5,
    date: '2024-11-15',
    content: `the guys exceed my expectations and delivered all in time! thanks a lot`,
    source: {
      platform: 'Fiverr',
      href: 'https://www.fiverr.com/thesarvagya?public_mode=true'
    }
  },
  {
    id: 3,
    name: 'omninetweb',
    role: 'Founder',
    company: '0mninetweb - Italy',
    profilePic: '/images/logos/omninet-logo.png',
    rating: 5,
    date: '2025-06-25',
    content: 'it was a pleasure to work with you, we are happy of the project and we will evaluate him for next work surely! highly recommended!',
    source: {
      platform: 'Fiverr',
      href: 'https://www.fiverr.com/thesarvagya?public_mode=true'
    }
  },
  {
    id: 4,
    name: 'akdiaz',
    role: '-',
    company: '-',
    rating: 5,
    date: '2024-12-10',
    content: 'He did whatever I asked perfectly',
    source: {
      platform: 'Fiverr',
      href: 'https://fiverr.com/thesarvagya?public_mode=true'
    }
  },
]

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
}

function getBackgroundColor(name: string): string {
  const colors = [
    'bg-slate-700',
    'bg-orange-600', 
    'bg-teal-600',
    'bg-amber-600',
    'bg-red-600',
    'bg-steel-600',
    'bg-neutral-700',
    'bg-slate-800',
    'bg-orange-700',
    'bg-teal-700'
  ]
  
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

function ProfilePicture({ src, name }: { src?: string; name: string }) {
  const [imageError, setImageError] = React.useState(false)
  
  if (!src || imageError) {
    const initials = getInitials(name)
    const bgColor = getBackgroundColor(name)
    
    return (
      <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center text-white font-semibold text-sm`}>
        {initials}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={`${name} profile picture`}
      width={48}
      height={48}
      className="w-12 h-12 rounded-full object-cover"
      onError={() => setImageError(true)}
    />
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  })
}

export default function Testimonials() {
  return (
    <SimpleLayout
      title="Client Testimonials"
      intro="What clients say about working with me - real feedback from real projects."
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-700 p-6 h-full flex flex-col"
            >
              {/* Header - Fixed Height */}
              <div className="flex items-center justify-between mb-4 h-12">
                <div className="flex items-center space-x-3">
                  <ProfilePicture 
                    src={testimonial.profilePic}
                    name={testimonial.name}
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs truncate">
                      {testimonial.role !== '-' ? testimonial.role : testimonial.company !== '-' ? testimonial.company : 'Client'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-xs text-gray-400 mt-1">{formatDate(testimonial.date)}</span>
                </div>
              </div>

              {/* Content - Flexible Height */}
              <div className="flex-1 mb-4">
                <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </div>

              {/* Footer - Fixed Height */}
              <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 h-8 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  {testimonial.company !== '-' && testimonial.role !== '-' && (
                    <span>{testimonial.company}</span>
                  )}
                </div>
                <Link
                  href={testimonial.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  View on {testimonial.source.platform}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
