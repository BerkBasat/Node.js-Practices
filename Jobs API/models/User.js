const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Username is required!'],
        maxlength: 50
    },
    email:{
        type:String,
        required:[true, 'Email is required!'],
        maxlength: 50,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide a valid email!'    
        ],
        unique: true
    },
    password:{
        type:String,
        required:[true, 'Password is required!'],
        minlength: 6
    },
})

module.exports = mongoose.model('User', UserSchema)