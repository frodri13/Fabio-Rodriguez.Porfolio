'use client'

import {motion} from 'framer-motion'

export default function Skills() {
    return(
        <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row
        max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center">
            <h3 className="top-24 uppercase tracking-[20px] text-2xl absolute">Skills</h3>
        </motion.div>
    )
}