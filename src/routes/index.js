let router = require('express').Router();
let userCtrl = require('../controllers/userCtrl');
let profileCtrl = require('../controllers/profileCtrl');

router
    .get('/', userCtrl.get.index)
    .post('/auth/registration', userCtrl.post.registration)
    .post('/auth/login', userCtrl.post.login)
    .get('/auth/logout', userCtrl.get.logout)
    .get('/api/v1/profile', profileCtrl.get.profile)
    .post('/api/v1/profile', profileCtrl.post.profile);

module.exports = router;