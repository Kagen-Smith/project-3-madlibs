import User from '../models/user.js'
import cleanDB from './cleanDB.js'


const seedDatabase = async () => {
    try {
        await cleanDB();

        await User.create({ username: 'test', email: 'test@test.com',
            password: 'Password123', savedStories: [] });
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error seeding database: ', error.message);
        } else {
        console.log('Unkown error seeding database');
    }
    process.exit(1);
    }
};

seedDatabase();
