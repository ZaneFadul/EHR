const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();             //creates dotenv file and stores env variables in them

const app = express();                  //express server
const port = process.env.PORT || 5000;  //port

app.use(cors());            //middleware
app.use(express.json());    //allows parsing of json

// need to connect to database

// need routes and etc also

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})