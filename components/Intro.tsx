'use client'

import Image from "next/image"
import fabio from "../public/assets/fabio.jpeg"
import {motion} from "framer-motion"

export default function Intro(){
    return(
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly
        mx-auto items-center max-w-7xl">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">About</h3>
           
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
           > 
           {/* md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px] */}
                <Image 
                    src={fabio}
                    alt="Profile picture of Fabio Rodriguez"
                    className="mb-20 md:mb-0 flex-shrink-0 h-56 w-56
                    rounded-full object-cover 
                    md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]
                    "
                />
           </motion.div>
         
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    A <span className="italic dark:text-orange-300 text-violet-300">few words</span> about me
                </h4>
                <p className="text-lg">
                    I am a Full Stack Web Developer with experience in React, Nextjs, TypeScript and Tailwind. 
                    I love creating products from the ground up, and the continuous learning necessary in the tech world. 
                    I currently work as a Technical Support Engineer in ServiceNow where I’m constantly solving logical 
                    problems and finding solutions for our customers.
                </p>
            </div>
        </div>
    )
}