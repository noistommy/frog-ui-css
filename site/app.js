const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
// var pagesRouter = require('./routes/pages');
const i18n = require('./i18n');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(i18n);

app.get(/^\/ko(\/.*)?$/, (req, res, next) => {
  res.cookie('lang', 'ko');
  console.log('ko')
  const path = req.path.replace(/^\/ko/, '') || '/';
  res.redirect(path);
});

app.get(/^\/en(\/.*)?$/, (req, res, next) => {
  res.cookie('lang', 'en');
  console.log('en')
  const path = req.path.replace(/^\/en/, '') || '/';
  res.redirect(path);
});


app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;
