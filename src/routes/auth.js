var express = require('express');
var authRouter = express.Router();
var userController = require('../controllers/userController')();

authRouter
    .route('/registration')
    .get(userController.get.registration)
    .post(userController.post.registration);

authRouter
    .route('/login')
    .get(userController.get.login)
    .post(userController.post.login);

module.exports = authRouter;