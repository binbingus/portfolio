import unreal from '../assets/img/unreal.png'
import osSimulator from '../assets/img/v4.png'
import motogp from '../assets/img/motogp.png'
import portfolio from '../assets/img/preview.png'

export type Project = {
  id: string
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
  /** "cover" fills the thumbnail; "icon" centres a logo on a tinted tile */
  imageFit: 'cover' | 'icon'
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'unreal-game',
    title: 'Unreal Engine 5 game',
    description:
      'Final deliverable for the university video games course: a small 3D game with a character, animals and a farm to explore.',
    href: 'https://unioviedo-my.sharepoint.com/:u:/g/personal/uo288066_uniovi_es/EbmG-aYpvNBEhoen64Er57sBapYAA7IinpFSotP0LFsIpw?e=B0ZjmR',
    image: unreal,
    imageAlt: 'Screenshot of the Unreal Engine 5 game',
    imageFit: 'cover',
    tags: ['Unreal Engine 5', 'Video games'],
  },
  {
    id: 'os-simulator',
    title: 'Operating system simulator',
    description: 'An operating system simulator written in C for a university project.',
    href: 'https://github.com/binbingus/202425-V4',
    image: osSimulator,
    imageAlt: 'Terminal window icon',
    imageFit: 'icon',
    tags: ['C', 'Operating systems'],
  },
  {
    id: 'motogp',
    title: 'MotoGP website',
    description: 'Semester project for the Web Development course, published online.',
    href: 'https://binbingus.github.io/sew2526/',
    image: motogp,
    imageAlt: 'MotoGP logo',
    imageFit: 'icon',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'portfolio',
    title: 'This portfolio',
    description: 'Built with React and TypeScript while studying web development. The code is on GitHub.',
    href: 'https://github.com/binbingus/portfolio',
    image: portfolio,
    imageAlt: 'Screenshot of an earlier version of this portfolio',
    imageFit: 'cover',
    tags: ['React', 'TypeScript', 'Vite'],
  },
]
