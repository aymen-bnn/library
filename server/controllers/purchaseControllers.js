
const Book = require('../models/bookModel')
const Purchase = require('../models/purchaseModel')
const User = require('../models/userModel')

const purchaseBooks = async (req, res) => {
  const { user_id, total_amount, items } = req.body;

  // Check if all books in items exist
  const bookIds = items.map(item => item.book_id);
  const books = await Book.find({ _id: { $in: bookIds } });

  if (books.length !== bookIds.length) {
    return res.status(404).json({ error: 'One or more books do not exist' });
  }

  try {
    // Iterate over the purchased items and update book quantities
    for (const item of items) {
      const book = await Book.findById(item.book_id);
      const quantityToPurchase = item.quantity;

      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }

      if (book.quantity < quantityToPurchase) {
        return res.status(400).json({ error: 'Insufficient quantity for a book' });
      }

      // Update book quantity
      const updatedQuantity = book.quantity - quantityToPurchase;
      book.quantity = updatedQuantity;
      await book.save();

      // Add book name to item
      item.book_name = book.name;
    }

    // Create the purchase record
    const purchase = await Purchase.create({ user_id, total_amount, items });

    res.json(purchase);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
const getPurchased = async(req , res) =>{

  const { id } = req.body
  
  //check if the user availabe

  const user = await User.findById(id)
  if(!user){
    return res.status(400).json("Authorization error")
  }

  //get app the purchased books 
  const purchased = await Purchase.find({user_id : id})
  if(!purchased){
    return res.status(200).json({message : "never purchased a book"})
  }
  res.status(200).json(purchased)
}
module.exports = { purchaseBooks , getPurchased };