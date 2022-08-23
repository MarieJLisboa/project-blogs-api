const express = require('express');

const router = express.Router();

const { validateUser } = require('../middlewares/validations.middleware');
const userController = require('../controllers/user.controller');
const authToken = require('../controllers/auth.controller');

router.post('/', validateUser, userController.create);

router.get('/', authToken, userController.getAll);

router.get('/:id', authToken, userController.getById);

module.exports = router;