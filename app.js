const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const dbURL = require('./src/config/db.json').dbURL;
const router = require('./src/routes');
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');

mongoose.connect(dbURL);
let db = mongoose.connection;

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // log every request to the console
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// init passport settings and strategies
require('./src/config/passport')(app);

app.use(router);
/*  error handlers  */

app.use(function (req, res, next) {
    res.status(404).render('404', {
        message: 'Not Found'
    });
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// subscribing on mongoose events
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
});

module.exports = app;
