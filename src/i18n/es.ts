import type { Dictionary } from './types'

export const es: Dictionary = {
  meta: {
    title: 'Olga Alonso Grela · Estudiante de Ingeniería del Software',
    description:
      'Portfolio de Olga Alonso Grela, estudiante de Ingeniería del Software en la Universidad de Oviedo. Proyectos en C, desarrollo web y Unreal Engine 5.',
  },
  nav: {
    projects: 'Proyectos',
    education: 'Formación',
    contact: 'Contacto',
    language: 'Idioma',
  },
  hero: {
    role: 'Estudiante de Ingeniería del Software en la Universidad de Oviedo, en Gijón.',
    seeProjects: 'Ver mis proyectos',
    getInTouch: 'Contactar',
    photoAlt: 'Retrato de Olga Alonso Grela',
  },
  projects: {
    title: 'Proyectos',
    items: {
      'game-y': {
        title: 'Game Y',
        description:
          'Proyecto en equipo de la asignatura ASW de la Universidad de Oviedo: una versión web de Game Y, un juego de tablero sobre una cuadrícula triangular que se puede jugar contra un bot. Desarrollado por un equipo de cinco personas.',
        imageAlt: 'Tablero triangular formado por círculos',
        topics: [],
      },
      'unreal-game': {
        title: 'Juego de Unreal Engine 5',
        description:
          'Entrega final de la asignatura de videojuegos de la universidad: un pequeño juego 3D con un personaje, animales y una granja para explorar.',
        imageAlt: 'Captura del juego hecho con Unreal Engine 5',
        topics: ['Videojuegos'],
      },
      'os-simulator': {
        title: 'Simulador de sistema operativo',
        description: 'Un simulador de sistema operativo escrito en C para un proyecto universitario.',
        imageAlt: 'Icono de una ventana de terminal',
        topics: ['Sistemas operativos'],
      },
      motogp: {
        title: 'Web de MotoGP',
        description: 'Proyecto del semestre de la asignatura de Desarrollo Web, publicado en internet.',
        imageAlt: 'Logo de MotoGP',
        topics: [],
      },
      portfolio: {
        title: 'Este portfolio',
        description:
          'Hecho con React y TypeScript mientras estudiaba desarrollo web. El código está en GitHub.',
        imageAlt: 'Captura de una versión anterior de este portfolio',
        topics: [],
      },
    },
  },
  education: {
    title: 'Formación',
    items: {
      degree: {
        years: '2021 – actualidad',
        title: 'Grado en Ingeniería del Software',
        place: 'Escuela de Ingeniería Informática, Universidad de Oviedo',
      },
      bachillerato: {
        years: '2019 – 2021',
        title: 'Bachillerato de Ciencias',
        place: 'Colegio Corazón de María, Gijón',
      },
      eso: {
        years: '2015 – 2019',
        title: 'ESO (Educación Secundaria Obligatoria)',
        place: 'Colegio Corazón de María, Gijón',
      },
    },
  },
  contact: {
    title: 'Hablemos',
    availability:
      'Estoy abierta a prácticas y puestos junior. La forma más rápida de contactarme es por correo.',
  },
}
