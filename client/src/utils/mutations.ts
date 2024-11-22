import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const SAVE_STORY = gql`
    mutation saveStory($input: StoryInput!) {
        saveStory(input: $input) {
            _id
            email
            stories {
                _id
                title
                story
            }
        }
    }
`;

export const QUERY_SINGLE_PROFILE = gql`
    query user($id: ID!) {
        user(_id: $id) {
            _id
            email
            stories {
                _id
                title
                story
            }
        }
    }
`;