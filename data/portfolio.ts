import haiku from '/public/static/images/haiku-itter.png'
import pinMyHike from '/public/static/images/PinMyHike.png' 
import nico from '/public/static/images/photographer.png'
import beat from '/public/static/images/beatmaker.png'
import coloors from '/public/static/images/coloors.png'
import bnb from '/public/static/images/MakersBnB.png'
import aceBook from '/public/static/images/Acebook.png'
import pPorfolio from '/public/static/images/old-porfolio.png'
import gol from '/public/static/images/gol.png' 

import { StaticImageData } from 'next/image'

type Project = {
    title: string, 
    imgUrl: StaticImageData,
    stack: string[],
    link: string,
    github: string,
}[]

const projects: Project = [
    {
        title: "Game of Life",
        imgUrl: gol,
        stack: ['NextJS', 'React','Tailwind', 'Typescript'],
        link: "https://game-of-life-fawn.vercel.app/",
        github: "https://github.com/frodri13/Game-of-Life"
    },
    {
        title: 'Haiku-itter',
        imgUrl: haiku,
        stack: ['NextJS', 'React','Tailwind', 'Typescript', 'Prisma'],
        link: 'https://haiku-itter.vercel.app/',
        github: 'https://github.com/frodri13/Haiku-itter',
    },
    {
        title: 'PinMyHike',
        imgUrl: pinMyHike,
        stack: ['React', 'SCSS', 'JavaScript', 'ExpressJS'],
        link: 'https://github.com/frank-mck/pin-my-hike',
        github: 'https://github.com/frank-mck/pin-my-hike',
    },
    {
        title: 'Photogapher Portfolio',
        imgUrl: nico,
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://photomanifiesto.netlify.app/',
        github: 'https://github.com/frodri13/Nicola-Rocco-Photographer',
    },
    {
        title: 'BeatMaker',
        imgUrl: beat,
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://sad-khorana-46b20f.netlify.app/',
        github: 'https://github.com/frodri13/Beatmaker',
    } ,
    {
        title: 'Coloors',
        imgUrl: coloors,
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://eager-liskov-372011.netlify.app/',
        github: 'https://github.com/frodri13/Coloors-Project',
    },
    {
        title: 'MakersBnB',
        imgUrl: bnb,
        stack: ['HTML', 'CSS', 'Ruby'],
        link: 'https://github.com/frank-mck/MakerBnB',
        github: 'https://github.com/frank-mck/MakerBnB',
    },
    {
        title: 'AceBook',
        imgUrl: aceBook,
        stack: ['HTML', 'SCSS', 'JavaScript','Ruby', 'Rails'],
        link: 'https://github.com/frodri13/acebook-rails-soda/',
        github: 'https://github.com/frodri13/acebook-rails-soda/',
    },
    {
        title: "Previous Porfolio",
        imgUrl: pPorfolio,
        stack: ["HTML", "CSS", "JavaScript"],
        link: "https://fabio-rodriguez.netlify.app/",
        github: 'https://github.com/frodri13/Portofolio'
    }
]

export default projects