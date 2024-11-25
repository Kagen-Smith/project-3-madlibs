import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';
import dotenv from 'dotenv';
import { typeDefs, resolvers } from './schemas/index.js';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/testdb';
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');

    // Start Apollo Server
    await server.start();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/graphql', expressMiddleware(server));

    // Serve static files if in production
    if (NODE_ENV === 'production') {
      const clientPath = path.resolve(__dirname, '../../client/dist'); // Adjust path for deployment
      app.use(express.static(clientPath));

      app.get('*', (_req, res) => {
        res.sendFile(path.join(clientPath, 'index.html'));
      });
    }

    // Start the server
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1); // Exit with failure
  }
};

startApolloServer();
