import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useLang, type Bilingual } from '@/i18n'
import { useLang } from '@/i18n'

export function CallToAction() {
  const { t, pick } = useLang()
  return (
    <section className="px-5 py-20">
      <div className="bg-brand relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-14 text-center text-white md:px-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10" />
        <h2 className="relative text-3xl font-extrabold md:text-4xl"> {/* This is how to make a bilingual  */}
          { t(
            'Have a process to automate or an idea to build?',
            '¿Tiene un proceso que automatizar o una idea para construir?'
          )}
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-white/85">
          {t(
            'Tell us what’s slowing you down. We’ll come back with a clear plan, a timeline, and an estimate — no jargon, no obligation.',
            'Cuéntenos qué lo está frenando. Volveremos con un plan claro, un cronograma y un presupuesto, sin tecnicismos y sin compromiso.'
          )}
        </p>
        <Link
          to="/contact"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-blue-brand shadow-lg transition hover:-translate-y-0.5"
        >
          {t('Start a conversation', 'Iniciar una conversación')} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
