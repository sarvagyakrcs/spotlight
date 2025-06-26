import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-slate-900 font-bold text-slate-50 hover:bg-slate-800 active:bg-slate-900 active:text-slate-50/90 dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-800 dark:active:text-slate-50/90 uppercase tracking-wider border-2 border-slate-900 dark:border-slate-800 hover:border-slate-800 dark:hover:border-slate-700 shadow-lg hover:shadow-xl',
  secondary:
    'bg-transparent font-semibold text-slate-900 hover:bg-slate-100 active:bg-slate-200 active:text-slate-900/90 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:active:bg-slate-800/70 dark:active:text-slate-50/90 uppercase tracking-wider border-2 border-slate-400 dark:border-slate-600 hover:border-slate-500 dark:hover:border-slate-500 shadow-md hover:shadow-lg',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center py-2 px-4 text-xs outline-offset-2 transition active:transition-none font-mono',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
