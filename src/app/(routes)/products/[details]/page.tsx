
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import CommentBox from "@/components/ui/projects/commentBox";
import LikeBtn from "@/components/ui/projects/likeBtn";
const Products = async({ params }: { params: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const Id = (await params).details
    console.log(Id)
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Title and Description */}
            <h1 className="text-3xl font-bold text-center">Project Title</h1>
            <p className="text-gray-600 text-center mt-2">This is a description of the project with details.</p>

            {/* Main Image */}
            <div className="mt-6 flex justify-center">
                <Image
                    src="https://res.cloudinary.com/dusp1j4e0/image/upload/v1738296567/My_Portfolio/projectImage/gnbnhtrcdqt1z7cqcukb.png"
                    alt="Main Project Image"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <Image
                        key={num}
                        src={`https://res.cloudinary.com/dusp1j4e0/image/upload/v1738296567/My_Portfolio/projectImage/gnbnhtrcdqt1z7cqcukb.png`}
                        alt={`Project Image ${num}`}
                        width={150}
                        height={100}
                        className="rounded-lg shadow-md"
                    />
                ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">
                    <FaGithub /> GitHub Repo
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md">
                    <FaExternalLinkAlt /> Live Demo
                </button>
            </div>

            {/* Like and Share */}
            <LikeBtn/>

            {/* Comment Section */}
            <CommentBox />
        </div>
    );
};

export default Products;

