'use client'
import skills from "@/data/skills"
import {motion} from 'framer-motion'
import Skill from './Skill'

export default function Skills() {
    return(
        <div>
                   <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}>
                 <h3 className="top-24 uppercase tracking-[20px] text-2xl text-center p-20">Skills</h3>
            </motion.div>
           
            
            <div className="h-screen flex flex-col text-center md:text-left xl:flex-row
                max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center">
             <div className='grid grid-cols-4 gap-5'>
                {skills?.map((skill) =>{
                    return(<Skill key={skills.indexOf(skill)} skill={skill} directionLeft/>)
                })}
                </div>
        </div>
        </div>

    )
}
