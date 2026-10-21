import { useLang } from '@/i18n'

export function LanguageToggle() {
  const { lang, setLang } = useLang()
  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className="flex rounded-full border border-slate-300 p-0.5 text-sm font-bold"
    >
      {(['en', 'es'] as const).map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1 transition ${
            lang === l ? 'bg-brand text-white' : 'text-ink-soft hover:text-ink'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
