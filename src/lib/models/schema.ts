import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
    title: string;
    description: string;
    projectLiveLink: string;
    projectGithubLink: string;
    timestamp: Date;
    recentDate: Date;
    projectType: "frontend" | "backend" | "fullstack"; // Example project types
    projectImage: string;
    projectImages: string[];
}

const ProjectSchema = new Schema<IProject>({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100, // Example constraint
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000, // Example constraint
    },
    projectLiveLink: {
        type: String,
        required: false,
        validate: {
            validator: function (v: string) {
                return /^https?:\/\/.+$/.test(v); // Validates it’s a URL
            },
            message: "Invalid URL format for live link",
        },
    },
    projectGithubLink: {
        type: String,
        required: true,
        validate: {
            validator: function (v: string) {
                return /^https?:\/\/.+$/.test(v); // Validates it’s a URL
            },
            message: "Invalid URL format for GitHub link",
        },
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    recentDate: {
        type: Date,
        default: Date.now,
    },
    projectType: {
        type: String,
        enum: ["frontend", "backend", "fullstack"], // Restricts to specific values
        required: true,
    },
    projectImage: {
        type: String,
        required: true,
    },
    projectImages: {
        type: [String],
        default: [], // Default is an empty array
    },
});

export const UploadedProject: Model<IProject> = mongoose.models.all_projects || mongoose.model<IProject>("all_projects", ProjectSchema);

