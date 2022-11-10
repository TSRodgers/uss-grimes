const { User, Photo, Category, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    photos: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Photo.find(params).populate('category');
     },
     photo: async (parent, { _id }) => {
      return await Photo.findById(_id).populate('category');
     }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('incorrect credentials')
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('incorrect credentials')
      }

      const token = signToken(user);
      
      return { token, user }
    },
    addComment: async (parent, { photoId, commentText }, context) => {
      if (context.user) {
        const updatedPhoto = await Photo.findByIdAndUpdate(
          { _id: photoId },
          { $push: { comments: { commentText, username: context.user.username } } },
          { new: true }
        );

        return updatedPhoto
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReply: async(parent, { photoId, commentId, replyBody }, context) => {
      if (context.user) {
        const updatedPhoto = await Photo.findByIdAndUpdate(
          { _id: photoId },
          { $push: {} },
          { new: true, runValidators: true }
        );

        return updatedPhoto
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;