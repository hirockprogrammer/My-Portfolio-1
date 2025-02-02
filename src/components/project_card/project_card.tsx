
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoGitBranchOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
export const ProjectCard = ({ item }: { item: any }) => {
    return (
        <div className="" data-aos="fade-up">
            <div className=" shadow-md rounded-md">

                <div className="">
                    {
                        item?.projectImage?.image == "" ? null : <Image src={item?.projectImage?.image} alt={item?.title} width={500} height={500} />
                    }
                </div>
                <div className=" p-2 border-t">
                    <h1 className=' text-center text-3xl max-lg:text-xl font-semibold max-md:text-2xl max-sm:text-xl'>{item?.title}</h1>
                    <div className=" flex items-center justify-center mt-2">
                        <Link href={`/products/${item?._id}`} className=' shadow-md px-5 py-2 bg-slate-100 rounded-sm hover:scale-105 active:scale-100'>Vew Details</Link>
                    </div>

                    <div className=" flex items-center justify-between mt-2">
                        <button className=' flex items-center'>
                            <IoGitBranchOutline />
                            <span>Repo</span>
                        </button>
                        <button className=' flex items-center'>
                            <TbWorldWww />
                            <span>Link</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
