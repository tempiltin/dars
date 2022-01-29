const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exhbs = require('express-handlebars')

const app = express();

// config file
require('dotenv').config({ path: './.env' })

// export qilingan routersni index js failiga emport qilib olamiz
const homeRouter = require('./routers/home')
const contactRouter = require('./routers/contact')


// Using exhbs = hbs dan foydalanish 
const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true
    }
  })


  app.engine('hbs', hbs.engine)

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');
  
  require('./helper/db')()
  
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  
// Using routers foydalanish
app.use('/', homeRouter)
app.use('/contact', contactRouter)


// Listening port
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;
  