'use client'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import fabio from "../public/assets/fabio.jpeg"
import Link from "next/link"

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Hello World! I'm Fabio Rodriguez", 
            "Welcome to my Portfolio!",
            "I am a Full Stack Web Developer, a Father and a Husband!",
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
            <div className="z-10">
                <h2 className="text-sm uppercase opacity-70 dark:opacity-80
                pb-2 tracking-[15px]">Software Engineer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold 
                scroll-px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="violet" />
                </h1>
            </div>
            <div className="p-5 z-10">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    )
}