import { Schema, model, type Document } from 'mongoose';

interface User extends Document {
    username: string;
    password: string;
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
        },
        password: {
            type: String,
            required: true,
            match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, and one number']

        },
        stories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Story'
            }
        ]
    }, 
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true,
    },
);

userSchema.virtual('storyCount').get(function() {
    return this.stories.length;
});

const User = model<User>("User", userSchema);

export default User;