"use client"

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import swal from "sweetalert"
import { SubmitHandler, useForm } from "react-hook-form";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaImage,
} from "react-icons/fa";
interface FormValues {
    name: string,
    email: string,
    password: string,
    retypePassword: string,
    image: string | any

}

const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRetypePassword, setShowRetypePassword] = useState<boolean>(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        setLoading(true)

        try {
            data.image = imagePreview
            const response = await axios.post("http://localhost:3000/pages/api/user/register", data)
            if (response?.data?.success) {
                swal({
                    title: response?.data?.message,
                    icon: "success"
                })
                setLoading(false)
            } else {
                swal({
                    title: response?.data?.message,
                    icon: "success"
                })
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            throw new Error(String(error))

        }




    };
    const base64handler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileReader = new FileReader()
        // Ensure that files exist before attempting to read
        if (e.target.files && e.target.files[0]) {
            fileReader.readAsDataURL(e.target.files[0]);
        }
        fileReader.onload = () => {
            setImagePreview(String(fileReader.result))
        }
        fileReader.onerror = (error) => {
            throw new Error(String(error))
        }

    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
            {/* Left Side */}
            <div
                data-aos="fade-right"
                className="lg:w-1/2 w-full h-64 lg:h-auto bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2015/03/26/18/36/rocket-launch-693236_1280.jpg)" }}
            >
                <h2 className="text-white text-3xl font-bold drop-shadow-lg">
                    Join Our Community!
                </h2>
            </div>

            {/* Right Side */}
            <div
                data-aos="fade-left"
                className="lg:w-1/2 w-full flex flex-col justify-center items-center bg-white shadow-lg p-8"
            >
                <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Register</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md space-y-6"
                >
                    {/* Name Field */}
                    <div className="">
                        <div className="relative flex items-center">
                            <FaUser className="absolute  left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("name", { required: "Name is required" })}
                                className={`w-full pl-10 pr-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="">
                        <div className="relative flex items-center">
                            <FaEnvelope className="absolute  left-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", { required: "Email is required" })}
                                className={`w-full pl-10 pr-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="">
                        <div className="relative flex items-center">
                            <FaLock className="absolute left-3 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className={`w-full pl-10 pr-10 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                            />
                            <div
                                className="absolute right-3 cursor-pointer text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Retype Password Field */}
                    <div className="">
                        <div className="relative flex items-center">
                            <FaLock className="absolute left-3 text-gray-400" />
                            <input
                                type={showRetypePassword ? "text" : "password"}
                                placeholder="Retype Password"
                                {...register("retypePassword", {
                                    required: "Please confirm your password",
                                })}
                                className={`w-full pl-10 pr-10 py-3 border ${errors.retypePassword ? "border-red-500" : "border-gray-300"
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                            />
                            <div
                                className="absolute right-3 cursor-pointer text-gray-400 hover:text-gray-600"
                                onClick={() => setShowRetypePassword(!showRetypePassword)}
                            >
                                {showRetypePassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>

                        {errors.retypePassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.retypePassword.message}
                            </p>
                        )}
                    </div>

                    {/* Image Field */}
                    <div className="">
                        <div className="">
                            <div className="relative flex items-center">
                                <FaImage className="absolute left-3 text-gray-400" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    {...register("image", { required: "Image is required" })}
                                    onChange={base64handler}
                                    className={`w-full pl-10 pr-4 py-3 border ${errors.image ? "border-red-500" : "border-gray-300"
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                                />
                            </div>
                            {errors.image && (
                                <p className="text-red-500 text-sm mt-1">
                                    {String(errors.image.message)}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={`${imagePreview === null && "hidden"}`}>
                        <Image src={imagePreview || "https://i.ibb.co.com/wQQgH4W/avater.png"} alt="user" width={500} height={500} className=" h-32 w-32" />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-md"
                    >
                        {
                            !loading ? "Register" : <div className=" loading loading-spinner loading-md"></div>
                        }
                    </button>
                </form>

                <div className="mt-4">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Login

                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
