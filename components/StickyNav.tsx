import Image from "next/image";
import Link from "next/link";
import arrow from "../public/assets/arrow.svg"

export default function StickyNav(){
    return(
        <Link href="#hero">
           <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center ">
                <Image 
                    className="h-10 w-10 rounded-full bg-violet-300 hover:bg-violet-500"
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