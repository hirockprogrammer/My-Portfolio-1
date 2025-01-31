
"use client"
import { useState } from "react";
const CommentBox = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<string[]>([]);
    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
        }
    };
    return (
        <div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Comments</h2>
                <div className="mt-2">
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full p-2 border rounded-lg"
                    />
                    <button
                        onClick={handleCommentSubmit}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Submit
                    </button>
                </div>
                <ul className="mt-4 space-y-2">
                    {comments.map((c, index) => (
                        <li key={index} className="p-2 bg-gray-100 rounded-lg">
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CommentBox
