const { User } = require('../database/models');
const statusError = require('../utils/error.utils');

const userService = {
  async create(data) {
    const exists = await User.findOne({ where: { email: data.email } });
    if (exists) throw statusError(409, 'User already registered');
    const { id } = await User.create(data);
    return id;
  },

  async getAll() {
    const data = await User.findAll({ attributes: { exclude: ['password'] } });
    return data;
  },

  async getById(id) {
    const exists = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!exists) throw statusError(404, 'User does not exist');
    return exists;
  },
};

module.exports = userService;