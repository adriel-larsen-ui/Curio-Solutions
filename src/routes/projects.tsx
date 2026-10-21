import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import projects, { type ProjectCategory } from '@/data/projects'
import { PageHeader } from '@/components/PageHeader'
import { ProjectCard } from '@/components/ProjectCard'
import { CallToAction } from '@/components/CallToAction'

export const Route = createFileRoute('/projects')({
  head: () => ({ meta: [{ title: 'Projects — Curio Solutions' }] }),
  component: ProjectsPage,
})

const filters: Array<'All' | ProjectCategory> = ['All', 'Automation', 'Website', 'Application']

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            Projects we’re <span className="text-brand">proud of</span>
          </>
        }
        intro="A selection of automations, websites, and applications we’ve designed and built for our clients."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`nav-btn border border-slate-200 ${filter === f ? 'active border-transparent' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-ink-soft">
            New {filter.toLowerCase()} projects are coming soon.
          </p>
        )}
      </section>

      <CallToAction />
    </>
  )
}
