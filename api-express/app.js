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

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
// MongoDB Connection
const options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

mongoose.connect('mongodb://localhost:27017/lab2', options, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  } else {
  	console.log('Mongo is up and running!');
  }
});

// mongoose.connect(connectionOptions);
app.use(session({
  secret: 'tarunarorareactexpress',
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


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
const auth = require('./routes/auth')(passport);
const jobs = require('./routes/jobs');

//Using Routes
app.use('/api/jobs', jobs);
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
