'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/experience',
      text: 'Experience',
    },
    {
      path: '/work',
      text: 'Projects',
    },
    {
      path: '/about',
      text: 'About',
    },
  ]

  return (
    <div className="text-text fixed left-0 top-5 z-50 w-full">
      <nav className="mx-auto flex w-[750px] gap-5 rounded-base border-2 border-main bg-main/60  p-2.5 px-5 text-sm font-base  shadow-base shadow-main backdrop-blur-lg sm:text-base">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-text text-text rounded-base border-2 px-2 py-1 transition-colors ',
                path === link.path ? 'border-text' : 'border-transparent',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
