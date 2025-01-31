
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoGitBranchOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
export const ProjectCard: React.FC = () => {
    const project = {
        _id: '679c4cf5d3d47a41f17cfe62',
        title: 'Rinterio-House',
        description: 'This is a raintrio house.',
        projectLiveLink: 'https://hirock0.github.io/PH_Assignment_3/',
        projectGithubLink: 'https://github.com/hirockprogrammer/Rinterio-House-frontend',
        projectType: 'frontend',
        projectImage: {
            image: 'https://res.cloudinary.com/dusp1j4e0/image/upload/v1738296567/My_Portfolio/projectImage/gnbnhtrcdqt1z7cqcukb.png',
        },
        recentdate: '1/31/2025',
    };

    return (
        <div className="" data-aos="fade-up">
            <div className=" shadow-md rounded-md">
                <div className="">
                    {
                        project?.projectImage?.image == "" ? null : <Image src={project?.projectImage?.image} alt={project?.title} width={500} height={500} />
                    }
                </div>
                <div className=" p-2 border-t">
                    <h1 className=' text-center text-3xl max-lg:text-xl font-semibold max-md:text-2xl max-sm:text-xl'>{project?.title}</h1>
                    <div className=" flex items-center justify-center mt-2">
                        <Link href={`/products/123456`} className=' shadow-md px-5 py-2 bg-slate-100 rounded-sm hover:scale-105 active:scale-100'>Vew Details</Link>
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
