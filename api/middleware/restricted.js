  const jwt = require('jsonwebtoken')
  const { JWT_SECRET } = require("../../config")

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    console.log("Well" , req.headers.authorization)
    !token ? 
    next({ status: 401, message: "token required"}) : 
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      err ? 
      next({ status: 401, message: "token invalid" }) :
      req.decoded = decoded
      next()
    })
};
