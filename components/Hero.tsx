'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter"

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
        <div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="violet" />
            </h1>
        </div>
    )
}