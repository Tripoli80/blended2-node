const express = require("express");

const app = express();

app.use((req, res, next) => res.sendStatus(240))


module.exports = app
