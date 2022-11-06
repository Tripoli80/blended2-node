const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const employeesRouter = require("./routes/employees");

const app = express();



const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/api/employees", employeesRouter);

app.use((_, res) => res.status(404).json({ message: "Not found" }));

app.use((err, _, res, next) => {
  const { status = 500, message = "Server Internal error" } = err;

  res.status(status).json({ message });
});

module.exports = app;
