import Image from "next/image"

type PortfolioItemProps = {
    key: number,
    title: string,
    imgUrl: string,
    stack: string[],
    link: string,
    github: string,
}

export default function PortfolioItem({ key, title, imgUrl, stack, link, github }: PortfolioItemProps) {
    return (
       <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden
          hover:border-violet-500 dark:hover:border-orange-500 group"
       >

        <Image 
            src={`/${imgUrl}`}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
            width={500}
            height={500}
        />
         <div className="w-full p-4 relative">
             <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
             <div className="flex justify-between gap-2">

             <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                {stack.map(item => (
                   <span key={key}  className="group-hover:border-violet-500 dark:group-hover:border-orange-500 inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                      {item}
                   </span>
                ))}
             </p>
            
            <a className="cursor-zoom-in" href={github} target="_blank">
               <Image 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="Github Icon"
                  width={40}
                  height={40}
                />
            </a>
             </div>
          </div>
       </a>
    )
 }