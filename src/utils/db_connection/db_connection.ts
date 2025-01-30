import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export const connectToDatabase = async (): Promise<void> => {
    if (isConnected) {
        console.log("Already connected to the database.");
        return;
    }

    // Check if there are existing connections
    const existingConnection = mongoose.connections.find(
        (conn) => conn.readyState === 1
    );
    if (existingConnection) {
        console.log("Using existing database connection.");
        isConnected = true;
        return;
    }

    // Disconnect other connections if any
    if (mongoose.connections.length > 0) {
        console.log("Closing previous database connections...");
        await mongoose.disconnect();
    }

    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MONGODB_URI environment variable is not defined.");
    }

    try {
        const db = await mongoose.connect(mongoUri);
        isConnected = db.connections[0].readyState === 1;

        if (isConnected) {
            console.log("Database connected successfully.");
        }
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw new Error("Failed to connect to the database.");
    }
};
