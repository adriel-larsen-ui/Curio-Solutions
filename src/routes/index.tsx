import { Link, createFileRoute } from '@tanstack/react-router' // This is a note in standard js comment
import { ArrowRight, Clock, Puzzle, ShieldCheck, Sparkles } from 'lucide-react'
import services from '@/data/services'
import projects from '@/data/projects'
import { ServiceIcon } from '@/components/ServiceIcon'
import { ProjectCard } from '@/components/ProjectCard'
import { CallToAction } from '@/components/CallToAction'

export const Route = createFileRoute('/')({
  component: Home,
})

const steps = [
  { title: 'Discover', text: 'We learn how your business runs today and where time and money leak out.' },
  { title: 'Design', text: 'We sketch the workflow, site, or app with you — before a line of code is written.' },
  { title: 'Build', text: 'We develop in short, visible iterations so you can steer as it comes together.' },
  { title: 'Support', text: 'We launch, train your team, and stay on to keep everything running smoothly.' },
]

function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="grid-glow relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-soft shadow-sm">
              <Sparkles size={15} className="text-cyan-brand" /> Technology that fits your business
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] md:text-6xl">
              Smarter workflows.
              <br />
              <span className="text-brand">Better websites.</span>
              <br />
              Apps made for you.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Curio Solutions helps businesses automate repetitive work, launch
              custom-designed websites, and build personalized applications —
              so your team can focus on what matters.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Get a free consultation <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn-ghost">
                See our work
              </Link>
            </div>
          </div>

          {/* Hero visual: an automated workflow */}
          <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
            <div className="bg-brand absolute -inset-6 rounded-[2.5rem] opacity-20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-500/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">New order workflow</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                  ● Running
                </span>
              </div>
              <ol className="mt-6 space-y-3">
                {['Order received', 'Invoice generated', 'Customer emailed', 'Books updated'].map((label, i) => (
                  <li key={label} className="flex items-center gap-3 rounded-2xl bg-mist p-3.5">
                    <span className="bg-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="font-semibold">{label}</span>
                    <span className="ml-auto text-xs font-semibold text-ink-soft">auto</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-ink-soft">Hours saved / week</p>
                  <p className="text-brand mt-1 font-display text-3xl font-extrabold">15.5</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-ink-soft">Manual steps</p>
                  <p className="mt-1 font-display text-3xl font-extrabold">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-brand text-sm font-bold uppercase tracking-[0.2em]">What we do</p>
          <h2 className="mt-3 text-4xl font-extrabold">Three ways we help your business grow</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.id}
              to="/services"
              hash={s.id}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-blue-500/10"
            >
              <ServiceIcon kind={s.icon} />
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue-brand">
                Learn more <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-brand text-sm font-bold uppercase tracking-[0.2em]">Recent work</p>
              <h2 className="mt-3 text-4xl font-extrabold">Projects we’ve delivered</h2>
            </div>
            <Link to="/projects" className="btn-ghost bg-white">
              All projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Curio + process */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-brand text-sm font-bold uppercase tracking-[0.2em]">Why Curio</p>
            <h2 className="mt-3 text-4xl font-extrabold">Curious about your business, practical about technology</h2>
            <div className="mt-10 space-y-6">
              {[
                { icon: Puzzle, title: 'Built around you', text: 'No forcing your team into rigid software. We shape the tools to your process.' },
                { icon: Clock, title: 'Fast, visible progress', text: 'Short build cycles and regular demos keep you in the loop from day one.' },
                { icon: ShieldCheck, title: 'Reliable for the long run', text: 'Secure, well-documented solutions with support after launch.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-blue-brand">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-ink-soft">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-3xl border border-slate-200 p-7">
                <span className="text-brand font-display text-4xl font-extrabold">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
