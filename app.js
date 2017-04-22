const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const {dbURL} = require('./config');
const routes = require('./routes');
const app = express();

mongoose.connect(dbURL);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

const port = process.env.PORT || '3000';
const server = http.createServer(app);
server.listen(port);
