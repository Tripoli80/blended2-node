const express = require("express");
const { getAll, getById, add, update } = require("../controllers/employees");
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

employeesRouter.delete("/:id", (req, res) => res.sendStatus(290));

employeesRouter.patch("/:id", (req, res) => res.sendStatus(290));

module.exports = employeesRouter;
