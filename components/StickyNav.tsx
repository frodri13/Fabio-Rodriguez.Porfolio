import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/static/images/arrow.svg";


export default function StickyNav(){
    return(
            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center ">
                        <Image 
                            className="h-8 w-8 rounded-full bg-violet-300 hover:bg-violet-500
                            dark:bg-orange-300 dark:hover:bg-orange-500"
                            src={arrow}
                            alt="Img that brings us back to the top" 
                            width={50}
                            height={50}
                            />
                     </div>
                </footer>
            </Link> 
         )
}