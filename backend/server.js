const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.DBCONNECTION)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on Port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})