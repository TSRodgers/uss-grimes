const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const photoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    comments: [commentSchema]
  }
);



const Photo = model('Photo', photoSchema);

module.exports = Photo;