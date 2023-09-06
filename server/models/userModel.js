

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    name : {
        required : true , 
        type : String
    },
    email : {
        required : true ,
        type : String
    },
    image : {
        type : String,
        default : '/icons/personsvg.svg'
    },
    password : {
        required : true ,
        type : String
    },
    isAdmin : {
        default : false ,
        type : Boolean
    }
})

const userModel = mongoose.model("User" , userSchema)

module.exports = userModel