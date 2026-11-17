import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check } from 'lucide-react'
import services from '@/data/services'
import { PageHeader } from '@/components/PageHeader'
import { ServiceIcon } from '@/components/ServiceIcon'
import { CallToAction } from '@/components/CallToAction'
import { useLang } from '@/i18n'

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
        intro={t("From automating everyday tasks to launching a brand-new website or app, we partner with you from day one.", "Desde automatizar tareas cotidianas al desarrollo de un website personalizado o una aplicación, te acompañamos todo el trayecto.")}
      />

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-20">
        {services.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-28 grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 md:grid-cols-[1.2fr_1fr] md:p-12"
          >
            <div>
              <div className="flex items-center gap-4">
                <ServiceIcon kind={s.icon} />
                <span className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft">{pick(s.tag)}</span> {/* sis the current service in the .map, so s.id gives automation, web-design or applications. Since i is no longer used, change services.map((s, i) => ( to services.map((s) => (. Otherwise TypeScript may warn about an unused variable */}
              </div>
              <h2 className="mt-6 text-3xl font-extrabold">{pick(s.title)}</h2>
              <p className="text-brand mt-2 text-lg font-bold">{pick(s.tagline)}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{pick(s.description)}</p>
              <Link to="/contact" className="btn-primary mt-8">
                {t('Discuss your project', 'Hablemos de su proyecto')} <ArrowRight size={16} />
              </Link>
            </div>
            <ul className="space-y-3 self-center rounded-3xl bg-mist p-7">
              {s.features.map((f) => (
                <li key={f.en} className="flex items-start gap-3 font-medium">
                  <span className="bg-brand mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {pick(f)}
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
