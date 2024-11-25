import User from '../models/user.js';
import process from 'process';

const cleanDB = async () => {
    try {
        await User.deleteMany({});
        console.log
    } catch (err: unknown) {
        console.error('Error cleaning database: ', err);
        process.exit(1);
    }
};
export default cleanDB;