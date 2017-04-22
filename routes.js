let Authentication = require('./controllers/authentication');
let profileCtrl = require('./controllers/profileCtrl');

function routes(app) {
    app
        .post('/signup', Authentication.signup)
        .post('/signin', Authentication.signin)
        .post('/logout', Authentication.logout);
}

module.exports = routes;