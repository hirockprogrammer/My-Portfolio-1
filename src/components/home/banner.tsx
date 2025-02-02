"use client"
import Image from "next/image"
import Type_writer from "./type_writer"
import Home_nav from "./home_nav"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"

const Banner = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
            once: true,
        });
    }, [])
    return (
        <div>
            <div className=""
            >
                <Image src={"https://i.ibb.co.com/4V3V0kP/banner5.png"} alt="banner" width={5000} height={5000} className=" w-full object-cover md:h-[600px] max-md:h-[400px]" />
                <div className=" absolute right-0 top-0 left-0 bottom-0">
                    <Home_nav />
                    <div className=" container-css">
                        <div className=" text-center mt-10 max-md:mt-5 font-semibold text-5xl max-md:text-4xl max-sm:text-2xl">
                            <h1>Hi, I'm a</h1>
                            <div className=" md:mt-5">
                                <Type_writer />
                            </div>
                        </div>
                        {/* ----------- */}
                        <div className=" mt-5 flex">
                            <div className="  mt-10 max-md:mt-5 max-md:flex-col ">
                                <div className=" " data-aos="fade">
                                    <p className=" lg:w-5/6 text-2xl max-md:text-xl max-sm:text-base leading-10 ">
                                        Proficient MERN and Next.js full-stack developer adept at
                                        crafting dynamic, scalable web solutions with React,
                                        Node.js, and MongoDB integration.
                                    </p>
                                    <div className=" mt-5 flex items-center gap-2">
                                        <button className=" transition-all hover:scale-105 hover:rotate-6 hover:shadow-lg hover:shadow-red-600 bg-gradient-to-tr from-yellow-500 to-red-600 px-5 max-sm:px-3 py-4 max-sm:py-2 rounded-s-full active:text-yellow-200">
                                            Resume
                                        </button>
                                        <button className=" transition-all hover:scale-105 hover:-rotate-6 hover:shadow-lg hover:shadow-red-600 bg-gradient-to-tr from-yellow-500 to-red-600 px-5 max-sm:px-3 py-4 max-sm:py-2 rounded-r-full active:text-yellow-200">
                                            Contact Me
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="">
                                <div className=" relative -bottom-24  w-[400px] max-lg:right-5  max-lg:w-72 max-md:hidden shadow-lg shadow-slate-400 rounded-full overflow-hidden" data-aos="fade">
                                    <Image
                                        src="https://i.ibb.co.com/xmhv2Yh/hirock-dutta.jpg"
                                        alt="hirock"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
