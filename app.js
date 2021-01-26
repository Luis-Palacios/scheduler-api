require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./data/models').sequelize;

db.authenticate()
    .then(() => console.log('connection to db success'))
    .catch((error) => console.error('Unable to connect to the database:', error))

var indexRouter = require('./routes/index');
var appointmentsRoutes = require('./routes/appointments');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/appointments', appointmentsRoutes);

module.exports = app;
