import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_STORY = gql`
  mutation addStory($userId: ID!, $story: String!) {
    addStory(userId: $userId, story: $stroy) {
      _id
      username
      stories
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeStory(story: $story) {
      _id
      username
      stories
    }
  }
`;