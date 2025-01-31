
import { NextResponse } from "next/server";
import { MongoDBConnection } from "@/utils/mongodb_connction/mongodb_connction";
export async function GET() {
    try {
        const client = await MongoDBConnection()
        const frontendProjects = await client.db("Project").collection("projects").find({

            projectType: "frontend"
        }).toArray()
        return NextResponse.json({
            message: "Data is found",
            success: true,
            frontendProjects
        })
    } catch (error) {
        return NextResponse.json({
            message: "data not found",
            success: false
        })

    }
}