const express = require("express");
const {
  getAll,
  getById,
  add,
  update,
  deleteEmployee,
  updatePositionAndSalary,
} = require("../controllers/employees");
const wrapper = require("../helpers/wrapper");
const { schemas } = require("../models/employees");
const validator = require("../middlewares/validator");

const employeesRouter = express.Router();

employeesRouter.get("/", wrapper(getAll));

employeesRouter.get(
  "/:id",
  validator.params(schemas.employeeId),
  wrapper(getById)
);

employeesRouter.post("/", validator.body(schemas.createEmployee), wrapper(add));

employeesRouter.put(
  "/:id",
  validator.params(schemas.employeeId),
  validator.body(schemas.updateEmployee),
  wrapper(update)
);

employeesRouter.delete(
  "/:id",
  validator.params(schemas.employeeId),
  wrapper(deleteEmployee)
);

employeesRouter.patch(
  "/:id/position&salary",
  validator.params(schemas.employeeId),
  validator.body(schemas.updatePositionAndSalary),
  wrapper(updatePositionAndSalary)
);

module.exports = employeesRouter;
