"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
const Nav = () => {
    const pathname = usePathname()
    const [menuFlag, setMenuflag] = useState<boolean>(false)
    const router = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/about",
            title: "About"
        },
        {
            path: "/contact",
            title: "Contact"
        },
        {
            path: "/admin/upload_project",
            title: "upload"
        },
        {
            path: "/resume",
            title: "Resume"
        },
    ]

    useEffect(() => {
        const handleClick = () => {
            setMenuflag(false)
        }
        if (menuFlag) {
            window.addEventListener("click", handleClick)
        }

        return () => { window.addEventListener("click", handleClick) }
    }, [menuFlag])
    return (
        <nav className="">
            <div className="">
                <div className=" container-css h-20 flex items-center justify-between">
                    <div className="">left</div>
                    <div onClick={(e) => { e.stopPropagation() }} className={`${!menuFlag ? " max-md:translate-x-full" : " max-md:translate-x-0"} max-md:transition-all max-md:fixed z-50 max-md:right-0 max-md:top-20 max-md:shadow-lg max-md:w-1/2 max-md:p-5 max-md:backdrop:filter max-md:backdrop-blur-md `}>
                        <div className=" flex items-center gap-5 max-md:flex-col max-md:items-start max-md:w-full">
                            {
                                router?.map((item, index) => (
                                    <Link key={index} href={item?.path} className={`${pathname === item?.path && "text-blue-600"} max-md: max-md:w-full max-md:pl-2 max-md:border-b-2 hover:text-yellow-300`}>{item?.title}</Link>
                                ))
                            }


                        </div>
                    </div>
                    <div className=" flex items-center gap-5">
                        <Link href={"/login"}>Login</Link>
                        <button onClick={(e) => { e.stopPropagation(), setMenuflag(!menuFlag) }} className=" md:hidden"><MdMenu size={25} /></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
