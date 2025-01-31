import React from "react"
import { fullStackProjects } from "@/utils/all_api_handler/all_api_handler"
import { ProjectCard } from "@/components/project_card/project_card"
const Section_2_full_stack_projects: React.FC = async () => {

    const projects = await fullStackProjects()



    return (
        <div className=" py-5">
            <div className=" grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center">
                {
                    Array.from({ length: 10 }, (_, i) => i + 1).map((item) => (
                        <ProjectCard key={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default Section_2_full_stack_projects
