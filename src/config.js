require("dotenv").config();

const { PORT=3000, URL_DB="" } = process.env;

module.exports = {
    PORT,
    URL_DB

}