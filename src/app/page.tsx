export const dynamic = "force-dynamic"
import React from "react"
import Banner from "@/components/home/banner"
import Section_1 from "@/components/home/section_1/section_1"

import { frontendProjects, fullStackProjects } from "@/utils/all_api_handler/all_api_handler"



const AppPage: React.FC = async (params: any) => {

  const frontendProjectsArr = await frontendProjects()
  const fullStackProjectsArr = await fullStackProjects()


  return (
    <main >
      <div className="">
        <div className=" text-white">
          <Banner />
        </div>

        <section>
          <Section_1 />
        </section>

        <section className="container-css" id="products-section">
          <h1 className=" text-center font-semibold text-3xl">Full Stack Projects</h1>
          <div className=" grid grid-cols-3 gap-3">
            {
              fullStackProjectsArr?.map((item: any, index: any) => (
                <div key={index} className=" h-52 bg-red-200">
                  {
                    item?.title
                  }

                </div>
              ))
            }
          </div>
        </section>
        <section className="container-css" id="products-section">
          <h1 className=" text-center font-semibold text-3xl">Frontend Projects</h1>
          <div className=" grid grid-cols-3 gap-3">
            {
              frontendProjectsArr?.map((item: any, index: any) => (
                <div key={index} className=" h-52 bg-red-200">
                  {
                    item?.title
                  }

                </div>
              ))
            }
          </div>
        </section>

      </div>
    </main>
  )
}

export default AppPage
