"use client"
import { useState } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
const LikeBtn = () => {
    const [likes, setLikes] = useState(0);
    const handleLike = () => setLikes(likes + 1);
    return (
        <div>
            <div className="flex justify-between items-center mt-6 px-6">
                <button onClick={handleLike} className="flex items-center gap-2 text-red-500">
                    <FaHeart /> {likes} Likes
                </button>
                <button className="flex items-center gap-2 text-blue-500">
                    <FaShareAlt /> Share
                </button>
            </div>
        </div>
    )
}

export default LikeBtn
