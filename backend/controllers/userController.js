const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

const registerUser = asyncHandler (async (req, res) => {
  
    const {firstname, lastname, password, position} = req.body

    //check if the fields has been 

    if(!firstname || !lastname || !password || !position){
        res.status(400);
        throw new Error('Please enter all required fields!')
    };

    const userExist = await User.findOne({lastname});

    //check if user already exist
    if(userExist) {
        res.status(400)
        throw new Error('Last Name already been registered')
    };

    //create new user
    const user = await User.create({firstname, lastname, password, position})

    if(user) {
        const {_id, firstname, lastname, password, position} = user
        res.status(201).json({
            _id, firstname, lastname,password, position
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data!')
    };

});

module.exports = {
    registerUser,
}