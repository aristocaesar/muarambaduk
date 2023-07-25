const Router = require('express').Router();
const DashboardController = require('./dashboard.controller');

Router.get('/', DashboardController.index);
Router.get('/pemesanan', DashboardController.termsOfService);
Router.post('/pemesanan', DashboardController.handleTermsOfService);
Router.get('/pemesanan/visit', DashboardController.visitDate);
Router.post('/pemesanan/visit', DashboardController.handleCheckin);
Router.get('/pemesanan/identity', DashboardController.identity);
Router.get('/pemesanan/overview', DashboardController.overview);
Router.get('/riwayat-pemesanan', DashboardController.historyPayment);
Router.get('/riwayat-pemesanan/:id', DashboardController.historyPayment);
Router.get('/keluar', (req, res) => {
  req.session.destroy();
  res.redirect('/masuk');
});

module.exports = Router;
