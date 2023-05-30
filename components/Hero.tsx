'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import fabio from "../public/assets/fabio.jpeg"

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
            <Image
                className="object-cover relative rounded-full h-32 w-32 mx-auto" 
                src={fabio}
                alt="Profile Picture of Fabio Rodriguez"
                width={300}
                height={300}
            />
            <div>
                <h2 className="text-sm uppercase text-gray-500
                pb-2 tracking-[15px]">Software Engineer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold 
                scroll-px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="violet" />
                </h1>
            </div>
            <div>
                <button className="heroButton">About</button>
                <button className="heroButton">Skills</button>
                <button className="heroButton">Projects</button>
            </div>
        </div>
    )
}