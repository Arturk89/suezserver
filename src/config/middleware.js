const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const constants = require('../config/constants');
const env = process.env.NODE_ENV;
const isDev = env === 'development';
const isProd = env === 'production';


module.exports = app => {
    if(isProd){
        app.use(compression());
        app.use(helmet());
    }

    app.use(express.json());
    app.use(express.urlencoded({extended: true}))

    if(isProd || isDev){
        const corsOptions = {
            origin: "*",
            exposeHeaders: [constants.TOKEN_HEADER]
        }
        app.use(cors(corsOptions));
    }

    if(isDev){
        app.use(morgan('dev'))
    }else if (isProd){
        app.use(morgan('tiny'));
    }
}