"use client"
import { addUser, removeUser } from "@/utils/redux/features/slice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/react";
const Nav: React.FC = () => {
    const dispatch = useDispatch()
    const { loggedUser } = useSelector((state: any) => state?.Slice)
    const [sideNav, setSideNav] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const [menuFlag, setMenuflag] = useState<boolean>(false)
    const routers = [
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

    const logoutHandler = async () => {
        try {
            const response = await axios.get("http://localhost:3000/pages/api/user/logout")
            if (response?.data?.success) {
                loggedUser?.status === "google" && signOut()
                swal({
                    title: response?.data?.message,
                    icon: "success"
                })

                dispatch(removeUser(null))
                router.push("/")
            } else {
                swal({
                    title: response?.data?.message,
                    icon: "success"
                })
            }
        } catch (error) {
            throw new Event(String(error))

        }
    }

    useEffect(() => {
        const handleClick = () => {
            setMenuflag(false)
        }
        if (menuFlag) {
            window.addEventListener("click", handleClick)
        }
        return () => { window.addEventListener("click", handleClick) }
    }, [menuFlag])

    useEffect(() => {
        const unsubscribe = async () => {
            try {
                const response = await axios.get("http://localhost:3000/pages/api/user/decodedToken")
                const loggedUser = await response?.data?.verifyToken
                dispatch(addUser(loggedUser))
            } catch (error) {
                throw new Error(String(error))
            }
        }
        unsubscribe()
        return () => { unsubscribe() }
    }, [])

    useEffect(() => {

        const windowEvents = () => {
            if (sideNav) {
                setSideNav(false)
            }
        }
        window.addEventListener("click", windowEvents)
        return () => {
            window.addEventListener("click", windowEvents)
        }


    }, [sideNav])

    return (
        <nav className="">
            <div className="">
                <div className=" container-css h-20 flex items-center justify-between">
                    <div className="">left</div>
                    <div onClick={(e) => { e.stopPropagation() }} className={`${!menuFlag ? " max-md:translate-x-full" : " max-md:translate-x-0"} max-md:transition-all max-md:fixed z-50 max-md:right-0 max-md:top-20 max-md:shadow-lg max-md:w-1/2 max-md:p-5 max-md:backdrop:filter max-md:backdrop-blur-md `}>
                        <div className=" flex items-center gap-5 max-md:flex-col max-md:items-start max-md:w-full">
                            {
                                routers?.map((item, index) => (
                                    <Link key={index} href={item?.path} className={`${pathname === item?.path && "text-blue-600"} max-md: max-md:w-full max-md:pl-2 max-md:border-b-2 hover:text-yellow-300`}>{item?.title}</Link>
                                ))
                            }


                        </div>
                    </div>
                    <div className=" flex items-center gap-5">
                        <div className="">
                            {
                                loggedUser ? <button onClick={(e) => { e.stopPropagation(), setSideNav(!sideNav) }} className=" w-10 h-10 rounded-full overflow-hidden">
                                    {
                                        loggedUser?.userImage === undefined ? null :

                                            <Image src={loggedUser?.userImage || ""} alt={loggedUser?.userName} width={500} height={500} />
                                    }
                                </button> : <Link href={"/login"}>Login</Link>
                            }
                        </div>

                        <button onClick={(e) => { e.stopPropagation(), setMenuflag(!menuFlag) }} className=" md:hidden"><MdMenu size={25} /></button>
                    </div>
                </div>
            </div>
            <div onClick={(e) => e.stopPropagation()} className={`${!sideNav ? " translate-x-full" : " translate-x-0"} fixed z-30 right-0 top-20 bg-red-300 w-1/2 h-full`}>
                <div className="p-5">
                    <button onClick={logoutHandler}>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
