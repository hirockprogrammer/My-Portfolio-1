"use client"
import { useEffect, useState } from "react"
import Nav from "../nav/nav"

const Home_nav = () => {
    const [scrollFlag, setScrollFlag] = useState(false)

    useEffect(() => {
        const hadleScroll = () => {
            setScrollFlag(window.scrollY > 0)
        }

        window.addEventListener("scroll", hadleScroll)

        return () => {
            window.addEventListener("scroll", hadleScroll)
        }


    }, [])
    return (
        <div className={`${scrollFlag && "bg-white fixed z-50 top-0 left-0 right-0 text-black"}`}>
            <Nav />
        </div>
    )
}

export default Home_nav
