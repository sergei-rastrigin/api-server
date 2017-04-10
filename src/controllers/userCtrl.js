let validator = require('email-validator');
let User = require('../models/user');
let passport = require('passport');

let userCtrl = function userCtrl() {
    function postRegistration(req, res) {
        let isEmailValid = validator.validate(req.body.username);
        let userDefault = {
            username: req.body.username,
            masterInfo: {
                exp: 0,
                styles: [],
                tatoos: [],
                flashes: []
            },
            isMaster: req.body.isMaster,
            firstName: '',
            lastName: '',
            age: 0,
            city: '',
            description: '',
            address: '',
            mobile: '',
            email: '',
            sex: '',
            avatar: '',
            background: '',
            social: {
                facebook: '',
                vk: '',
                instagram: ''
            }
        };

        if (isEmailValid) {
            User.register(new User(userDefault), req.body.password,
                (err, user) => {
                    if (err) {
                        req.flash('error', err.message);
                        res.redirect('/auth/registration');
                    }

                    passport.authenticate('local')(req, res, () => {
                        res.redirect('/');
                    });
                });
        }
        else {
            req.flash('error', 'your email is not valid');
            res.render('registration');
        }
    }

    function getRegistration(req, res) {
        res.render('registration');
    }

    function getLogin(req, res) {
        if (req.user) {
            res.redirect('/');
        }
        else {
            res.render('login');
        }
    }

    function postLogin(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/auth/login',
            failureFlash: true
        })(req, res, next);
    }

    function checkUser(req, res, next) {
        if (req.url === '/auth/login') {
            next();
        } else if (!req.user) {
            res.redirect('/auth/login');
        } else {
            next();
        }
    }

    function getIndex(req, res, next) {
        res.render('index');
    }

    function getLogout(req, res) {
        req.logout();
        res.redirect('/');
    }


    return {
        checkUser,
        get: {
            login: getLogin,
            registration: getRegistration,
            index: getIndex,
            logout: getLogout
        },
        post: {
            login: postLogin,
            registration: postRegistration
        }
    }
}

module.exports = userCtrl();
