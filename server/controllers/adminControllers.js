const User = require('../models/userModel');
const Book = require('../models/bookModel');
const mongoose = require('mongoose')
const createBook = async (req, res) => {
  const { user_id, name ,author, image , quantity, price, categories, description, publicationYear } = req.body;

  try {
    const user = await User.findById(user_id);
    if (!user || !user.isAdmin) {
      return res.status(401).json({ error: "Authorization required" });
    }

    const book = await Book.create({ user_id, name ,author, image,quantity, price, categories : categories.split(' '), description, publicationYear });

    res.status(200).json({message : `book ${book.name} added successfuly`});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBook = async (req, res) => {
  const { book_id } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(book_id, { archived: true }, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: 'Book archived successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateBook = async (req, res) => {
  const { user_id, book_id, name, author, image,quantity, price, categories, description, publicationYear } = req.body;

  if (!name || !author || !quantity || !price || !categories) {
    return res.status(400).json({ error: 'Name, author, quantity, price, and categories are required' });
  }

  try {
    const user = await User.findById(user_id);
    if (!user || !user.isAdmin) {
      return res.status(401).json({ error: "Authorization required" });
    }

    const book = await Book.findByIdAndUpdate(
      book_id,
      { name, author, image,quantity, price, categories:categories.split(' '), description, publicationYear },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ book, message: 'Book updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//getall books
const getAllBooks = async(req , res) => {

  try {

    const books = await Book.find({})
    res.status(200).json({books})
  } catch (error) {
    
  }
}

const getBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book doesn't exist" });
    }

    res.status(200).json({ book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = { createBook, updateBook, deleteBook , getAllBooks , getBook};