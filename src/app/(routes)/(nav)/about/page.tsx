import Footer from "@/components/footer/footer"
import Nav from "@/components/nav/nav"
import type { Metadata } from "next"
export const metadata:Metadata={
    title:"about",
    description:"This is a "
}
const AboutPage = () => {
    return (
        <main>
            <div className="">
                <div className=" sticky top-0 bg-slate-200">
                    <Nav />
                </div>
                <div className=" h-screen">
                    sdfsdf
                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </main>
    )
}

export default AboutPage
