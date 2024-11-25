import cleanDB from './cleanDB.js'
import models from '../models/index.js'
import db from '../config/db.js'

const { User } = models;

import Userdata from './user.json' assert { type: "json" };


db.once('open', async () => {
    await cleanDB( 'User', 'users'); 

    await User.insertMany(Userdata);

    
    console.log('Database seeded successfully');
    process.exit(0);
})


