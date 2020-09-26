var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const { database } = require('../config');
const router = require('./router');
const errorLogger = require('./middleware/errorHandling/errorLogger');
const clientErrorHandler = require('./middleware/errorHandling/clientErrorHandler');
const errorHandler = require('./middleware/errorHandling/errorHandler');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("Successfully connected to Mongo database: planner") });

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(errorLogger);
app.use(clientErrorHandler);
app.use(errorHandler);

module.exports = app;
