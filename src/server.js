const path = require('path')
require('dotenv').config({path: path.resolve('../.env')})

const express = require('express');
const constants = require("./config/constants");
const middlewareConfig = require('./config/middleware');
const apiEndpoints = require("./endpoints");
const mongoConnect = require("./config/database");

const app = express();
middlewareConfig(app);
mongoConnect;


app.get("/", (req, res) => {
    res.send("Hello, from new api!!!")
})


apiEndpoints(app);

app.listen(constants.PORT, err => {
    if(err){
        throw err
    } else{
        console.log(`
            -- - Started on http://localhost:${constants.PORT}
            -- - Server is running on port: ${constants.PORT}
            -- - Running on ${process.env.NODE_ENV}`);
    }
})


