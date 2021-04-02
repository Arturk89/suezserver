require('dotenv').config();

const express = require('express');
const constants = require("./config/constans");
// const apiEndpoints = require("./endpoints");


const app = express();

app.get("/", (req, res) => {
    res.send("Hello, from new api!!!")
})

// apiEndpoints(app);
console.log(process.env)

app.listen(constants.PORT, err => {
    if(err){
        throw err
    } else{
        console.log(`Server is running on port: ${constants.PORT}
            -- *Running on ${process.env.NODE_ENV}`);
    }
})


