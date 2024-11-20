const typeDefs = ` 
  type UserInfo {
    _id: ID
    username: String
    email: String
    password: String
    savedStories: [StoryTemp]
  }
  
  type StoryTemp {
    storyId: ID
    Title: String
    Story: String
    words: [String]
    }
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveStory(storyData: StoryInput!): User
        removeStory(storyId: ID!): User
    }

    input StoryInput {
        storyId: ID
        Title: String
        Story: String
        words: [String]
    }
  
    `;
export default typeDefs;
