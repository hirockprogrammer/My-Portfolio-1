import React from "react"
import { frontendProjects } from "@/utils/all_api_handler/all_api_handler"
const Section_3_frontend_stack_projects:React.FC = async() => {
    const projects = await frontendProjects()

    return (
        <div>Section_3_frontend_stack_projects</div>
    )
}

export default Section_3_frontend_stack_projects
