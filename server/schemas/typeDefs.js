const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql `
  type Photo {
    _id: ID
    name: String
    photo: String
    category: Category
    description: String
    comments: [Comment]
  }

  type Category {
    _id: ID
    name: String
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    replyCount: Int
    replies: [Reply]
  }

  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
  }

  type Query {
    me: User
    users: [User]
    categories: [Category]
    photos(category: ID, name: String): [Photo]
    photo(_id: ID!): Photo
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    addComment(photoId: ID!, commentText: String!): Photo
    addReply(photoId: ID!, commentId: ID!, replyBody: String!): Photo
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;