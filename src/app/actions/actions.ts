export async function ProjectDetails(projectId:any){
    try {
            const response = await fetch(`http://localhost:3000/pages/api/projects/${projectId}`,{method:"GET"})
            const project = await response.json()
            return project?.findProject
    } catch (error) {
        throw new Error(String(error))
        
    }
}