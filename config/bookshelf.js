require("dotenv").config();

const env = process.env.BS_ENV || "development";

const knexfile = require("../knexfile")[env];

let knex = require("knex")(knexfile);

const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;
