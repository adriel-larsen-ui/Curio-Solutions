import { createFileRoute } from '@tanstack/react-router'
import { Compass, HeartHandshake, Lightbulb, Target } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { LogoMark } from '@/components/Logo'
import { CallToAction } from '@/components/CallToAction'

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: 'About — Curio Solutions' }] }),
  component: AboutPage,
})

const values = [
  { icon: Lightbulb, title: 'Curiosity first', text: 'We ask a lot of questions. Understanding your business is how we find the right solution.' },
  { icon: Target, title: 'Outcomes over output', text: 'We measure success in hours saved, customers won, and problems solved.' },
  { icon: HeartHandshake, title: 'True partnership', text: 'Clear communication, honest timelines, and a team that picks up the phone.' },
  { icon: Compass, title: 'Built to last', text: 'Simple, maintainable technology that grows with you instead of holding you back.' },
]

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Technology with a <span className="text-brand">curious mind</span>
          </>
        }
        intro="Curio Solutions was founded on a simple idea: every business deserves technology that fits the way it actually works."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold">Our story</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
            <p>
              Too many teams spend their days copying data between spreadsheets,
              wrestling with websites that don’t represent them, or bending their
              process around software that was never built for them.
            </p>
            <p>
              We started Curio Solutions to change that. By combining workflow
              automation, thoughtful web design, and custom application
              development, we give businesses the tools to run more smoothly and
              show up better online.
            </p>
            <p>
              Every engagement starts with listening. We get curious about how you
              work, then build exactly what you need — nothing more, nothing less.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="bg-brand absolute -inset-4 rounded-[2.5rem] opacity-15 blur-2xl" />
          <div className="bg-brand relative flex aspect-square flex-col items-center justify-center rounded-[2rem] p-10 text-center text-white">
            <div className="rounded-3xl bg-white/15 p-4 backdrop-blur">
              <LogoMark size={96} />
            </div>
            <p className="mt-8 font-display text-2xl font-extrabold">Curious by nature.</p>
            <p className="font-display text-2xl font-extrabold text-white/80">Practical by design.</p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-center text-3xl font-extrabold">What we value</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-8">
                <span className="bg-brand inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
