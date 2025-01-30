
"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
interface Props {
    fullStackLength: number
}
const Pagination_btns: React.FC<Props> = ({ fullStackLength }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname()
    const currentPage = Number(searchParams.get("q") || 0);
    const totalProjects = fullStackLength
    const perPageProject = 6
    const totalpages = Math.ceil(totalProjects / perPageProject)
    const pageBtns = 5
    const pageNum = Math.floor((currentPage + 1) / pageBtns)
    const loopData = (pageNum * 4) + 1
    const countPages = Array.from({ length: 4 }, (_, i) => i + loopData)
    
    useEffect(() => {
        if (currentPage > 0) {
            const productSection = document.getElementById("products-section");
            if (productSection) {
                window.scrollTo({ top: productSection.offsetTop, behavior: "smooth" });
            }
        }

    }, [currentPage]);

    const handleNext = () => {
        const nextPage: any = currentPage + 1;
        const params = new URLSearchParams(searchParams)
        params.set("q", nextPage)
        router.replace(`${pathname}?${params}`)

    };

    const handlePrev = () => {
        const prevPage: any = Math.max(currentPage - 1, 0);
        const params = new URLSearchParams(searchParams)
        params.set("q", prevPage)
        if (currentPage < 2) {
            params.delete("q")
        }
        router.replace(`${pathname}?${params}`)

    };
    const handlePageBtn = (num: any) => {
        const params = new URLSearchParams(searchParams)
        params.set("q", num)

        router.replace(`${pathname}?${params}`)

    }

    return (
        <div className="flex gap-5">
            <button onClick={handlePrev} disabled={currentPage === 0} className="bg-blue-500 text-white px-4 py-2 rounded">
                Previous
            </button>
            <div className=" flex items-center gap-2">
                {
                    countPages?.map((item: number, index) => (
                        <button onClick={() => { handlePageBtn(item - 1) }} key={index} className={`${currentPage + 1 === item ? "bg-red-400" : "bg-slate-300"} w-12 h-12 rounded-md`}>
                            {item}
                        </button>
                    ))
                }
            </div>
            <button onClick={handleNext} disabled={(currentPage+1) === totalpages}  className="bg-blue-500 text-white px-4 py-2 rounded">
                Next
            </button>
        </div>
    );
};

export default Pagination_btns;
