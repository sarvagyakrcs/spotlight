import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/about.jpeg'
import { MAIL, SOCIAL_URLS } from '../../../meta-data'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Sarvagya Kumar. I live in Bangalore, Karnataka, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Saravgya Kumar. I live in Bangalore, where I design the
            future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              From the very beginning, I’ve been driven by a deep curiosity and a relentless hunger for software development. Growing up, I often found myself lost in the world of coding and technology, captivated by the idea of solving complex problems and creating something meaningful. But my journey hasn’t been without its struggles.
            </p>
            <p>
              Throughout my academic career, I’ve faced self-doubt, moments of insecurity, and a lack of focus, which made it difficult to realize my potential. I’ve wrestled with poor study habits, mental fog, and the feeling of being overwhelmed by the challenges I encountered in my coursework. At times, it felt like I was falling behind my peers, struggling to overcome obstacles that seemed insurmountable.
            </p>
            <p>
              Yet, despite these challenges, my passion for software development never wavered. It became clear to me that these struggles were part of the process, not barriers to my success. They’ve shaped me into someone who doesn’t shy away from hard work, even when it’s difficult. Instead of letting setbacks define me, I’ve used them as stepping stones to push forward.
            </p>
            <p>
              As I continue to explore full-stack development, machine learning, and data analysis, I see every challenge as an opportunity to learn and grow. I know that it’s not about being perfect but about staying persistent and improving with every line of code, every project, and every lesson learned. My hunger for development is unyielding, and it fuels my desire to build innovative solutions and contribute to the tech world in meaningful ways.
            </p>
            <p>
              I’m not just looking for success; I’m looking to build something lasting, something that will make a difference. Through all the ups and downs, my focus remains clear: to push past my limitations, continuously evolve, and use my skills to create powerful, transformative software. The journey is far from easy, but I know it’s one worth taking—and with every struggle, I grow closer to the person and developer I’m meant to be.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={SOCIAL_URLS.x} icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href={SOCIAL_URLS.instagram} icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href={SOCIAL_URLS.github} icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href={SOCIAL_URLS.linkedin} icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={`mailto:${MAIL}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              { MAIL }
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
