const { Employee } = require("../models/employees");

const getAllS = async () => {
  const data = await Employee.find({});
  return data;
};

const getByIdS = async (id) => {
  const data = await Employee.findById(id);
  return data;
};

const addS = async (data) => {
  const newEmployee = await Employee.create(data);
  return newEmployee;
};

const updateS = async (id, body) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedEmployee;
};

const deleteS = async (id) => {
  const deletedEmployee = await Employee.findByIdAndDelete(id);

  return deletedEmployee;
};

const updatePosAndSalS = async (id, body) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(id, body, {
    new: true,
  });

  return updatedEmployee;
};

module.exports = {
  getAllS,
  getByIdS,
  addS,
  updateS,
  deleteS,
  updatePosAndSalS,
};
