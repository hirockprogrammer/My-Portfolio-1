import { NextResponse } from "next/server";
import { MongoDBConnection } from "@/utils/mongodb_connction/mongodb_connction";
import { revalidatePath } from "next/cache";
export async function GET() {
    try {
        const client = await MongoDBConnection()
        const fullStackProjects = await client.db("Project").collection("projects").find(
            {
                projectType: "fullstack"
            }
        ).sort({ timeStamp: -1 }).toArray()
        revalidatePath("/")
        return NextResponse.json({
            message: "Data is found",
            success: true,
            fullStackProjects
        })
    } catch (error) {
        return NextResponse.json({
            message: "data not found",
            success: false
        })

    }
}