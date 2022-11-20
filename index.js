const app = require("./src/app");
const { PORT, URL_DB } = require("./src/config");

const mongoose = require("mongoose");

mongoose
  .connect(URL_DB)
  .then(() => app.listen(PORT))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
