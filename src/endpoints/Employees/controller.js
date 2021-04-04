const Employee = require("./employeeModel");
const HTTPStatus = require("http-status");


exports.getEmployees = async (req, res) => {
    Employee
        .find()
        .then((employees) => res.status(HTTPStatus.OK).json(employees))
        .catch((err) => res.status(HTTPStatus.BAD_REQUEST).json(err))
}