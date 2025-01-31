import { NextResponse } from "next/server";
import { MongoDBConnection } from "@/utils/mongodb_connction/mongodb_connction";
export async function GET() {
    try {
        const client = await MongoDBConnection()
        const fullStackProjects = await client.db("Project").collection("projects").find(
            {
                projectType: "fullstack"
            }
        ).toArray()
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