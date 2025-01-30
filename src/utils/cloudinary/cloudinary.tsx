import { v2 as cloudinary } from "cloudinary"
cloudinary.config({
    cloud_name: process.env.CLODNAME,
    api_key: process.env.CLODINARY_API_KEY,
    api_secret: process.env.CLODUDINARY_API_SECRET,
})
export const uploadToCloudinary = async (img: string) => {
    try {

        const result = await cloudinary.uploader.upload(img, {
            folder: "My_Portfolio/projectImage",
        });
        return result


    } catch (error) {
        throw new Error(String(error));
    }
};
export const uploadToCloudinaryMultipleImages = async (img: string) => {
    try {

        const result = await cloudinary.uploader.upload(img, {
            folder: "My_Portfolio/projectImages",
        });
        return result


    } catch (error) {
        throw new Error(String(error));
    }
};
