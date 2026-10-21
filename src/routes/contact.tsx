import { createFileRoute } from '@tanstack/react-router'
import { Clock, Mail, MessageSquare } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { ContactForm } from '@/components/ContactForm'

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [{ title: 'Contact — Curio Solutions' }] }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let’s build something <span className="text-brand">great together</span>
          </>
        }
        intro="Tell us a little about your business and what you’d like to improve. We’ll follow up to schedule a free consultation."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.6fr]">
        <div className="space-y-5">
          {[
            { icon: MessageSquare, title: 'Free consultation', text: 'A no-pressure call to talk through your goals and options.' },
            { icon: Clock, title: 'Quick replies', text: 'We respond to every inquiry within one business day.' },
            { icon: Mail, title: 'Clear proposals', text: 'You’ll get a written plan with scope, timeline, and pricing.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-3xl border border-slate-200 p-6">
              <span className="bg-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                <Icon size={20} />
              </span>
              <div>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="mt-1 text-sm text-ink-soft">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <ContactForm />
      </section>
    </>
  )
}
