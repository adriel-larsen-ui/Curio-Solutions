import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

type State = 'idle' | 'pending' | 'success' | 'error'

// Formspree endpoint (public by design; submissions go to the email on your Formspree account).
const FORM_ENDPOINT = 'https://formspree.io/f/xqpevrww'

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-ink outline-none transition focus:border-blue-brand focus:ring-4 focus:ring-blue-500/15'

export function ContactForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const data = new FormData(event.currentTarget)
    if (data.get('bot-field')) return setState('success') // honeypot: silently drop bots
    setState('pending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <span className="bg-brand mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full text-white">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Thanks — your message was received.</h3>
        <p className="mt-2 text-ink-soft">We’ll get back to you within one business day.</p>
        <button type="button" className="btn-ghost mt-6" onClick={() => setState('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9"
    >
      <p hidden>
        <label>
          Leave empty<input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'} className="grid gap-5 md:grid-cols-2">
        <legend className="sr-only">Contact details</legend>
        <label className="text-sm font-semibold">
          Name
          <input name="name" autoComplete="name" required maxLength={100} className={fieldClass} />
        </label>
        <label className="text-sm font-semibold">
          Email
          <input name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} />
        </label>
        <label className="text-sm font-semibold">
          Company <span className="font-normal text-ink-soft">(optional)</span>
          <input name="company" autoComplete="organization" maxLength={120} className={fieldClass} />
        </label>
        <label className="text-sm font-semibold">
          I’m interested in
          <select name="service" className={fieldClass} defaultValue="Workflow Automation">
            <option>Workflow Automation</option>
            <option>Custom Website Design</option>
            <option>Personalized Application</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="text-sm font-semibold md:col-span-2">
          Tell us about your project
          <textarea name="message" required maxLength={2000} rows={5} className={fieldClass} />
        </label>
        <div className="md:col-span-2">
          <button type="submit" className="btn-primary disabled:opacity-60">
            {state === 'pending' ? 'Sending…' : 'Send message...'} <Send size={16} />
          </button>
        </div>
      </fieldset>
      {state === 'error' && (
        <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Your message couldn’t be confirmed as sent. Your details are still here — please try again in a moment.
        </p>
      )}
    </form>
  )
}
