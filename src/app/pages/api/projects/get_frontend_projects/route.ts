import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db_connection/db_connection";
import { UploadedProject } from "@/lib/models/schema";
export async function GET(req: NextRequest, res: any) {
    try {
        await connectToDatabase()
        const frontendProjects = await UploadedProject.find({
            projectType: "frontend"

        })
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