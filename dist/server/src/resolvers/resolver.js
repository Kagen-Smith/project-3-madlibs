import User from '../models/user';
import { signToken, AuthenticationError } from '../config/jwt';
const resolvers = {
    Query: {
        // Query to get a single user by ID or username
        me: async (_parent, { _id, username }, context) => {
            // Check if user is authenticated 
            if (context.user) {
                // Find user by ID or username
                const foundUser = await User.findOne({
                    $or: [
                        { _id: context.user._id },
                        { _id },
                        { username }
                    ],
                });
                // If user is not found, throw an error
                if (!foundUser) {
                    throw new AuthenticationError('Cannot find a user with this id!');
                }
                return foundUser; // Return user if found
            }
            // If user is not authenticated, throw an error
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        login: async (_parent, { email, password }) => {
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
        addUser: async (_parent, args) => {
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
        saveStory: async (_parent, { storyData }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { savedStories: storyData } }, { new: true, runValidators: true });
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeStory: async (_parent, { storyId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { savedStories: { storyId } } }, { new: true });
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};
export default resolvers;