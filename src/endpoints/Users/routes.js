const express = require('express');
const controller = require("./controller");

const protect = require("../protect");
const validate = require("../validate");

const Router = express.Router;
const routes = new Router();

/*
 ALL ROUTES ARE PROTECTED, ONLY FOR LOGGED USER
*/

//GET ALL USERS
routes.get("/",
            protect,
            controller.getUsers
        )


module.exports = routes;