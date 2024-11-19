import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { typeDefs } from './src/schemas/index';
import { resolvers } from './src/resolvers/resolver';

dotenv.config();

const app = express();

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

    await mongoose.connect(process.env.MONGODB_URI || '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    app.listen({ port: 4000 }, () => {
        console.log(`Server is running on http://localhost:4000${server.graphqlPath}`);
    });
}

startServer();
