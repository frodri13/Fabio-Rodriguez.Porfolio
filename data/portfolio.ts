import haiku from '/public/static/images/haiku-itter.png'
import pinMyHike from '/public/static/images/PinMyHike.png' 
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
    // {
    //     title: 'Photogapher Portfolio',
    //     imgUrl: '../public/assets/photographer.png',
    //     stack: ['HTML', 'CSS', 'JavaScript'],
    //     link: 'https://photomanifiesto.netlify.app/',
    //     github: 'https://github.com/frodri13/Nicola-Rocco-Photographer',
    // },
    // {
    //     title: 'BeatMaker',
    //     imgUrl: '../public/assets/beatmaker.png',
    //     stack: ['HTML', 'CSS', 'JavaScript'],
    //     link: 'https://sad-khorana-46b20f.netlify.app/',
    //     github: 'https://github.com/frodri13/Beatmaker',
    // } ,
    // {
    //     title: 'Coloors',
    //     imgUrl: '../public/assets/coloors.png',
    //     stack: ['HTML', 'CSS', 'JavaScript'],
    //     link: 'https://eager-liskov-372011.netlify.app/',
    //     github: 'https://github.com/frodri13/Coloors-Project',
    // },
    // {
    //     title: 'MakersBnB',
    //     imgUrl: '../public/assets/MakersBnB.png',
    //     stack: ['HTML', 'CSS', 'Ruby'],
    //     link: 'https://github.com/frank-mck/MakerBnB',
    //     github: 'https://github.com/frank-mck/MakerBnB',
    // },
    // {
    //     title: 'AceBook',
    //     imgUrl: '../public/assets/Acebook.png',
    //     stack: ['HTML', 'SCSS', 'JavaScript','Ruby', 'Rails'],
    //     link: 'https://github.com/frodri13/acebook-rails-soda/',
    //     github: 'https://github.com/frodri13/acebook-rails-soda/',
    // },
    // {
    //     title: "Previous Porfolio",
    //     imgUrl: "../public/assets/old-porfolio.png",
    //     stack: ["HTML", "CSS", "JavaScript"],
    //     link: "https://fabio-rodriguez.netlify.app/",
    //     github: 'https://github.com/frodri13/Portofolio'
    // }
]

export default projects