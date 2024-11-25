import cleanDB from './cleanDB.js'
import db from '../config/db.js'
import { User } from '../models/index.js';


const seedDatabase = async () => {
    try {
        await db();
        await cleanDB();
        await User.create({
            username: 'admin',
            email: ' test@test.com',
            password: 'Password123'
        });
        console.log('Database seeded');
        process.exit(0);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error seeding database:', error.message);
        } else {
            console.error('Error seeding database');
        }
        process.exit(1);
    }

};

seedDatabase();
