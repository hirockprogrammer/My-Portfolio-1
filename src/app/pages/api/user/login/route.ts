import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { MongoDBConnection } from "@/utils/mongodb_connction/mongodb_connction";
export async function POST(req: NextRequest) {
    try {
        const client = await MongoDBConnection()
        const reqBody = await req.json()
        const {
            email,
            password,
        } = reqBody

        const findUser = await client.db("LoggedUser").collection("users").findOne({
            userEmail: email
        })

        if (!findUser) {
            return NextResponse.json({
                message: "Email is incorrect",
                success: false
            })
        }
        const matchPassword = await bcrypt.compare(password, findUser?.userPassword)
        if (!matchPassword) {
            return NextResponse.json({
                message: "Password is incorrect",
                success: false
            })
        }


        const tokenData = {
            id: findUser?._id,
            userName: findUser?.userName,
            userEmail: findUser?.userEmail,
            userImage: findUser?.userImage,
            userPublicId: findUser?.userPublicId,
            status: findUser?.status,
            role: findUser?.role
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
        const response = NextResponse.json({ message: "Login successfully", success: true })
        response.cookies.set("token", token, { httpOnly: true })
        return response
    } catch (error: any) {
        return NextResponse.json({
            message: error?.message,
            success: false
        })

    }
}