const Router = require('express').Router();
const DashboardController = require('./dashboard.controller');

Router.get('/', DashboardController.index);
Router.get('/pemesanan', DashboardController.termsOfService);
Router.post('/pemesanan', DashboardController.handleTermsOfService);
Router.get('/pemesanan/visit', DashboardController.visitDate);

module.exports = Router;
