export const dynamic = "force-dynamic"
import React from "react"
import Banner from "@/components/home/banner"
import Section_1 from "@/components/home/section_1/section_1"
import Footer from "@/components/footer/footer"
import Section_2_full_stack_projects from "@/components/home/section_2_full_stack_projects/section_2_full_stack_projects"
import Section_3_frontend_stack_projects from "@/components/home/section_3_frontend_stack_projects/section_3_frontend_stack_projects"
const AppPage: React.FC = async () => {
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
          <h1 className=" text-center font-semibold text-3xl mt-5">Full Stack Projects</h1>
          <Section_2_full_stack_projects />
        </section>
        <section className="container-css" id="products-section">
          <h1 className=" text-center font-semibold text-3xl mt-5">Frontend Projects</h1>
          <Section_3_frontend_stack_projects />
        </section>
        <div className="">
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default AppPage
