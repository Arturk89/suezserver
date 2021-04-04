const express = require('express');
const controller = require("./controller");

const protect = require("../protect");
const validate = require("../validate");

const Router = express.Router;
const routes = new Router();

/*
 ALL ROUTES ARE PROTECTED, ONLY FOR LOGGED USER
*/

//GET ALL EMPLOYEES
routes.get("/",
            protect,
            controller.getEmployees
        )




module.exports = routes;