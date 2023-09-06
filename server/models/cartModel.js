
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

const CartItem = mongoose.model('Cart', cartItemSchema);

module.exports = CartItem;