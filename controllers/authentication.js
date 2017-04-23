const User = require('../models/user');
const passport = require('passport');
const jwt = require('jwt-simple');
const {secret} = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, secret);
}

function signup(req, res, next) {
    const {email, password} = req.body;

    if (!email || !password) {
        res.status(422).send({error: 'You must provide email and password'});
    }


    // See if a user with the given email exists
    User.findOne({email}, (err, existingUser) => {
        if (err) {
            return next(err)
        }

        if (existingUser) {
            return res.status(422).send({error: 'email is in use'});
        }

        const user = new User({
            email,
            password
        });

        user.save(err => {
            if (err) {
                return next(err)
            }

            res.json({token: tokenForUser(user)});
        })
    });
}


function signin(req, res, next) {
    res.json({token: tokenForUser(req.user)});
}

function signout(req, res) {
    req.logout();
    res.status(200).json({isAuthenticated: false});
}


module.exports = {
    signup,
    signin,
    signout
};
