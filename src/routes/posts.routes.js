const express = require('express');

const router = express.Router();

// const { validatePosts } = require('../middlewares/validations.middleware');
const postController = require('../controllers/post.controller');
const authToken = require('../controllers/auth.controller');

// router.post('/', validatePosts, authToken, postController.create);

router.get('/', authToken, postController.getAll);

module.exports = router;