import { Schema, model, type Document } from 'mongoose';

interface User extends Document {
    username: string;
    passowrd: string;
    email: string;
    stories: Schema.Types.ObjectId[];
}

const userSchema = new Schema<User>(
    {
        username: {
            type: String, 
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        }
    }
)