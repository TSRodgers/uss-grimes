import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_COMMENT = gql`
mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
        _id
        commentText
        createdAt
        username
        reactions {
            _id
        }
    }
}
`;

export const ADD_REACTION = gql`
mutation addReaction($thoughtID: ID!, $reactionBody: String!) {
    addReaction(thoughtId: ID!, $reactionBody: String!) {
        addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
            _id
            reactions {
                _id
                reactionBody
                createdAt
                username
            }
        }
    }
}
`;