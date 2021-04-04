const express = require('express');
const controller = require("./controller");

const protect = require("../protect");
const validate = require("../validate");

const Router = express.Router;
const routes = new Router();



module.exports = routes;