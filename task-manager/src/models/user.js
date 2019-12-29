const mongoose = require('mongoose');
const validator = require('validator');


const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true,
        lowercase: true,
        required: true, 
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value) { 
            if(!validator.isEmail(value)) {
                throw new Error('This is not right email');
            }
        }
    },
    password: {
        type: String, 
        required: true,
        minlength: 6,
        validate(value) {
            if (validator.equals(value, 'password')) {
                throw new Error('This password cannot be');
            }
        }
    }
});

module.exports = User;