import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';
import dotenv from 'dotenv';
import { typeDefs, resolvers } from './schemas/index.js';
import db from './config/db.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
const PORT = process.env.PORT || 3001;
dotenv.config();


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  const app = express();
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/graphql', expressMiddleware(server));
 

  // if we're in production, serve client/dist as static assets
  // Adjusted static file path for production
  if (process.env.NODE_ENV === 'production') {
    // Correct path for Render deployment
    app.use(express.static(path.join(__dirname, '../../client/dist')));
  
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
  }
  

  // Ensure database connection errors are logged
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  // Start the server
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();

