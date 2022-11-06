const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(morgan(formatLogger));
app.use(cors());
app.use(express.json());

app.get("/admin", (req, res, next) => {
  const error = new Error("Our error");
  error.status = 543;
  next(error);
});

app.use((_, res) => res.status(404).json({ message: "Not found" }));

app.use((err, _, res, next) => {
  const { status = 500, message = "Server Internal error" } = err;

  res.status(status).json({ message });
});

module.exports = app;
