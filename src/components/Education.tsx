import { education } from '../data/education'
import Section from './Section'
import styles from './Education.module.css'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className={styles.timeline}>
        {education.map((item) => (
          <li key={item.id} className={`${styles.step} ${item.current ? styles.current : ''}`}>
            <p className={styles.years}>{item.years}</p>
            <h3>{item.title}</h3>
            <p className={styles.place}>{item.place}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
