const express = require('express');

const router = express.Router();

const { validateLogin } = require('../middlewares/validations.middleware');
const loginController = require('../controllers/login.controller');

router.post('/', validateLogin, loginController.post);

module.exports = router;