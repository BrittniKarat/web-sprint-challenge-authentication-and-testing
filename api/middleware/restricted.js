const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require("../../config")

const restricted = (req, res, next) => {
  const token = req.headers.authorization
  !token ? 
  next({ status: 401, message: "token required"}) : 
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    err ? 
    next({ status: 401, message: "token invalid" }) :
    req.decoded = decoded
    next()
  })
}

module.exports = {
  restricted
}

  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */