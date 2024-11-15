import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/madLibs");
        console.log("Connected to MongoDB");
        return mongoose.connection;
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        throw new Error('Database connection failed');
    }
}

export default db;