const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../doc/swagger.json');

const API_VERSION = 'v1-api-suez';

const carsRoutes = require("./cars/routes");


module.exports = app => {
    app.use(`/${API_VERSION}/cars`, carsRoutes);


    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}