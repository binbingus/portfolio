import type { ProjectId } from '../data/projects'
import type { EducationId } from '../data/education'

export type Language = 'en' | 'es'

/** Every language must provide all of these keys (TypeScript enforces it). */
export type Dictionary = {
  meta: { title: string; description: string }
  nav: { projects: string; education: string; contact: string; language: string }
  hero: { role: string; seeProjects: string; getInTouch: string; photoAlt: string }
  projects: {
    title: string
    items: Record<
      ProjectId,
      {
        title: string
        description: string
        imageAlt: string
        /** Extra tags that need translating (topics, not technologies) */
        topics: string[]
      }
    >
  }
  education: {
    title: string
    items: Record<EducationId, { years: string; title: string; place: string }>
  }
  contact: { title: string; availability: string }
}
