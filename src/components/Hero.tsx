import { profile } from '../data/profile'
import photo from '../assets/img/profile.png'
import Nav from './Nav'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <Nav />
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <div className={styles.actions}>
            <a className={`${styles.btn} ${styles.solid}`} href="#projects">
              See my projects
            </a>
            <a className={`${styles.btn} ${styles.line}`} href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={photo} alt={`Portrait of ${profile.name}`} width={440} height={440} />
        </div>
      </div>
    </header>
  )
}
