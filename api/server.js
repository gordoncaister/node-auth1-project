const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../users/users-router.js");
const authenticationRouter = require("../authentication/authentication-router")

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/authentication", authenticationRouter)

server.get("/", (req, res) => {
  res.json({ message: "how did you get here?" });
});

module.exports = server;