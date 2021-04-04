const Car = require("./CarModel");
const HTTPStatus = require('http-status');


/* GET ALL CARS */
exports.getList = async (req, res) => {
    Car
        .find()
        .then((cars) => res.status(HTTPStatus.OK).json(cars))
        .catch((err) => res.status(HTTPStatus.BAD_REQUEST).json(err))
}

/* GET CAR BY ID */
exports.getCarById = async (req, res) => {
    try {
        const id = String(req.params.id);
        Car
            .findById(id)
            .then((car) => res.status(HTTPStatus.OK).json(car))
            .catch((err) => res.status(HTTPStatus.BAD_REQUEST).json(err))
    }catch(e){
        return res.status(HTTPStatus.BAD_REQUEST).json(e)
    }
}

/* CREATE NEW CAR */
exports.create = async (req, res) => {
    try{
        const newCar = new Car({
            ...req.body
        })

    newCar
        .save()
        .then((car) => res.status(HTTPStatus.CREATED).json(car))
        .catch((err) => res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err))

    }catch(e){
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

/* UPDATE EXISTING CAR */
exports.update = async (req, res) => {
    try {
        const id = String(req.params.id);
        Car
            .findByIdAndUpdate(id, {...req.body})
            .then((car) => res.status(HTTPStatus.OK).json(car))
            .catch(err => res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err))
    }catch(e){
        return res.status(HTTPStatus.BAD_REQUEST).json(e)
    }
}