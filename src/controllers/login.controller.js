const authService = require('../services/login.service');
const generateJWTTOken = require('../utils/jwt');

const loginController = {
    async post(req, res) {
    const { email, password } = req.body;
    const userId = await authService(email, password);
  const token = generateJWTTOken(userId, email);
  res.status(200).send({ token });
  },
};

module.exports = loginController;