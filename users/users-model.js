const db = require("../database/connection.js");

module.exports = {
    find,
  };

function find() {
    return db("users").select("id", "username");
}