import { User } from "../models/index.js";
import { signToken, AuthenticationError } from '../config/jwt.js';

interface User {
    _id: string;
    Username: string;
    email: string;
    password: string;
    Stories: string[];
}
  
interface UserArgs {
    userId: string;
}

interface AddStoryArgs {
    userId: string;
    story: string;
}

interface RemoveStoryArgs {
        story: string;
}
  
interface AddUserArgs {
    input:{
      Username: string;
      email: string;
      password: string;
    }
} 
  
interface Context {
    user?: User;
}
const resolvers = {
    Query: {
        users: async (): Promise<User[]> => {
            return await User.find();
          },
          user: async (_parent: any, { userId }: UserArgs): Promise<User | null> => {
            return await User.findOne({ _id: userId });
          },
          me: async (_parent: any, _args: any, context: Context): Promise<User | null> => {
            if (context.user) {
              return await User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
          },
},

    Mutation: {
            addUser: async (_parent: any, { input }: AddUserArgs): Promise<{ token: string; user: User }> => {
                const user = await User.create(input);
                const token = signToken(user.username, user.email, user._id);
                return { user: user as unknown as User, token} ;
            },
            login: async (_parent: any, { email, password }: { email: string; password: string }): Promise<{ token: string; user: User }> => {
                const user = await User.findOne({ email });
                if (!user) {
                    throw AuthenticationError;
                }
                const correctPw = await user.isCorrectPassword(password);
                if (!correctPw) {
                    throw AuthenticationError;
                }
                const token = signToken(user.username, user.email, user._id);
                return { user: user as unknown as User, token };
            },
            addStory: async (_parent: any, { userId, story }: AddStoryArgs, context: Context): Promise<User | null> => {
                if (context.user) {
                  return await User.findOneAndUpdate(
                    { _id: userId },
                    {
                      $addToSet: { stories: story},
                    },
                    {
                      new: true,
                      runValidators: true,
                    }
                  );
                }
                throw AuthenticationError;
              },
              removeUser: async (_parent: any, _args: any, context: Context): Promise<User | null> => {
                if (context.user) {
                  return await User.findOneAndDelete({ _id: context.user._id });
                }
                throw AuthenticationError;
              },
              removeStory: async (_parent: any, { story }: RemoveStoryArgs, context: Context): Promise<User | null> => {
                if (context.user) {
                  return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { stories: story } },
                    { new: true }
                  );
                }
                throw AuthenticationError;
              },
            },
          };
export default resolvers;



