import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './src/schemas/storyTemplateSchema'; // Import your GraphQL schema
import resolvers from './src/resolvers/storyTemplateResolver'; // Import your resolvers

dotenv.config(); // Load environment variables

const app = express();

async function startServer() {
  const server = new ApolloServer({
    typeDefs, // GraphQL schema
    resolvers, // Resolvers for queries and mutations
  });

  await server.start();
  server.applyMiddleware({ app });

  // Connect to MongoDB
  await mongoose.connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected');

  // Start Express server
  app.listen({ port: 4000 }, () => {
    console.log(`Server is running on http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();


