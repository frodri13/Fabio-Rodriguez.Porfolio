import Image from "next/image";
import Link from "next/link";

export default function StickyNav(){
    return(
        <Link href="#hero">
           <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
                <Image 
                    className="h-10 w-10 rounded-full filter grayscale
                    hover:grayscale-0"
                    src="#" 
                    alt="Img that brings us back to the top" />

            </div>

        </footer>
    </Link>
     
    )
}