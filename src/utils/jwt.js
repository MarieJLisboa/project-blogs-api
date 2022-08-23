require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateJWTTOken = (id, email) => {
  const jwtconfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
    const token = jwt.sign({ data: { id, email } }, process.env.JWT_SECRET, jwtconfig);
    return token;
  };

module.exports = generateJWTTOken;