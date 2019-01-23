require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  protected: async (req, res, next) => {},
  generateToken: async user => {
    const payload = {
      username: user.username,
      name: user.name,
      department: user.department
    };
    const secret = process.env.JWT_SECRET;

    const options = {
      expiresIn: "1m"
    };
    return jwt.sign(payload, secret, options);
  }
};
