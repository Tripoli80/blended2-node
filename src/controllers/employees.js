const { getAllS, getByIdS } = require("../services/employees");

const getAll = async (req, res) => {
  const data = await getAllS();
  res.json({data});
};
const getById = async (req, res) => {
    const data = await getByIdS(req.params.id);
    data ? res.json({ data }) : res.status(404).json({massage: "Not found"})
};

module.exports = { getAll, getById };
