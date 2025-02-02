
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { MongoDBConnection } from "@/utils/mongodb_connction/mongodb_connction";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest, { params }: { params: Promise<{ [key: string]: string | string[] | undefined }> }) {
    try {
        const projectId = (await params).get_project_details
        const id = { _id: new ObjectId(projectId?.toString()) }
        const client = await MongoDBConnection()
        const findProject = await client.db("Project").collection("projects").findOne(id)
        revalidatePath(`/products/${projectId}`)
        return NextResponse.json({
            message: "Data is found",
            success: true,
            findProject
        })
    } catch (error) {
        return NextResponse.json({
            message: "data not found",
            success: false
        })
    }
}