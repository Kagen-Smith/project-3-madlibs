import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($id: ID!) {
        user(_id: $id) {
            _id
            username
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            email
            stories 
        }
    }
`;


export const QUERY_SINGLE_USER = gql`
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
