const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const {dbURL} = require('./config');
const routes = require('./routes');
const app = express();

mongoose.connect(dbURL);

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // log every request to the console
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

const port = process.env.PORT || '3000';
const server = http.createServer(app);
server.listen(port);
