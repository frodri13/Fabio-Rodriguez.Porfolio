import Image from "next/image"

type PortfolioItemProps = {
    key: number,
    title: string,
    imgUrl: string,
    stack: string[],
    link: string,
}

export default function PortfolioItem({ key, title, imgUrl, stack, link }: PortfolioItemProps) {
    return (
       <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
       >

        <Image 
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
         <div className="w-full p-4">
             <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
             <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                {stack.map(item => (
                   <span key={key}  className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                      {item}
                   </span>
                ))}
             </p>
          </div>
       </a>
    )
 }