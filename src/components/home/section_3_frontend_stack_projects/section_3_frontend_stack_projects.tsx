
import PaginatedItems from "@/components/ui/projects/paginatedItems"
import { Items } from "@/components/ui/projects/paginatedItems";
import { frontendProjects } from "@/utils/all_api_handler/all_api_handler";
const Section_3_frontend_stack_projects = async () => {
    const items = await frontendProjects()
    return (
        <div className=" py-5">
            <div className=" grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 justify-items-center">
                <Items />
            </div>
            <div className=" mt-10">
                <PaginatedItems itemsPerPage={6} items={items} />
            </div>

        </div>
    )
}

export default Section_3_frontend_stack_projects
