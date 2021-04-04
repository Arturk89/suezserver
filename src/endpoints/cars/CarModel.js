const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create
const CarSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    vinNumber: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    productionYear: {
        type: Number,
        required: true
    },
    insertedDate: {
        type: Date,
        default: Date.now
    },
    tireSize: {
        type: String,
        required: true
    },
    exhaustGasStandard: {
        type: String,
        required: true
    },
    tachographOverview: {
        type: Date,
        default: Date.now
    },
    overviewCarDate: {
        type: Date,
        default: Date.now
    },
    whoCreated: {
        type: String,
        required: true
    }
})

module.exports = Car = mongoose.model('Car', CarSchema);



// {
//     "title": "Mercedes",
//     "registrationNumber": "SB12345",
//     "vinNumber": "asd6545435468",
//     "brand": "ATEGO",
//     "model": "as32135",
//     "productionYear": "2004",
//     "insertedDate": "2020-07-05",
//     "tireSize": "SN-20",
//     "exhaustGasStandard": "EURO 6",
//     "tachographOverview": "2020-09-09",
//     "overviewCarDate": "2020-10-08",
//     "whoCreated": "asdawdaa32dsadas"
// }