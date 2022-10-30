const { User, Thought } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: contect.user._id })
        .select('-__v -password')
        .populate('comments')

        return userData;
      }

      throw new AuthenticationError('Not logged in!');
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .select('-__v -password')
      .populate('comments')
    },
  },
  Mutation: {
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReply: async(parent, { commentId, replyBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $push: { replies: { replyBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedComment
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;