import { projects } from '../data/projects'
import { useI18n } from '../i18n'
import Section from './Section'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useI18n()

  return (
    <Section id="projects" title={t.projects.title}>
      <ul>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  )
}
