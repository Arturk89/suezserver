const mongoose = require('mongoose');
const HTTPStatus = require('http-status');
const db = process.env.MONGO_URI;

module.exports 
= connect = () => {
    if(db){
       mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        .then(() => console.log("Mongo db connected"))
        .catch((err) => console.log("Error: ", err))
    }else{
        return console.log("Error to join to mongodb");
    }
}

