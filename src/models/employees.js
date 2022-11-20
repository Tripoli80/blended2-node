const { Schema, model } = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const schemaEmployee = Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
    unique: true,
  },
  position: {
    type: String,
    default: "newcomer",
  },
  salary: {
    type: Number,
    default: 0,
    index: true,
  },
});

const Employee = model("employee", schemaEmployee);
const createEmployee = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  position: Joi.string().default("newcomer"),
  salary: Joi.number().default(0),
});

const employeeId = Joi.object({
  id: Joi.objectId().required(),
});

const updateEmployee = Joi.object({
  name: Joi.string(),
  surname: Joi.string(),
  position: Joi.string(),
  salary: Joi.number(),
}).min(1);

const updatePositionAndSalary = Joi.object({
  position: Joi.string().required(),
  salary: Joi.number().required(),
});

const schemas = {
  createEmployee,
  employeeId,
  updateEmployee,
  updatePositionAndSalary,
};
module.exports = { Employee, schemas };
