"use client"
import Nav from "@/components/nav/nav";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import swal from "sweetalert";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
    FaGoogle,
    FaEye,
    FaEyeSlash,
    FaEnvelope,
    FaLock,
} from "react-icons/fa";
import Link from "next/link";
import axios from "axios";


interface FormValues {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:3000/pages/api/user/login", data)
            if (response?.data?.success) {
                swal({
                    title: response?.data?.message,
                    icon: "success"
                })
                setLoading(false)
                router.push("/")
            } else {
                swal({
                    title: response?.data?.message,
                    icon: "warning"
                })
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            throw new Error(String(error))

        }
    };
    return (
        <main className="">
            <div className=" bg-zinc-100 max-md:h-screen">
                <div className=" border-b-2">
                    <Nav />
                </div>
                <div className=" container-css overflow-x-hidden">
                    <div className="flex flex-col-reverse lg:flex-row py-10 lg:h-[88vh] ">
                        {/* Left Side */}
                        <div
                            data-aos="fade-right"
                            className="lg:w-1/2 shadow-lg max-md:hidden w-full max-lg:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
                            style={{
                                backgroundImage:
                                    "url(https://cdn.pixabay.com/photo/2024/01/06/02/26/rocket-8490458_960_720.png)",
                            }}
                        >
                            <h2 className="text-white text-3xl font-bold drop-shadow-lg">
                                Welcome Back!
                            </h2>
                        </div>

                        {/* Right Side */}
                        <div
                            data-aos="fade-left"
                            className="lg:w-1/2 w-full flex flex-col justify-center items-center bg-white shadow-lg p-8"
                        >
                            <div className="">
                                <div className=" max-md:hidden">
                                    <Image
                                        src="https://i.ibb.co.com/n8zx5Lp/close-eye-2.png"
                                        alt="eye-1"
                                        width={500}
                                        height={500}
                                        className={` ${showPassword && "hidden"} w-52`}
                                    />
                                    <Image
                                        className={` ${!showPassword && "hidden "} w-52`}
                                        src="https://i.ibb.co.com/XpfM56T/eyw.png"
                                        alt="eye-2"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
                                Login to Your Account
                            </h1>

                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="w-full max-w-md space-y-6"
                            >
                                <div className="">
                                    <div className="relative flex items-center">
                                        <FaEnvelope className="absolute left-3 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            {...register("email", { required: "Email is required" })}
                                            className={`w-full pl-10 pr-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"
                                                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1 ml-2">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                                <div className="">
                                    <div className="relative flex items-center">
                                        <FaLock className="absolute left-3 text-gray-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            {...register("password", {
                                                required: "Password is required",
                                            })}
                                            className={`w-full pl-10 pr-10 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"
                                                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                                        />

                                        <div
                                            className="absolute  right-3 cursor-pointer text-gray-400 hover:text-gray-600"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </div>
                                    </div>
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1 ml-2">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-md"
                                >
                                    {
                                        !loading ? "Login" : <div className=" loading loading-spinner loading-md"></div>
                                    }

                                </button>
                            </form>

                            <div className="flex justify-between w-full max-w-md mt-4">
                                <button className="text-blue-600 hover:underline text-sm font-medium">
                                    Forgot Password?
                                </button>
                                <Link href={"/register"}>

                                    <button className="text-blue-600 hover:underline text-sm font-medium">
                                        Create a New Account
                                    </button>
                                </Link>
                            </div>

                            <button
                                onClick={() => signIn("google", { callbackUrl: "/" })}
                                type="button"
                                className="mt-6 flex items-center justify-center bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition duration-300 font-semibold shadow-md"
                            >
                                <FaGoogle className="mr-2" /> Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
