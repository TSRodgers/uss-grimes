const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql `
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
    createdAt String
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
    user(username: String!): User
    comments(username: String!): [Comment]
    comment(_id: ID!): Comment
  }

  type: Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
    addReply(commentId: ID!, replyBody: String!): Comment
  }
  
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;