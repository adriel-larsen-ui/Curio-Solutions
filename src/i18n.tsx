import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'es'
export type Bilingual<T = string> = { en: T; es: T }

const STORAGE_KEY = 'curion-lang'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Inline text: t("Projects', "Proyectos") */
  t: (en: string, es: string) => string
  /** Data fields: pick(project.title) where title is { en, es } */
  pick: <T>(value: Bilingual<T>) => T
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider ({ children }: { children: ReactNode }) {
  // Always start in English so the first render matches the pre-built HTML.
  const [lang, setLangState] = useState<Lang>('en')

  // After the page loads, apply the saved choice (or the browser's language).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'es') setLangState(saved)
      else if (navigator.language?.toLowerCase().startsWith('es')) setLangState('es')
    } catch {
      /* storage blocked: stay on English */
    }
  }, [])
  
  // Keep <html lang="..."> in sync (helps screen readers and browser translation).
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function setLang(next: Lang) {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  const value: LangContextValue = {
    lang,
    setLang,
    t: (en, es) => (lang === 'es' ? es : en),
    pick: (v) => (lang === 'es' ? v.es : v.en),
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
