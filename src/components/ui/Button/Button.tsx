import type { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    href?: string
    className?: string
}

export function Button({ children, href, className = '' }: ButtonProps) {
    const classes =
        `inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-[var(--color-white)] transition hover:bg-[var(--color-primary-hover)] ${className}`

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