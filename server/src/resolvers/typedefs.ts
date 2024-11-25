const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    stories: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }
  
  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    addStory(userId: ID!, story: String!): User
    removeUser: User
    removeStory(Story: String!): User
  }
`;

export default typeDefs;