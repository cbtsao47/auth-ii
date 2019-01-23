const express = require("express");
const configMiddleware = require("../config/middleware");
const server = express();

configMiddleware(server);

module.exports = server;
