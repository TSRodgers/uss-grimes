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
        commentText
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