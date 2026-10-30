import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { useLang, type Bilingual } from '@/i18n'
import { LanguageToggle } from './LanguageToggle'

export const navItems = [
  { to: '/', label: { en: 'Home', es: 'Inicio' } },
  { to: '/projects', label: { en: 'Projects', es: 'Proyectos' } },
  { to: '/services', label: { en: 'Services', es: 'Servicios' } },
  { to: '/about', label: { en: 'About', es: 'Nosotros' } },
  { to: '/contact', label: { en: 'Contact', es: 'Contacto' } },
] as const satisfies ReadonlyArray<{ to: string; label: Bilingual }>

export function Header() {
  const [open, setOpen] = useState(false)
  const { t, pick } = useLang()

  return (
    <meta name="google" content="notranslate" />
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <Link to="/" aria-label="Curio Solutions home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1.5 md:flex">    {/* THIS IS THE MAIN BROWSER SETTINGS */}
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-btn"
              activeProps={{ className: 'active', 'aria-current': 'page' }}
              activeOptions={{ exact: item.to === '/' }}
            >
              {pick(item.label)}
            </Link>
          ))}
          <LanguageToggle />
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
          aria-label="Mobile" //** THIS IS FOR MOBILE BROWSERS
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
              {pick(item.label)}
            </Link>
          ))}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="rounded-full p-2 text-ink hover:bg-slate-100"
              aria-label={open ? t('Close menu', 'Cerrar menú') : t('Open menu', 'Abrir menú')}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
