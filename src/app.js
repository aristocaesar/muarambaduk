require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const RootRoutes = require('./domains/landing/landing.routes');
const DashboardRoutes = require('./domains/dashboard/dashboard.routes');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayout);
app.set('layout', path.join(__dirname, 'views/layout/app'));

// Global Varibales
app.locals.locale = process.env.BASE_URL;
app.locals.summary = undefined;

// Routes
app.use('/', RootRoutes);
app.use('/dashboard', DashboardRoutes);

app.get('*', (request, response, next) => {
  response.render('pages/404', {
    title: 'Halaman Tidak Ditemukan',
    name: 'Halaman Tidak Ditemukan',
  });
});

exports.app = app;
