import { gql } from '@apollo/client';

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
  mutation addComment($photoId: ID!, $commentText: String!) {
    addComment(photoId: $photoId, commentText: $commentText) {
      _id
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;