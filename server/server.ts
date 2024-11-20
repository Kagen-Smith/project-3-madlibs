import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { expressMiddleware } from '@apollo/server/express4'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { typeDefs } from './src/schemas/index';
import resolvers from './src/resolvers/resolver';
import jwt from 'jsonwebtoken'; 

dotenv.config();

const app = express();

// JWT Authentication Middleware
const authMiddleware = (req: any, _res: any, next: any) => {
    const token = req.headers.authorization || '';
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = user;
    } catch {
        req.user = null;
    }
    next();
};

app.use(authMiddleware);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ user: req.user }),
});

(async () => {
    await mongoose.connect(process.env.MONGO_URI as string, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    await server.start();
    app.use('/graphql', expressMiddleware(server, {
        context: async ({ req }) => ({ user: req.user }),
    }));
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server running on port ${process.env.PORT || 3001}`);
    });
})();