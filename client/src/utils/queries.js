import { gql } from '@apollo/client';

export const QUERY_PHOTOS = gql`
  query getPhotos($category: ID) {
    photos(category: $category) {
      _id
      name
      description
      photo
      category {
        _id
      }
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      }
      thoughts {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      thoughts {
        _id
        commentText
        createdAt
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
