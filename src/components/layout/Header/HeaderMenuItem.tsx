import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router'

import type { MenuItem } from '../../../data/navigation'

type HeaderMenuItemProps = {
  menuItem: MenuItem
}

function MenuLink({
  item,
  className,
}: {
  item: MenuItem
  className: string
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {item.label}
      </a>
    )
  }

  return (
    <Link to={item.href} className={className}>
      {item.label}
    </Link>
  )
}

export function HeaderMenuItem({ menuItem }: HeaderMenuItemProps) {
  const hasChildren = Boolean(menuItem.children?.length)

  return (
    <li className="relative group">
      <div className="flex items-center gap-1">
        <MenuLink
          item={menuItem}
          className="text-sm font-semibold text-white transition hover:text-[var(--color-primary)]"
        />

        {hasChildren && (
          <ChevronDown
            size={16}
            className="text-white transition group-hover:text-[var(--color-primary)]"
          />
        )}
      </div>

      {hasChildren && (
        <div className="invisible absolute left-1/2 top-full z-[1001] min-w-[260px] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-2xl bg-white p-3 shadow-xl">
            {menuItem.children?.map((child) => (
              <MenuLink
                key={child.href}
                item={child}
                className="block rounded-xl px-4 py-3 text-sm font-bold text-[var(--color-dark)] transition hover:bg-gray-100 hover:text-[var(--color-primary)]"
              />
            ))}
          </div>
        </div>
      )}
    </li>
  )
}