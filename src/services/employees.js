const { Employee } = require("../models/employees");

const getAllS = async () => {
  const data = await Employee.find({});
  return data;
};

const getByIdS = async (id) => { 
    const data = await Employee.findById(id);
    return data
}
module.exports = { getAllS, getByIdS };
