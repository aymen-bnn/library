const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  borrow_date: {
    type: Date,
    default: Date.now
  },
  return_date:{
    type : String ,
    required : true
  },
  items: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
      },
      name: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      image:{
        type: String
      } 
    }
  ] ,
  state : {
    type : String, 
    default : 'pending'
  }
});

const Borrow = mongoose.model('Borrow', borrowSchema);

module.exports = Borrow;