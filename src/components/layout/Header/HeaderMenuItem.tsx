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
                <div className="invisible absolute left-1/2 top-full min-w-[240px] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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