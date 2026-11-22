export type EducationId = 'degree' | 'bachillerato' | 'eso'

// Language-independent data. Years, titles and places live in src/i18n.
export type Education = {
  id: EducationId
  current?: boolean
}

export const education: Education[] = [
  { id: 'degree', current: true },
  { id: 'bachillerato' },
  { id: 'eso' },
]
