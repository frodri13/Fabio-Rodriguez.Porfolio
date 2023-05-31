'use client'
import Image from "next/image"
import {motion} from "framer-motion"
import camel from "@/public/static/images/camel.jpeg"

export default function Intro(){
    return(
        <div>
            <h3 className="uppercase tracking-[20px] text-center top-24 pt-20">About</h3>

             <motion.div
                    initial={{
                    x:-200,
                    opacity: 0,
                }}
                    transition={{
                    duration: 1.2,
                }}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    className="relative container flex flex-col max-w-6xl
                    mx-auto my-32 px-6 md:flex-row md:px-0"
           > 

                <Image 
                    src={camel}
                    alt="Profile picture of Fabio Rodriguez"
                    className="rounded-full max-h-md object-contain"
                />

                <div className="bottom-0 pr-0 md:absolute md:right-0
                md:py-10 md:pl-5 bg-white dark:bg-[rgb(36,36,36)]">
                <h4 className="text-4xl font-semibold max-w-lg mt-10
                mb-6 text-center md:text-5xl md:mt-0 md:text-left">
                    A <span className="italic dark:text-orange-300 text-violet-300">few words</span> about me
                </h4>
                <p className="text-lg max-w-md text-center md:text-left">
                    I am a Full Stack Web Developer with experience in React, Nextjs, TypeScript and Tailwind. 
                    I love creating products from the ground up, and the continuous learning necessary in the tech world. 
                    I currently work as a Technical Support Engineer in ServiceNow where I’m constantly solving logical 
                    problems and finding solutions for our customers.
                </p>
            </div>
           </motion.div>
        </div>
               
    )
}