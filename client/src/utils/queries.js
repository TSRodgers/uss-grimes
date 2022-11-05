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


export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
