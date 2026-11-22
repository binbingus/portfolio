import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Olga Alonso Grela · Software engineering student',
    description:
      'Portfolio of Olga Alonso Grela, software engineering student at the University of Oviedo. Projects in C, web development and Unreal Engine 5.',
  },
  nav: {
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    language: 'Language',
  },
  hero: {
    role: 'Software engineering student at the University of Oviedo, based in Gijón.',
    seeProjects: 'See my projects',
    getInTouch: 'Get in touch',
    photoAlt: 'Portrait of Olga Alonso Grela',
  },
  projects: {
    title: 'Projects',
    items: {
      'game-y': {
        title: 'Game Y',
        description:
          'Team project for the ASW course at the University of Oviedo: a web version of Game Y, a board game on a triangular grid that you can play against a bot. Built with a team of five.',
        imageAlt: 'Triangular game board made of circles',
        topics: [],
      },
      'unreal-game': {
        title: 'Unreal Engine 5 game',
        description:
          'Final deliverable for the university video games course: a small 3D game with a character, animals and a farm to explore.',
        imageAlt: 'Screenshot of the Unreal Engine 5 game',
        topics: ['Video games'],
      },
      'os-simulator': {
        title: 'Operating system simulator',
        description: 'An operating system simulator written in C for a university project.',
        imageAlt: 'Terminal window icon',
        topics: ['Operating systems'],
      },
      motogp: {
        title: 'MotoGP website',
        description: 'Semester project for the Web Development course, published online.',
        imageAlt: 'MotoGP logo',
        topics: [],
      },
      portfolio: {
        title: 'This portfolio',
        description:
          'Built with React and TypeScript while studying web development. The code is on GitHub.',
        imageAlt: 'Screenshot of an earlier version of this portfolio',
        topics: [],
      },
    },
  },
  education: {
    title: 'Education',
    items: {
      degree: {
        years: '2021 – now',
        title: 'Degree in Software Engineering',
        place: 'School of Computer Engineering, University of Oviedo',
      },
      bachillerato: {
        years: '2019 – 2021',
        title: 'Bachillerato de Ciencias (Science track)',
        place: 'Colegio Corazón de María, Gijón',
      },
      eso: {
        years: '2015 – 2019',
        title: 'ESO (Compulsory secondary education)',
        place: 'Colegio Corazón de María, Gijón',
      },
    },
  },
  contact: {
    title: 'Let’s talk',
    availability: 'I’m open to internships and junior roles. The quickest way to reach me is email.',
  },
}
