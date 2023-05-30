"use client"
import projects from "@/data/portfolio"
import PortfolioItem from "./PorfolioItem"
import { motion } from "framer-motion"

export default function Portfolio() {
    return(
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
            <h3 className="top-24 uppercase tracking-[20px] text-2xl text-center p-20">Projects</h3>
            <div className="flex flex-col md:flex-row items-center justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-4">
                {projects.map((project) => {
                    return(
                        <PortfolioItem
                        key={projects.indexOf(project)}
                        title={project.title}
                        stack={project.stack}
                        imgUrl={project.imgUrl}
                        link={project.link}
                        github={project.github}
                    />
                    )
                               })}
            </div>
        </div>
        </motion.div>
        
    )
}