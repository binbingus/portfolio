import gameY from '../assets/img/game-y.svg'
import unreal from '../assets/img/unreal.png'
import osSimulator from '../assets/img/v4.png'
import motogp from '../assets/img/motogp.png'
import portfolio from '../assets/img/preview.png'

export type ProjectId = 'game-y' | 'unreal-game' | 'os-simulator' | 'motogp' | 'portfolio'

// Language-independent data. Titles and descriptions live in src/i18n.
export type Project = {
  id: ProjectId
  href: string
  image: string
  /** "cover" fills the thumbnail; "icon" centres a logo on a tinted tile */
  imageFit: 'cover' | 'icon'
  /** Technologies (the same in every language) */
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'game-y',
    href: 'https://github.com/Arquisoft/yovi_en1a',
    image: gameY,
    imageFit: 'icon',
    tags: ['React', 'TypeScript', 'Rust', 'Node.js', 'Docker'],
  },
  {
    id: 'unreal-game',
    href: 'https://unioviedo-my.sharepoint.com/:u:/g/personal/uo288066_uniovi_es/EbmG-aYpvNBEhoen64Er57sBapYAA7IinpFSotP0LFsIpw?e=B0ZjmR',
    image: unreal,
    imageFit: 'cover',
    tags: ['Unreal Engine 5'],
  },
  {
    id: 'os-simulator',
    href: 'https://github.com/binbingus/202425-V4',
    image: osSimulator,
    imageFit: 'icon',
    tags: ['C'],
  },
  {
    id: 'motogp',
    href: 'https://binbingus.github.io/sew2526/',
    image: motogp,
    imageFit: 'icon',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'portfolio',
    href: 'https://github.com/binbingus/portfolio',
    image: portfolio,
    imageFit: 'cover',
    tags: ['React', 'TypeScript', 'Vite'],
  },
]
