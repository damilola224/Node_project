const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({id}), "anykey", {expireIn: "5d"}
}


module.exports = generateToken;