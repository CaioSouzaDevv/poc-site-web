import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline-light' | 'outline-primary'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  className?: string
}

const variants = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-primary-hover)]',

  'outline-light':
    'border border-[var(--color-white)] bg-transparent text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-dark)]',

  'outline-primary':
    'border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes}>
      {children}
    </button>
  )
}