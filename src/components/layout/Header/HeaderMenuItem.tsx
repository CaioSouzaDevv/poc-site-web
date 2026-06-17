import { ChevronDown } from 'lucide-react'

import type { MenuItem } from '../../../data/navigation'

type HeaderMenuItemProps = {
  menuItem: MenuItem
}

export function HeaderMenuItem({
  menuItem,
}: HeaderMenuItemProps) {
  const hasChildren =
    menuItem.children &&
    menuItem.children.length > 0

  return (
    <li className="relative group">
      <a
        href={menuItem.href}
        className="flex items-center gap-1"
      >
        {menuItem.label}

        {hasChildren && (
          <ChevronDown size={16} />
        )}
      </a>

      {hasChildren && (
        <div className="absolute left-0 top-full hidden min-w-[240px] pt-4 group-hover:block">
          <div className="rounded-2xl bg-white p-3 shadow-xl">
            {menuItem.children?.map((child) => (
              <a
                key={child.href}
                href={child.href}
                className="block rounded-xl px-4 py-3 text-[var(--color-dark)] hover:bg-gray-100"
              >
                {child.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </li>
  )
}