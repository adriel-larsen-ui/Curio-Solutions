import { ArrowUpRight, CheckCircle2, AppWindow, MonitorSmartphone, Workflow } from 'lucide-react'
import type { Project } from '@/data/projects'

const categoryIcon = {
  Automation: Workflow,
  Website: MonitorSmartphone,
  Application: AppWindow,
}

export function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category]

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="bg-brand flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_30%,#fff_0,transparent_35%),radial-gradient(circle_at_80%_80%,#fff_0,transparent_30%)]" />
            <Icon size={64} strokeWidth={1.4} className="relative text-white/90" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
          {project.client} · {project.year}
        </p>
        <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.summary}</p>

        <ul className="mt-4 space-y-1.5">
          {project.results.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm font-medium">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-brand" />
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-ink-soft">
              {t}
            </span>
          ))}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1 text-sm font-bold text-blue-brand hover:underline"
            >
              View <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
