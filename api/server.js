require("dotenv").config();
const express = require("express");
const configMiddleware = require("../config/middleware");
const server = express();
const db = require("../data/dbConfig");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

configMiddleware(server);

module.exports = server;
