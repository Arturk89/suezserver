const mongoose = require('mongoose');
const db = process.env.MONGO_URI;



if(db){
    const db_connect = 
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(() => console.log("Mongo db connected"))
        .catch((err) => console.log("Error: ", err))

        module.exports = db_connect;

}else{
    const db_connect = console.log("Error to join to mongodb");
    module.exports = db_connect;
}



