const { Category } = require('../database/models');
const statusError = require('../utils/error.utils');

const categoryService = {
  async create(name) {
    const exists = await Category.findOne({ where: { name } });
    if (exists) throw statusError(409, 'Category already registered');
    const { id } = await Category.create({ name });
    return id;
  },

  async getAll() {
    const data = await Category.findAll();
    return data;
  },
};

module.exports = categoryService;