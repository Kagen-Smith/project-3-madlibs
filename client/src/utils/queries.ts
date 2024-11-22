import { gql } from '@apollo/client';

export const QUERY_USER = gql`
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

export const QUERY_ME = gql`
    {
        me {
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

export const QUERY_STORIES = gql`
    query stories {
        stories {
            _id
            title
            story
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