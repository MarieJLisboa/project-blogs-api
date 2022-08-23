const express = require('express');

const router = express.Router();

const { validateCategory } = require('../middlewares/validations.middleware');
const categoriesController = require('../controllers/category.controller');
const authToken = require('../controllers/auth.controller');

router.post('/', validateCategory, authToken, categoriesController.create);

router.get('/', authToken, categoriesController.getAll);

module.exports = router;