const express = require('express');
const controller = require("./controller");

const protect = require("../protect");
const validate = require("../validate");
const validateSchema = require("./schemas");

const Router = express.Router;
const routes = new Router();

/*
 ALL ROUTES ARE PROTECTED, ONLY FOR LOGGED USER
*/

//GET ALL CARS
routes.get("/", 
            protect, 
            controller.getList
        )

//CREATE NEW CAR
routes.post('/', 
            protect, 
            validate(validateSchema.create), 
            controller.create
        )

//GET CAR BY ID
routes.get("/:id", 
            protect, 
            controller.getCarById
        )

//UPDATE ONE CAR
routes.patch("/:id",
            protect,
            // validate(validateSchema.update),
            controller.update
        )



module.exports = routes;