import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  const thumbClass = project.imageFit === 'icon' ? styles.thumbIcon : styles.thumbCover

  return (
    <li className={styles.project}>
      <div className={`${styles.thumb} ${thumbClass}`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
      <div>
        <h3 className={styles.title}>
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}
