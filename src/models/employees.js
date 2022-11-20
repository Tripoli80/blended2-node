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

const schemas = {
  createEmployee,
  employeeId,
};
module.exports = { Employee, schemas };
