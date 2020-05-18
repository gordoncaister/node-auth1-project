const db = require("../database/connection.js");

module.exports = {
    add,
    find,
    findById,
  };

function find() {
    return db("users").select("id", "username");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}