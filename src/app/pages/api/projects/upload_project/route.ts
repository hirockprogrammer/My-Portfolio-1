import { UploadedProject } from "@/lib/models/schema";
import { connectToDatabase } from "@/utils/db_connection/db_connection";
import { MongoDBConnection } from "@/utils/mongodb_connction/mongodb_connction";
import { NextRequest, NextResponse } from "next/server";
import { uploadToCloudinary, uploadToCloudinaryMultipleImages } from "@/utils/cloudinary/cloudinary";
export async function POST(request: NextRequest) {
    try {
        // await connectToDatabase()
        const reqBody = await request.json()

        const {

            title,
            description,
            projectLiveLink,
            projectGithubLink,
            projectType,
            projectImage,
            projectImages
        } = reqBody

        const uploadedImageUrls = await Promise.all(projectImages.map(async (img: any) => {
            const uploadImages = await uploadToCloudinaryMultipleImages(img)
            return {
                image: uploadImages?.secure_url,
                publicId: uploadImages?.public_id
            }
        })
        )

        const uploadProject = await uploadToCloudinary(projectImage)
        const client = await MongoDBConnection()
        const Save = await client.db("Project").collection("projects").insertOne(
            {
                title,
                description,
                projectLiveLink,
                projectGithubLink,
                projectType,
                projectImage: {
                    image: uploadProject?.secure_url,
                    publicId: uploadProject?.public_id
                },
                projectImages: uploadedImageUrls,
                likes: [],
                comments: [],
                recentdate: new Date().toLocaleDateString(),
                timeStamp: Date.now(),

            }
        )
        console.log(Save)

        return NextResponse.json({
            message: "Data found",
            success: true,
            reqBody

        })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false
        })

    }
}

