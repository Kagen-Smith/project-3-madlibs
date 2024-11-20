import { Schema, model, type Document } from 'mongoose';
import bcrypt from 'bcrypt';

// import schema 
import storyTemplate from '../models/storyTemplate.js';
import type { StoryTemp } from '../models/storyTemplate.js';

export interface UserDocument extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  savedStories: StoryTemp[];
  isCorrectPassword(password: string): Promise<boolean>;
  bookCount: number;
}

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      match: [ /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'],
    },
    // set savedBooks to be an array of data that adheres to the bookSchema
    savedStories: [storyTemplate],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('bookCount').get(function () {
  return this.savedStories.length;
});

const User = model<UserDocument>('User', userSchema);

export default User;