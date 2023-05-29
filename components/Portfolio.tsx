import projects from "@/data/portfolio"
import PortfolioItem from "./PorfolioItem"

export default function Portfolio() {
    return(
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
                    />
                    )
                               })}
            </div>
        </div>
    )
}