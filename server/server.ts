import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
<<<<<<< HEAD
import { typeDefs } from './src/schemas/index';
import { resolvers } from './src/resolvers/resolver';

dotenv.config();
=======
import typeDefs from './src/schemas/storyTemplateSchema'; // Import your GraphQL schema
import resolvers from './src/resolvers/storyTemplateResolver'; // Import your resolvers

dotenv.config(); // Load environment variables
>>>>>>> a1ffc15b6b7bd682258f3ef8daea1c9ce9df63ae

const app = express();

async function startServer() {
<<<<<<< HEAD
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
=======
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


>>>>>>> a1ffc15b6b7bd682258f3ef8daea1c9ce9df63ae
