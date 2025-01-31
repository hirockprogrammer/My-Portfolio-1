import { NextResponse } from "next/server";

export async function GET() {
    try {

        const response = NextResponse.json({
            message: "Logout successfully",
            success: true
        })
        response.cookies.delete("token")
        return response
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false
        })

    }
}