const mongoose = require('./../database')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
    email:{
         type: String,
        required:true,
    },
    profilePic: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('User', userSchema)