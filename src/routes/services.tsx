import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check } from 'lucide-react'
import services from '@/data/services'
import { PageHeader } from '@/components/PageHeader'
import { ServiceIcon } from '@/components/ServiceIcon'
import { CallToAction } from '@/components/CallToAction'
import type { Bilingual } from '@/i18n'
export interface Service {
  id: string
  icon: ServiceIcon
  title: Bilingual
  tagline: Bilingual
  description: Bilingual
  features: Array<Bilingual>
}

export const Route = createFileRoute('/services')({
  head: () => ({ meta: [{ title: 'Services — Curio Solutions' }] }),
  component: ServicesPage,
})

function ServicesPage() {
  const { t, pick } = useLang()
  return (
    <>
      <PageHeader
        eyebrow={t("Services", "Servicios")}
        title={<>{t("Everything you need to", "Todo lo que necesita para")} <span className="text-brand">{t("work smarter", "trabajar inteligentemente")}</span></>}
        intro={t("From automating everyday tasks to launching a brand-new website or app, we partner with you end to end.", "Desde automatizar tareas cotidianas al desarrollo de un website personalizado o una aplicacion, te acompañamos todo el trayecto.")}
      />

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-20">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-28 grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 md:grid-cols-[1.2fr_1fr] md:p-12"
          >
            <div>
              <div className="flex items-center gap-4">
                <ServiceIcon kind={s.icon} />
                <span className="font-display text-sm font-bold text-ink-soft">0{i + 1}</span>
              </div>
              <h2 className="mt-6 text-3xl font-extrabold">{pick(s.title)}</h2>
              {s.features.map((f) => <li>{pick(f)}</li>)}
              <p className="text-brand mt-2 text-lg font-bold">{s.tagline}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{s.description}</p>
              <Link to="/contact" className="btn-primary mt-8">
                {t('Discuss your project', 'Hablemos de su proyecto')} <ArrowRight size={16} />
              </Link>
            </div>
            <ul className="space-y-3 self-center rounded-3xl bg-mist p-7">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-3 font-medium">
                  <span className="bg-brand mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CallToAction />
    </>
  )
}
