const { BlogPost, User, Category } = require('../database/models');

const query = {
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ],
};

const postService = {
  async getAll() {
    const data = await BlogPost.findAll({ ...query });
    return data;
  },
};

module.exports = postService;