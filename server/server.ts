import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { typeDefs } from './src/schemas/index';
import { resolvers } from './src/resolvers/resolver';

dotenv.config();

const app = express();

// JWT Authentication Middleware
const authMiddleware = (req: any, res: any, next: any) => {
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
<<<<<<< HEAD
=======

    await server.start();
    app.use('/graphql', expressMiddleware(server));
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server running on port ${process.env.PORT || 4000}`);
    });
})();

=======
async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
>>>>>>> 864d34755decf604372b452b4b1c41e5395995af

    await server.start();
    app.use('/graphql', expressMiddleware(server));
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server running on port ${process.env.PORT || 4000}`);
    });
})();