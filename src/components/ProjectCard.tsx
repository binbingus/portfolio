import type { Project } from '../data/projects'
import { useI18n } from '../i18n'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n()
  const text = t.projects.items[project.id]
  const thumbClass = project.imageFit === 'icon' ? styles.thumbIcon : styles.thumbCover
  const tags = [...project.tags, ...text.topics]

  return (
    <li className={styles.project}>
      <div className={`${styles.thumb} ${thumbClass}`}>
        <img src={project.image} alt={text.imageAlt} loading="lazy" />
      </div>
      <div>
        <h3 className={styles.title}>
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            {text.title}
          </a>
        </h3>
        <p className={styles.description}>{text.description}</p>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}
