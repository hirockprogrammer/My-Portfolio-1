export const frontendProjects = async () => {
    try {
        const response: any = await fetch("http://localhost:3000/pages/api/projects/get_frontend_projects", { method: "GET" })
        const projects = await response.json()
        return projects?.frontendProjects
    } catch (error) {
        throw new Error(String(error))

    }
}
export const fullStackProjects = async () => {
    try {
        const response: any = await fetch("http://localhost:3000/pages/api/projects/get_fullStack_projects", { method: "GET" })
        const projects = await response.json()
        return projects?.fullStackProjects
    } catch (error) {
        throw new Error(String(error))

    }
}