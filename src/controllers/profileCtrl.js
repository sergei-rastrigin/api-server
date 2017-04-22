let User = require('../models/user');

let profileCtrl = function profileCtrl() {
    function getProfile(req, res) {
        let excluded = {
            salt: false,
            hash: false,
            __v: false
        };

        res.json(
            {"hello": "server"}
        );

        // User.findById(req.user._id, excluded, function (err, user) {
        //     if (err) throw err;
        //     res.json(user);
        // });
    }

    function postProfile(req, res) {
        let {
            firstName,
            lastName,
            age,
            city,
            description,
            address,
            mobile,
            email,
            sex,
            social
        } = req.body;

        User.update({_id: req.user._id}, {
            $set: {
                firstName, lastName, age, city, description,
                address, mobile, email, sex, social
            }
        }, function (err, user) {
            if (err) throw err;
            res.status(200).end();
        });
    }

    return {
        get: {
            profile: getProfile
        },
        post: {
            profile: postProfile
        }
    }

};

module.exports = profileCtrl();