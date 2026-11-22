import { projects } from '../data/projects'
import Section from './Section'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  )
}
