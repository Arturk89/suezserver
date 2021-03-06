const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../doc/swagger.json');

const API_VERSION = 'v1-apisuez';

const carsRoutes = require("./cars/routes");
const repairsRoutes = require("./repairs/routes");
const employeeRoutes = require("./Employees/routes");
const usersRoutes = require("./Users/routes");


module.exports = app => {
    app.use(`/${API_VERSION}/cars`, carsRoutes);
    app.use(`/${API_VERSION}/repairs`, repairsRoutes);
    app.use(`/${API_VERSION}/employees`, employeeRoutes);
    app.use(`/${API_VERSION}/users`, usersRoutes);


    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}