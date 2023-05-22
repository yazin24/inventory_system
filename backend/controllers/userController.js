const express = require('express');

const registerUser = (req, res) => {
    if(!req.body.lastname) {
        res.status(400)
        throw new Error('Please add your last name!')
    }
    res.send('register user')
}

module.exports = {
    registerUser,
}