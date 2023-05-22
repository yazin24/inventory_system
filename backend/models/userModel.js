const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    firstname: {
        type: String,
        required: [true, 'Enter your first name'],
        unique: true,
    },
    lastname: {
        type: String,
        required: [true, 'Enter your last name'],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Enter your correct password'],
        minLength: [8, 'Passsword must be up to 3 characters'],
        maxLength: [20, 'Passsword must be more than 6 characters'],
    },
    position: {
        type:String,
        required: [true, 'Please enter your position']
    }

}, {
    timestamps: true
})

const User = new mongoose.model('User', userSchema);

module.exports = User