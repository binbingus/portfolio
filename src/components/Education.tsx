import { education } from '../data/education'
import { useI18n } from '../i18n'
import Section from './Section'
import styles from './Education.module.css'

export default function Education() {
  const { t } = useI18n()

  return (
    <Section id="education" title={t.education.title}>
      <ol className={styles.timeline}>
        {education.map((item) => {
          const text = t.education.items[item.id]
          return (
            <li key={item.id} className={`${styles.step} ${item.current ? styles.current : ''}`}>
              <p className={styles.years}>{text.years}</p>
              <h3>{text.title}</h3>
              <p className={styles.place}>{text.place}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
