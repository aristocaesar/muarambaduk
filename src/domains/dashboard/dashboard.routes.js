const Router = require('express').Router();
const DashboardController = require('./dashboard.controller');

Router.get('/', DashboardController.index);
Router.get('/pemesanan', DashboardController.termsOfService);
Router.post('/pemesanan', DashboardController.handleTermsOfService);
Router.get('/pemesanan/visit', DashboardController.visitDate);
Router.post('/pemesanan/visit', DashboardController.visitDate);
Router.get('/keluar', (req, res) => {
  req.session.destroy();
  res.redirect('/masuk');
});

module.exports = Router;
