const Axios = require('../../../config/axios');

class DashboardController {
  static async index(req, res, next) {
    const _latestInformation = await Axios.get('pages/latest-informations')
      .then((response) => response.data)
      .catch(() => []);

    res.render('dashboard/index', {
      title: 'Dashboard',
      name: `Halo, ${'Aristo Caesar Pratama'}`,
      latest_information: _latestInformation,
    });
  }

  static async termsOfService(req, res, next) {
    const _termsOrder = await Axios.get('pages/terms-order')
      .then((response) => response.data)
      .catch(() => []);

    res.render('dashboard/terms-of-service', {
      title: 'Syarat dan Ketentuan',
      name: 'Syarat dan Ketentuan',
      terms_order: _termsOrder,
    });
  }

  static async handleTermsOfService(req, res, next) {
    res.redirect('/dashboard/pemesanan/1');
  }

  static async visitDate(req, res, next) {
    res.render('dashboard/visit-date', {
      title: 'Tanggal Kunjungan',
      name: 'Tanggal Kunjungan',
    });
  }
}

module.exports = DashboardController;
