// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import { typeDefs } from './schemas/index.js';
// import resolvers from './resolvers/resolver.js';
// import jwt from 'jsonwebtoken';
// import { ConnectOptions } from 'mongoose';


// dotenv.config();

// const app = express();

// // JWT Authentication Middleware
// const authMiddleware = (req: any, _res: any, next: any) => {
//     const token = req.headers.authorization || '';
//     try {
//         const user = jwt.verify(token, process.env.JWT_SECRET as string);
//         req.user = user;
//     } catch {
//         req.user = null;
//     }
//     next();
// };

// app.use(authMiddleware);

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: ({ req }: { req: any }) => ({ user: req.user }),
// });
// (async () => {
//     await mongoose.connect(process.env.MONGO_URI as string, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } as ConnectOptions);
//     console.log('Connected to MongoDB');

//     await server.start();
//     app.use('/graphql', expressMiddleware(server));
//     app.listen(process.env.PORT || 3001, () => {
//         console.log(`Server running on port ${process.env.PORT || 3001}`);
//     });
// })();
// function expressMiddleware(_server: ApolloServer<import("apollo-server-express").ExpressContext>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
//     throw new Error('Function not implemented.');
// }

// function startServer() {
//     throw new Error('Function not implemented.');
// }

// startServer();

// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import { typeDefs } from './schemas/index.js';
// import resolvers from './resolvers/resolver.js';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken';
// import { ConnectOptions } from 'mongoose';

import express, { Request, Response, NextFunction } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { typeDefs } from './schemas/index';
import resolvers from './resolvers/resolver';
import unsplashRoutes from './routes/unsplashRoutes';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware for parsing JSON and enabling CORS
app.use(bodyParser.json());
app.use(cors());

// JWT Authentication Middleware
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || '';
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = user;
  } catch {
    req.user = null;
  }
  next();
};

// Apply the authentication middleware
app.use(authMiddleware);

// Apollo Server Setup
const setupApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // Integrate Apollo Server with Express
  app.use('/graphql', expressMiddleware(server));
};

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Connected to MongoDB');

    // Set up Apollo Server
    await setupApolloServer();

    // Add Unsplash routes
    app.use('/api/unsplash', unsplashRoutes);

    // Start Express server
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

// Start the server
startServer();
