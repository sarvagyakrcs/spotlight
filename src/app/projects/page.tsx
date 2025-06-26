import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Toolplane',
    description:
      'Toolplane is a Swiss Army knife for developers—offering blazing-fast, no-signup web scrapers and utilities like Reddit, Amazon, Bing scrapers, Markdown converters, and QR/password generators. Built to save time and avoid the hassle of bot-fighting.',
    link: { href: 'https://toolplane.xyz', label: 'toolplane.xyz' },
    category: 'Web Tools',
  },
  {
    name: 'web-to-md',
    description:
      'web-to-md turns any webpage into clean, readable Markdown instantly. With built-in analytics and open-source spirit, it&apos;s a must-have for content preservation, blogging, and fast documentation.',
    link: { href: 'https://web2md.site', label: 'web2md.site' },
    category: 'Conversion Tools',
  },
  {
    name: 's0.dev',
    description:
      'Introducing S0, an innovative system that combines vector search and generative AI to bridge the gap between design inspiration and implementation, enabling rapid UI development through intelligent component search and generation.',
    link: { href: 'https://github.com/sarvagyakrcs/s0.dev', label: 's0.dev' },
    category: 'AI Tools',
  },
  {
    name: 'GYC - Git Your Code',
    description:
      'Git Your Code implements a cutting-edge Retrieval-Augmented Generation (RAG) architecture designed for deep semantic analysis of GitHub repositories. The system leverages vector embeddings, natural language processing, and machine learning to provide intelligent code comprehension and query capabilities.',
    link: { href: 'https://github.com/sarvagyakrcs/git-your-code', label: 'GYC-SaaS' },
    category: 'Developer Tools',
  },
  {
    name: 'Kuro',
    description:
      'Kuro is a web application that allows users to create Udemy-like courses for free using AI and YouTube videos.',
    link: { href: 'https://github.com/sarvagyakrcs/kuro', label: 'github.com' },
    category: 'Education',
  },
  {
    name: 'Apshabd',
    description:
      'The Profanity Detection API is a web service designed to detect and flag profane language in text messages. This project leverages vector search technologies to accurately identify offensive language.',
    link: { href: 'https://github.com/sarvagyakrcs/apshabd.io', label: 'apshabd.io' },
    category: 'API Services',
  },
  {
    name: 'IEEE: Virtual Companion Chatbot',
    description:
      'This research introduces a novel virtual companion chatbot designed to provide emotional support and foster social interaction.',
    link: { href: 'https://ieeexplore.ieee.org/document/10816756', label: 'IEEE' },
    category: 'Research',
  },
  {
    name: 'Youdemy',
    description:
      'YouDemy turns lengthy YouTube courses into organized, Udemy-style learning experiences with AI-powered module breakdowns and progress tracking.',
    link: { href: 'https://github.com/sarvagyakrcs/youdemy', label: 'github.com' },
    category: 'Education',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Project({ project }: { project: { name: string; description: string; link: { href: string; label: string }; category: string } }) {
  return (
    <Card as="article">
      <Card.Title href={project.link.href}>
        {project.name}
      </Card.Title>
      <Card.Eyebrow decorate>
        {project.category}
      </Card.Eyebrow>
      <Card.Description>{project.description}</Card.Description>
      <Card.Cta>View project</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I&apos;ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I&apos;ve made trying to put my dent in the universe."
      intro="I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </SimpleLayout>
  )
}
