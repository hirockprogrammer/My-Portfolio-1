
export const dynamic = "force-dynamic"
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import { MongoDBConnection } from "@/utils/mongodb_connction/mongodb_connction";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const client = await MongoDBConnection();
                const findUser = await client.db("LoggedUser").collection("users").findOne({
                    userEmail: user?.email,
                })

                if (!findUser) {
                    const userDetails = {
                        googleId: user?.id,
                        userImage: user?.image,
                        userName: user?.name,
                        userEmail: user?.email,
                        status: "google",
                        role: "user",
                        timeStamp: Date.now(),
                        recentDate: new Date().toLocaleDateString()
                    }

                    const responseToUserDB = await client.db("LoggedUser").collection("users").insertOne(userDetails)
                    if (responseToUserDB?.insertedId) {
                        const tokenData = {
                            id: responseToUserDB?.insertedId,
                            userImage: user?.image,
                            userName: user?.name,
                            userEmail: user?.email,
                            status: "google",
                            role: "user",
                        };
                        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });
                        (await cookies()).set("token", token, { httpOnly: true })
                    }
                } else {
                    const tokenData = {
                        id: findUser?._id,
                        userImage: findUser?.userImage,
                        userName: findUser?.userName,
                        userEmail: findUser?.userEmail,
                        status: findUser?.status,
                        role: findUser?.role
                    };
                    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });
                    (await cookies()).set("token", token, { httpOnly: true })
                }
            }

            return token;
        },
    },
};


