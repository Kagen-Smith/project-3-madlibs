import { gql } from '@apollo/client';

export const GET_TEMPLATES = gql`
  query GetTemplates {
    getTemplates {
      id
      title
      content
    }
  }
`;

export const GET_COMPLETED_STORIES = gql`
  query GetCompletedStories {
    getCompletedStories {
      id
      finalStory
    }
  }
`;
