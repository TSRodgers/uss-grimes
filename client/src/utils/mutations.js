import { gql } from '@apollo/client';

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