import { gql } from '@apollo/client';

export const SUBMIT_STORY = gql`
  mutation SubmitStory($templateId: ID!, $filledWords: [String!]!) {
    submitStory(templateId: $templateId, filledWords: $filledWords) {
      id
      finalStory
    }
  }
`;
