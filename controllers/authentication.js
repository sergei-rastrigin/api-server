const User = require('../models/user');
const passport = require('passport');

function signup(req, res, next) {
    const {email, password} = req.body;

    if (!email || !password) {
        res.status(422).send({error: 'You must provide email and password'});
    }


    // See if a user with the given email exists
    User.findOne({email}, (err, existingUser) => {
        if (err) { return next(err)}

        if (existingUser) {
            return res.status(422).send({error: 'email is in use'});
        }

        const user = new User({
            email,
            password
        });

        user.save(err => {
            if (err) { return next(err)}

            res.json({success: true});
        })
    });

    // User.register(new User({email: email}), password,
    //     (err, user) => {
    //         if (err) {
    //             res.json({error: err.message});
    //         }
    //
    //         passport.authenticate('local')(req, res, () => {
    //             res.status(200).json({registration: 'ok'});
    //         });
    //     });
}


function signin(req, res, next) {
    passport.authenticate('local', (err, user) => {
        if (!user) {
            res.json({isAuthenticated: false, error: 'Invalid email or password'});
        } else {
            res.json({isAuthenticated: true});
        }
    })(req, res);
}

function logout(req, res) {
    req.logout();
    res.status(200).json({isAuthenticated: false});
}


module.exports = {
    signup,
    signin,
    logout
};
