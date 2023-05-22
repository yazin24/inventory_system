const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute')
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 7000;

//Error Middleware
app.use(errorHandler);

//DB connection
mongoose.connect(process.env.DBCONNECTION)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on Port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})

//MIDDLEWARES
app.use('/api/users', userRoute)

//ROUTES

app.get('/', async (req, res) => {
    res.send('Home Page')
});

