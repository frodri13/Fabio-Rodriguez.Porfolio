'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

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
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="violet" />
            </h1>
        </div>
    )
}