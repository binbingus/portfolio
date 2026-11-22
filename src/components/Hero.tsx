import { profile } from '../data/profile'
import { useI18n } from '../i18n'
import photo from '../assets/img/profile.png'
import Nav from './Nav'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useI18n()

  return (
    <header className={styles.hero}>
      <Nav />
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1>{profile.name}</h1>
          <p className={styles.role}>{t.hero.role}</p>
          <div className={styles.actions}>
            <a className={`${styles.btn} ${styles.solid}`} href="#projects">
              {t.hero.seeProjects}
            </a>
            <a className={`${styles.btn} ${styles.line}`} href="#contact">
              {t.hero.getInTouch}
            </a>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={photo} alt={t.hero.photoAlt} width={440} height={440} />
        </div>
      </div>
    </header>
  )
}
