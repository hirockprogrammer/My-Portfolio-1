import Footer from "@/components/footer/footer"
import Nav from "@/components/nav/nav"
import { Metadata } from "next"
export const metadata:Metadata={
    title:"contact",
    description:"This is a "
}
const ContactPage = () => {
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

export default ContactPage
