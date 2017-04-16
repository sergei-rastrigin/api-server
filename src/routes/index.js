let router = require('express').Router();
let userCtrl = require('../controllers/userCtrl');
let profileCtrl = require('../controllers/profileCtrl');

router
    // .all('*', userCtrl.checkUser)
    .get('/', userCtrl.get.index);

router
    // .get('/auth/registration', userCtrl.get.registration)
    .post('/auth/registration', userCtrl.post.registration);

router
    // .get('/auth/login', userCtrl.get.login)
    .post('/auth/login', userCtrl.post.login);

router
    .get('/auth/logout', userCtrl.get.logout);

router
    .get('/api/v1/profile', profileCtrl.get.profile)
    .post('/api/v1/profile', profileCtrl.post.profile);

module.exports = router;