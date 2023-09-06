const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  purchase_date: {
    type: Date,
    default: Date.now
  },
  total_amount: {
    type: Number,
    required: true
  },
  items: [
    {
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
      }
    }
  ] ,
  state : {
    type : String, 
    default : 'pending'
  }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;