import { profile } from '../data/profile'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <h2>Let’s talk</h2>
        <p>{profile.availability}</p>
        <a className={styles.mail} href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <ul className={styles.links}>
          {profile.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
