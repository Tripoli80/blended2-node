const {
  getAllS,
  getByIdS,
  addS,
  updateS,
  updatePosAndSalS,
  deleteS,
} = require("../services/employees");

const getAll = async (req, res) => {
  const data = await getAllS();
  res.json({ data });
};

const getById = async (req, res) => {
  const data = await getByIdS(req.params.id);
  data ? res.json({ data }) : res.status(404).json({ massage: "Not found" });
};

const add = async (req, res) => {
  const newEmployee = await addS(req.body);
  res.status(201).json({ newEmployee });
};

const update = async (req, res) => {
  const updatedEmployee = await updateS(req.params.id, req.body);
  updatedEmployee
    ? res.json({ updatedEmployee })
    : res.status(404).json({ message: "Not found" });
};

const deleteEmployee = async (req, res) => {
  const deletedEmployee = await deleteS(req.params.id);
  deletedEmployee
    ? res.json({ deletedEmployee })
    : res.status(404).json({ message: "Not found" });
};

const updatePositionAndSalary = async (req, res) => {
  const updatedEmployee = await updatePosAndSalS(req.params.id, req.body);
  updatedEmployee
    ? res.json({ updatedEmployee })
    : res.status(404).json({ message: "Not found" });
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteEmployee,
  updatePositionAndSalary,
};
