const Authentication = require('./controllers/authentication');
const profileCtrl = require('./controllers/profileCtrl');
const passport = require('passport');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

function routes(app) {
    app
        .get('/', requireAuth, function (req, res, next) {
            res.send('haha its work')
        })
        .post('/signup', Authentication.signup)
        .post('/signin', requireSignIn, Authentication.signin)
        .post('/signout', Authentication.signout);
}

module.exports = routes;