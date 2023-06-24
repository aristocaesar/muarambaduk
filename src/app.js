require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const LandingRoutes = require('./domains/landing/landing.routes');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayout);
app.set('layout', path.join(__dirname, 'views/layout/app'));

// Global Varibales
app.locals.locale = process.env.BASE_URL;

// Routes
app.use('/', LandingRoutes);

app.get((request, response, next) => {
  response.send('404 Not Found!');
});

exports.app = app;
