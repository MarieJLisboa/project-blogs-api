const userService = require('../services/user.service');
const generateJWTTOken = require('../utils/jwt');

const userController = {
    async create(req, res) {
    const { email } = req.body;
    const userId = await userService.create(req.body);
  const token = generateJWTTOken(userId, email);
  res.status(201).send({ token });
  },
  async getAll(_req, res) {
    const data = await userService.getAll();
    res.status(200).send(data);
  },
  async getById(req, res) {
    const { id } = req.params;
    const data = await userService.getById(id);
    res.status(200).send(data);
  },
};

module.exports = userController;