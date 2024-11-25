import User from '../models/user.js';
import process from 'process';

const cleanDB = async () => {
  try {
    await User.deleteMany({});
    console.log('DB cleaned');
  } catch (error) {
    console.error('Error cleaning DB:', error);
    process.exit(1);
  }
};

export default cleanDB;