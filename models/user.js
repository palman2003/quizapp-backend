const mongoose = require("mongoose");

const Schema = mongoose.Schema

// Use the existing collection name "questions"
const userSchema = new Schema({

    name:{
        type: String,
        required:true

    },
    email:{
        type: String,
        required:true

    },
    department:{
        type: String,
        required:true

    },
    score:{
        type: String,
        required:false

    }
},{timestamps:true})

module.exports= mongoose.model('users',userSchema)

