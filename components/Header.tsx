'use client'
import {motion} from "framer-motion"
import DarkModeToggle from "./DarModeToggle"
import Icons from "./Icons"
export default function Header() {

    return(
        <header>
        <motion.div
            initial={{
                y: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                y: 0,
                opacity: 1,
                scale: 1
            }}
        >
            <DarkModeToggle /> 
        </motion.div>    
        </header>
    )
}