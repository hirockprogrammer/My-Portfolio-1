import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { uploadUserToCloudinary } from "@/utils/cloudinary/cloudinary";
import { MongoDBConnection } from "@/utils/mongodb_connction/mongodb_connction";
export async function POST(req: NextRequest) {
    try {
        const client = await MongoDBConnection()
        const reqBody = await req.json()
        const {
            name,
            email,
            password,
            retypePassword,
            image
        } = reqBody

        if (password !== retypePassword) {
            return NextResponse.json({
                message: "Password doesn't match",
                success: false
            })
        }

        const findUser = await client.db("LoggedUser").collection("users").findOne({
            userEmail: email
        })

        if (findUser) {
            return NextResponse.json({
                message: "Email already exist",
                success: false
            })
        }
        const uploadImageResponse = await uploadUserToCloudinary(image)
        const hashedPassword = await bcrypt.hash(password, 10)
        const uerResponse = await client.db("LoggedUser").collection("users").insertOne({
            userName: name,
            userEmail: email,
            role: "user",
            userPassword: hashedPassword,
            userImage: uploadImageResponse?.secure_url,
            userPublicId: uploadImageResponse?.public_id,
            recentDate: new Date().toLocaleDateString(),
            timeStamp: Date.now()
        })
        const tokenData = {
            id: uerResponse?.insertedId,
            userName: name,
            userEmail: email,
            userImage: uploadImageResponse?.secure_url,
            userPublicId: uploadImageResponse?.public_id,
            role:"user",
            status:"g-auth"
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
        const response = NextResponse.json({ message: "Register successfully", success: true })
        response.cookies.set("token", token, { httpOnly: true })
        return response
    } catch (error: any) {
        return NextResponse.json({
            message: error?.message,
            success: false
        })

    }
}