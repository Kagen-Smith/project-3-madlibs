import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { typeDefs } from './schemas/index';
import resolvers from './resolvers/resolver';
import jwt from 'jsonwebtoken';
import { ConnectOptions } from 'mongoose';


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
    context: ({ req }: { req: any }) => ({ user: req.user }),
});
(async () => {
    await mongoose.connect(process.env.MONGO_URI as string, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } as ConnectOptions);
    console.log('Connected to MongoDB');

    await server.start();
    app.use('/graphql', expressMiddleware(server));
    app.listen(process.env.PORT || 3001, () => {
        console.log(`Server running on port ${process.env.PORT || 3001}`);
    });
})();
function expressMiddleware(_server: ApolloServer<import("apollo-server-express").ExpressContext>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    throw new Error('Function not implemented.');
}

function startServer() {
    throw new Error('Function not implemented.');
}

startServer();


