const jwt = require('jsonwebtoken');
const config = require('../config.js')

module.exports.sign = (payload) => jwt.sign(payload, config.JWT_KEY);
module.exports.verify = (token) => jwt.verify(token, config.JWT_KEY);