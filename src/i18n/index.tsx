import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { en } from './en'
import { es } from './es'
import type { Dictionary, Language } from './types'

export type { Language } from './types'

export const languages: { code: Language; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
]

const dictionaries: Record<Language, Dictionary> = { en, es }
const STORAGE_KEY = 'portfolio-lang'

/** Saved choice first, then the browser language, then English. */
function detectLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    // storage can be unavailable (private mode, blocked cookies)
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

type I18nValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Dictionary
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage)
  const t = dictionaries[language]

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore: the choice just won't be remembered
    }
  }, [])

  // Keep <html lang>, the tab title and the meta description in sync.
  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', t.meta.title)
  }, [language, t])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n must be used inside <I18nProvider>')
  return value
}
