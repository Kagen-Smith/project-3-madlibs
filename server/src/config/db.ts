import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Madlibs';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to database');
        return mongoose.connection;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw new Error('Database connection failure');
    }
};


export default db;