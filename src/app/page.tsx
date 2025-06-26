import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { SOCIAL_URLS } from '../../meta-data'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-slate-100 stroke-slate-400 dark:fill-slate-100/10 dark:stroke-slate-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-slate-400 dark:stroke-slate-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-slate-100 stroke-slate-400 dark:fill-slate-100/10 dark:stroke-slate-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-slate-400 dark:stroke-slate-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-slate-500 transition group-hover:fill-orange-600 dark:fill-slate-400 dark:group-hover:fill-orange-400" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="border border-slate-200 p-6 dark:border-slate-700/40"
    >
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100 font-display uppercase tracking-wider">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="EMAIL ADDRESS"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none border border-slate-300/50 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-slate-800/5 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 sm:text-sm dark:border-slate-700 dark:bg-neutral-800/50 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 font-mono text-xs uppercase tracking-wider"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-neutral-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-slate-900 dark:text-slate-100 font-display">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-slate-400 dark:text-slate-500 font-mono"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Freelance Software Developer',
      title: 'SDE',
      logo: logoPlanetaria,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'IWST-ICFRE',
      title: 'SDE Intern',
      logo: logoPlanetaria,
      start: '2023',
      end: '2024',
    },
    {
      company: 'R.V. Connect',
      title: 'Backend Engineer',
      logo: logoPlanetaria,
      start: '2023',
      end: '2023',
    },
  ]

  return (
    <div className="border border-slate-200 p-6 dark:border-slate-700/40">
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100 font-display uppercase tracking-wider">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="https://drive.google.com/file/d/1wRSo6La4t6T4F1IwKfEywPbyRbrAHpy3/view?usp=sharing" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-slate-400 transition group-active:stroke-slate-600 dark:group-hover:stroke-slate-50 dark:group-active:stroke-slate-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden bg-slate-100 sm:w-72 dark:bg-neutral-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100 font-display leading-tight">
            SOFTWARE DEVELOPER, FREELANCER, AND PART TIME BATMAN.
          </h1>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I'm Sarvagya, a CSE Student and Freelancer based in Bangalore,
            Karnataka. Dive deep into a universe where innovation, problem-solving, and cutting-edge tech collide. 
            Explore the digital creations that reshape the world, one project at a time.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href={SOCIAL_URLS.instagram}
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href={ SOCIAL_URLS.github }
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={ SOCIAL_URLS.linkedin }
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
