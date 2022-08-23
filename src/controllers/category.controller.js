const categoryService = require('../services/category.service');

const categoryController = {
    async create(req, res) {
    const { name } = req.body;
    const id = await categoryService.create(name);
  res.status(201).send({ id, name });
  },
  async getAll(_req, res) {
    const data = await categoryService.getAll();
    res.status(200).send(data);
  },
};

module.exports = categoryController;