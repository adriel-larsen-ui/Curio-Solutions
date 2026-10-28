iimport { Link } from '@tanstack/react-router'
import { Logo } from './Logo'
import { navItems } from './Header'
import { useLang } from '@/i18n'

export function Footer() {
  const { t, pick } = useLang()

  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            {t(
              en: 'Workflow automation, custom websites, and personalized applications for businesses that want technology to work the way they do.',
              es: 'Automatización de procesos, sitios web a medida y aplicaciones personalizadas para empresas que quieren que la tecnología trabaje como ellas.',
            )}
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            {t('Explore', 'Explorar')}
          </h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-cyan-brand">
                  {pick(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            {t('Services', 'Servicios')}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>{t('Workflow Automation', 'Automatización de procesos')}</li>
            <li>{t('Custom Website Design', 'Diseño de sitios web a medida')}</li>
            <li>{t('Personalized Applications', 'Aplicaciones personalizadas')}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-slate-500">
          © {new Date().getFullYear()} Curio Solutions.{' '}
          {t('All rights reserved.', 'Todos los derechos reservados.')}
        </p>
      </div>
    </footer>
  )
}
