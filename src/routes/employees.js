const express = require("express");

const employeesRouter = express.Router();



employeesRouter.get ("/", (req, res) => res.sendStatus(290))

employeesRouter.get ("/:id", (req, res) => res.sendStatus(290))

employeesRouter.post ("/", (req, res) => res.sendStatus(290))

employeesRouter.put("/:id", (req, res) => res.sendStatus(290))

employeesRouter.delete("/:id", (req, res) => res.sendStatus(290))

employeesRouter.patch("/:id", (req, res) => res.sendStatus(290))


module.exports = employeesRouter;