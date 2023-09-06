const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    unique : true
  },
  author: {
    type: String,
    required: true
  },
  image : {
    type : String ,
    required : true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  categories: {
    type: [String]
  },
  // Additional properties
  description: {
    type: String
  },
  publicationYear: {
    type: Number
  },
  archived: {
    type: Boolean,
    default: false
  }
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;