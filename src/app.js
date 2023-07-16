require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const RootRoutes = require('./domains/landing/landing.routes');
const DashboardRoutes = require('./domains/dashboard/dashboard.routes');
const Authentication = require('./middleware/authentication');
const passport = require('passport');
require('../config/passport');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayout);
app.set('layout', path.join(__dirname, 'views/layout/app'));

app.use(flash());
app.use(
  session({
    secret: `${process.env.SECRET_SESSION}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Global Varibales
app.locals.locale = process.env.BASE_URL;
app.locals.summary = undefined;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Init Session
app.use((req, res, next) => {
  app.locals.user = req.user;
  console.log(app.locals.user);
  next();
});

// Routes
app.use('/', RootRoutes);
app.use('/dashboard', Authentication.checkLogin, DashboardRoutes);

app.get('*', (request, response, next) => {
  response.render('pages/404', {
    title: 'Halaman Tidak Ditemukan',
    name: 'Halaman Tidak Ditemukan',
  });
});

exports.app = app;
