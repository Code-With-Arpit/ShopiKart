const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    "name" : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 100,
        trim : true,
        match : [/^[A-Z]/, 'The first character of the name must be uppercase']
    },
    "email" : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
    },
    "username" : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        match : [/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers']
    },
    "password" : {
        type : String,
        required : true,
        // minlength : 8,
        // match : [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character']
    },
    "mobile" : {
        type : String,
        required : true,
        unique : true,
        match : [/^\d{10}$/, 'Mobile number must be a 10-digit number']
    }    

});

const User = mongoose.model('User', userSchema);
module.exports = User;