'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Hello World! I'm Fabio Rodriguez", 
            "Welcome to my Portfolio!",
            "I am a Full Stack Web Developer, a Husband and a Father!",
           ],
        loop: true,
        delaySpeed: 2000
    })
    return(
        <div className="h-screen flex flex-col space-y-8 items-center 
        justify-center text-center overflow-hidden">
            <BackgroundCircles />
            {/* <Image 
                src="https://avatars.githubusercontent.com/u/71491674?s=400&u=8e0bcb96298f7273738cf94a85b1f3d15126e580&v=4"
                alt="Profile Picture of Fabio Rodriguez"
                width={300}
                height={300}
            /> */}
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="violet" />
            </h1>
        </div>
    )
}