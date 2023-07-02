const Router = require('express').Router();
const DashboardController = require('./dashboard.controller');

Router.get('/', DashboardController.index);
Router.get('/pemesanan', DashboardController.termsOfService);
Router.post('/pemesanan', DashboardController.handleTermsOfService);
Router.get('/pemesanan/1', DashboardController.visitDate);
Router.get('/pemesanan/2', DashboardController.index);

module.exports = Router;
