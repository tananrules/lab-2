const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//Cors for cross origin requests
const cors = require('cors');

//Passport
const passport = require('passport');

//Mongoose
const mongoose = require('mongoose');

const app = express();

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/lab2', (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  } else {
  	console.log('Mongo is up and running!');
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Using CORS
app.use(cors());

//Initialize Passport
app.use(passport.initialize());

//Routes
const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth')(passport);

//Using Routes
app.use('/', index);
// app.use('/users', users);
app.use('/api/auth', auth);

const user = require('./models/user');
require('./config/passport.js')(passport, user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
