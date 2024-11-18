import { gql } from 'apollo-server-express';

// Define types for templates and inputs
const typeDefs = gql`
  type StoryTemplate {
    id: ID!
    title: String!
    template: String! # Template with placeholders like {1}, {2}
  }

  type Query {
    getStoryTemplates: [StoryTemplate] # Fetch all templates
    getStoryTemplate(id: ID!): StoryTemplate # Fetch a single template by ID
  }

  type Mutation {
    createStoryTemplate(title: String!, template: String!): StoryTemplate # Create a new template
    generateStory(id: ID!, inputs: [String!]!): String # Generate a story from inputs
  }
`;

export default typeDefs;
