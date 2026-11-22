export type Education = {
  id: string
  years: string
  title: string
  place: string
  current?: boolean
}

export const education: Education[] = [
  {
    id: 'degree',
    years: '2021 – now',
    title: 'Degree in Software Engineering',
    place: 'Escuela de Ingeniería Informática, Universidad de Oviedo',
    current: true,
  },
  {
    id: 'bachillerato',
    years: '2019 – 2021',
    title: 'Bachillerato de Ciencias',
    place: 'Colegio Corazón de María, Gijón',
  },
  {
    id: 'eso',
    years: '2015 – 2019',
    title: 'ESO',
    place: 'Colegio Corazón de María, Gijón',
  },
]
