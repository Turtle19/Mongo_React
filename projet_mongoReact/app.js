var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// connection to database
const dbConnection = require('./controllers/db.js');

const indexRouter = require('./routes/index');
const error = require('./routes/error');
// routes pour ressources
const ressourcesrest = require('./routes/ressourcesrest');

// routes pour clients
const clientsrest = require('./routes/clientsrest');


//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// define the root path for the routes
app.use('/', indexRouter);
app.use('/ressourcesrest', ressourcesrest);
app.use('/clientsrest', clientsrest);
//app.use('/users', usersRouter);

// error handle
app.use(error);

module.exports = app;
