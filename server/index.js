const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const cookieParser = require('cookie-parser')
require('dotenv').config()
const { register, login, getProfile ,logout , getBooks} = require("./controllers/userContollers");
const {createBook , updateBook , getAllBooks, getBook} = require('./controllers/adminControllers')
const { purchaseBooks , getPurchased } = require('./controllers/purchaseControllers')
const { borrowBook  , getBorrowed} = require('./controllers/borrowControllers')
const {searchEngine} = require('./controllers/bookControllers')
//mongodb conection
mongoose.connect(process.env.MONGOURL).then((response) => console.log("connected to the databse"))

app.use(cors({
    credentials : true,
    origin : 'http://localhost:3000'
}))
app.use(express.json())
//cookie parser to read cookies
app.use(cookieParser())
app.get('/test' , (req , res) => {
    res.json('test ok')
})
app.post('/register' , register)
app.post('/login' , login)
app.get('/profile' , getProfile)
app.post('/logout' , logout)
app.post('/purchase' , purchaseBooks)
app.post('/borrow' , borrowBook)
app.post('/borrowed' , getBorrowed)
app.get('/books' , getBooks)
app.get('/search' , searchEngine)
app.post('/getPurchased' , getPurchased)
app.post('/admin/create' , createBook)
app.get('/admin/getBooks' , getAllBooks)
app.get('/admin/getBook/edit/:id' , getBook)
app.put('/admin/getBook/edit/:id' , updateBook)
const PORT = 4000
app.listen(PORT)