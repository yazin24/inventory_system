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
    },
    position: {
        type: String,
        required: [true, 'Please enter your position']
    },
    photo: {
        type: String,
        required: true,
        default: './images/defaultimage.jpg'
    }

}, {
    timestamps: true
});

const User = new mongoose.model('User', userSchema);

module.exports = User