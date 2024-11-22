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

import express from 'express';
import path from 'node:path';
import type { Request, Response } from 'express';
import db from './config/db.js'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './config/jwt.js';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const startApolloServer = async () => {
  await server.start();
  await db();

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server as any,
    {
      context: authenticateToken as any
    }
  ));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();
