import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <Link to="/" aria-label="Curio Solutions home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-btn"
              activeProps={{ className: 'active', 'aria-current': 'page' }}
              activeOptions={{ exact: item.to === '/' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full p-2 text-ink hover:bg-slate-100 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1.5 border-t border-slate-200 bg-white px-5 py-4 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-btn"
              activeProps={{ className: 'active', 'aria-current': 'page' }}
              activeOptions={{ exact: item.to === '/' }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
