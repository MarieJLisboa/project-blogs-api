const jwt = require('jsonwebtoken');
const statusError = require('../utils/error.utils');
require('dotenv').config();

const authToken = async (req, _res, next) => {
  const { authorization } = req.headers;
    if (!authorization) throw statusError(401, 'Token not found');
    try {
      const payload = jwt.verify(authorization, process.env.JWT_SECRET);
      req.user = payload;
      next();
    } catch (e) {
      next(statusError(401, 'Expired or invalid token'));
    }
  };

  module.exports = authToken;