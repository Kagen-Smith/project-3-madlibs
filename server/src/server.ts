import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';
import dotenv from 'dotenv';
import { typeDefs, resolvers } from './schemas/index.js';
import db from './config/db.js';

const PORT = process.env.PORT || 3001;

dotenv.config();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {


  await server.start();
  await db();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/graphql', expressMiddleware(server));

  // Adjusted static file path for production
  if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.join(__dirname, '../../client/dist'); // Corrected path for Render
    app.use(express.static(clientBuildPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    });
  }


  // Start the server
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();

