import mongoose from 'mongoose';
import db from '../config/db';
import User from '../models/user';
import cleanDB from './cleanDB';

const seedDatabase = async (): Promise<void> => {
  try {
    // Connect to the database
    console.log('Connecting to database...');
    await db();

    // Clean the database
    console.log('Cleaning database...');
    await cleanDB();

    // Seed the database with a test user
    console.log('Seeding database...');
    await User.create({
      username: 'test',
      email: 'test@test.com',
      password: 'Password123',
      savedStories: [],
    });

    console.log('Database seeded successfully');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error seeding database:', error.message);
    } else {
      console.error('Unknown error seeding database');
    }
    process.exitCode = 1; // Indicate failure
  } finally {
    console.log('Closing database connection...');
    await mongoose.connection.close();
  }
};

// Execute the seed function
seedDatabase().then(() => {
  console.log('Seed operation complete');
});
