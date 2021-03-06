require("dotenv").config();
const jwt = require("jsonwebtoken");
const db = require("../data/dbConfig");

module.exports = {
  protected: (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "invalid token" });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      });
    } else {
      res.status(401).json({ message: "no token is provided" });
    }
  },
  generateToken: user => {
    const payload = {
      username: user.username,
      name: user.name,
      department: user.department
    };
    const secret = process.env.JWT_SECRET;

    const options = {
      expiresIn: "10m"
    };
    return jwt.sign(payload, secret, options);
  },
  checkDepartment: department => {
    return async (req, res, next) => {
      if (req.decodedToken.department.includes(department)) {
        next();
      } else {
        const users = await db("users").where({
          "users.department": req.decodedToken.department
        });
        res.status(200).json(users);
      }
    };
  }
};
