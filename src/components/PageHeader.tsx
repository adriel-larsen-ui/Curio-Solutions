export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: React.ReactNode
  intro: string
}) {
  return (
    <section className="grid-glow border-b border-slate-200/70">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="text-brand text-sm font-bold uppercase tracking-[0.2em]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
      </div>
    </section>
  )
}
