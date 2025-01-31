
import { NextResponse } from "next/server";
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
export async function GET() {
    try {
        const tokenEntry: any = (await cookies()).get("token")?.value
        const verifyToken = jwt.verify(tokenEntry, process.env.TOKEN_SECRET!)
        return NextResponse.json({
            message: "Data found",
            success: true,
            verifyToken
        })

    } catch (error) {
        return NextResponse.json({
            message: "Data not found",
            success: false
        })

    }

}