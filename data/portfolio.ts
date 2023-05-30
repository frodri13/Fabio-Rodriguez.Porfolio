type Project = {
    title: string, 
    imgUrl: string,
    stack: string[],
    link: string,
}[]

const projects: Project = [
    {
        title: 'Haiku-itter',
        imgUrl: '../public/assets/haiku-itter.png',
        stack: ['NextJS', 'React','Tailwind', 'Typescript', 'Prisma'],
        link: 'https://haiku-itter.vercel.app/',
    },
    {
        title: 'PinMyHike',
        imgUrl: '../public/assets/PinMyHike.png',
        stack: ['React', 'SCSS', 'JavaScript', 'ExpressJS'],
        link: 'https://github.com/frank-mck/pin-my-hike',
    },
    {
        title: 'Photogapher Portfolio',
        imgUrl: '../public/assets/photographer.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://photomanifiesto.netlify.app/',
    },
    {
        title: 'BeatMaker',
        imgUrl: '../public/assets/beatmaker.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://sad-khorana-46b20f.netlify.app/',
    } ,
    {
        title: 'Coloors',
        imgUrl: '../public/assets/coloors.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://eager-liskov-372011.netlify.app/',
    },
    {
        title: 'MakersBnB',
        imgUrl: '../public/assets/MakersBnB.png',
        stack: ['HTML', 'CSS', 'Ruby'],
        link: 'https://github.com/frank-mck/MakerBnB',
    },
    {
        title: 'AceBook',
        imgUrl: '../public/assets/Acebook.png',
        stack: ['HTML', 'SCSS', 'JavaScript','Ruby', 'Rails'],
        link: 'https://github.com/frodri13/acebook-rails-soda/',
    },
    {
        title: "Previous Porfolio",
        imgUrl: "../public/assets/old-porfolio.png",
        stack: ["HTML", "CSS", "JavaScript"],
        link: "https://fabio-rodriguez.netlify.app/",
    }
]

export default projects