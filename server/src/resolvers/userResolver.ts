// @ts-ignore
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import User from '../models/user';
import UserInfo from './typedefs';
import { StoryTemp } from '../models/storyTemplate';
import { signToken, AuthenticationError } from '../config/jwt';
import { login } from '../controllers/userController';

const resolvers = {
    Query: {
        me: async (_: any, __: any, context: any) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('savedStories');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
    },

    Mutation: {
        login: async (_parent: any, { email, password }: any): Promise<{ token: string; user: typeof UserInfo } | null>  => {
            // Find user by username or email
            const user = await User.findOne({ email });

            // if user is not found, throw an error
            if (!user) {
                throw new AuthenticationError("Can't find this user.");
            }
            // Check if password is correct
            const correctPw = await user.isCorrectPassword(password);

            // if password is incorrect, throw an error
            if (!correctPw) {
                throw new AuthenticationError('Wrong password!');
            }
            // Sign a token for the user
            const token = signToken(user.username, user.email, user._id);
            return { token, user };
        },
        addUser: async (_parent: any, args: any): Promise<{ token: string; user: typeof UserInfo } | null> => {
            // Create a new user
            const user = await User.create(args);

            // if user is not created, throw an error
            if (!user) {
                throw new AuthenticationError('Something went wrong while creating the user!');
            }
            // Sign a token for the created user
            const token = signToken(user.username, user.password, user._id);

            // Return the token and user
            return { token, user };
        },
        saveStory: async (_parent: any, { storyData }: { storyData: StoryTemp}, context: any) => {} 


