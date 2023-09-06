
const express = require('express');
const Book = require('../models/bookModel');


const searchEngine = async (req, res) => {
  try {
    const { searchTerm } = req.query;

    // Perform the search query
    const books = await Book.find({
      name: { $regex: searchTerm, $options: 'i' }
    });

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {searchEngine};