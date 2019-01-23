const express = require("express");
const configMiddleware = require("../config/middleware");
const server = express();

const db = require("../data/dbConfig");
const bcrypt = require("bcryptjs");

//custom middleware
const code = require("../common/errCode.js");
const authenticate = require("../common/authenticate");

configMiddleware(server);

server.post("/register", async (req, res) => {
  const userInfo = req.body;
  try {
    const hash = bcrypt.hashSync(userInfo.password);
    userInfo.password = hash;
    const result = await db("users").insert(userInfo);
    res.status(code.okay).json(result);
  } catch (err) {
    code.failed(res);
  }
});

server.post("/login", async (req, res) => {
  const userInfo = req.body;
  try {
    const user = await db("users")
      .where({ username: userInfo.username })
      .first();
    if (user && bcrypt.compareSync(userInfo.password, user.password)) {
      const token = await authenticate.generateToken(user);
      res.status(code.accepted).json({ userId: `${user.id}`, token });
    } else {
      res.status(code.unauthorized).json({ message: "You shall not pass!!!!" });
    }
  } catch (err) {
    code.failed(res);
  }
});

server.get(
  "/users",
  authenticate.protected,
  authenticate.checkDepartment("math"),
  async (req, res) => {
    try {
      const users = await db("users");
      res.status(code.okay).json({ users, token: req.decodedToken });
    } catch (err) {
      code.failed(res);
    }
  }
);
module.exports = server;
