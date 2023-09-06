const Book = require('../models/bookModel');
const Borrow = require('../models/borrowModel')
const borrowBook = async (req, res) => {
  const { user_id, items, return_date } = req.body;

  try {

    const borrow = await Borrow.create({ user_id, items, return_date });
    res.json(borrow);
  } catch (error) {
    res.status(500).json({ error});
  }
};
const getBorrowed = async (req, res) => {

    const {id} = req.body
    try {
        const borrow = await Borrow.find({user_id :id})
        res.status(200).json(borrow)
        
    } catch (error) {
        return res.status(400).json({error})
    }
}
module.exports = { borrowBook , getBorrowed};