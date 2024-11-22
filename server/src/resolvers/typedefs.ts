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
        user: UserInfo
    }

    type Query {
        me: UserInfo
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveStory(storyData: StoryInput!): UserInfo
        removeStory(storyId: ID!): UserInfo
    }

    input StoryInput {
        storyId: ID
        Title: String
        Story: String
        words: [String]
    }
  
    `;
    export default typeDefs;