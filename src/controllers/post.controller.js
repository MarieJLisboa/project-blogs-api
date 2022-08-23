const postService = require('../services/post.service');

const postController = {
  async getAll(_req, res) {
    const data = await postService.getAll();
    res.status(200).send(data);
  },
};

module.exports = postController;