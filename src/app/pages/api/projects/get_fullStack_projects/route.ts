import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db_connection/db_connection";
import { UploadedProject } from "@/lib/models/schema";
export async function GET(req: NextRequest, res: any) {
    try {
        await connectToDatabase()
        const fullStackProjects = await UploadedProject.find({
            projectType: "fullstack"

        })
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