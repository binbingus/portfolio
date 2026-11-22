import { languages, useI18n } from '../i18n'
import styles from './Nav.module.css'

export default function Nav() {
  const { t, language, setLanguage } = useI18n()

  const links = [
    { href: '#projects', label: t.nav.projects },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav className={styles.nav} aria-label="Main">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}

      <div className={styles.lang} role="group" aria-label={t.nav.language}>
        {languages.map((item) => (
          <button
            key={item.code}
            type="button"
            lang={item.code}
            aria-label={item.name}
            aria-pressed={language === item.code}
            onClick={() => setLanguage(item.code)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
