let validator = require('email-validator');
let User = require('../models/user');
let passport = require('passport');

let userCtrl = function userCtrl() {
    function postRegister(req, res) {
        let isEmailValid = validator.validate(req.body.username);

        if (isEmailValid) {
            User.register(new User({username: req.body.username}), req.body.password,
                (err, user) => {
                    if (err) {
                        res.json({error: err.message});
                    }

                    passport.authenticate('local')(req, res, () => {
                        res.status(200).json({registration: 'ok'});
                    });
                });
        }
        else {
            res.json({error: 'Please enter a valid email'});
        }
    }


    function postLogin(req, res, next) {
        passport.authenticate('local', (err, user) => {
            if (!user) {
                res.json({isAuthenticated: false, error: 'Invalid email or password'});
            } else {
                res.json({isAuthenticated: true});
            }
        })(req, res);
    }

    function getIndex(req, res, next) {
        res.render('index');
    }

    function getLogout(req, res) {
        req.logout();
        res.status(200).json({isAuthenticated: false});
    }


    return {
        get: {
            index: getIndex,
            logout: getLogout
        },
        post: {
            login: postLogin,
            register: postRegister
        }
    }
};

module.exports = userCtrl();
