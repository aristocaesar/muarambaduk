const Axios = require('../../../config/axios');
const CheckinModel = require('../../models/checkin.model');
const Dates = require('../../utils/date');

class DashboardController {
  static async index(req, res, next) {
    const _latestInformation = await Axios.get('pages/latest-informations')
      .then((response) => response.data)
      .catch(() => []);

    res.render('dashboard/index', {
      title: 'Dashboard',
      name: `Halo, ${req.user.displayName}`,
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
    res.redirect('/dashboard/pemesanan/visit');
  }

  static async visitDate(req, res, next) {
    const { date, camping, checkout } = req.query;
    let visit_overview = [];
    if (date != undefined || camping != undefined) {
      await Axios.post('tickets/checkin', {
        date,
        camping: camping == 'true' ? true : camping == 'false' ? false : '',
      })
        .then(
          (response) =>
            (visit_overview = new CheckinModel(response.data).toJson())
        )
        .catch(() => (visit_overview = []));
    }

    res.render('dashboard/visit-date', {
      title: 'Tanggal Kunjungan',
      name: 'Tanggal Kunjungan',
      checkout,
      dateNow: new Dates().now(),
      visit_overview,
      error: req.flash('error'),
    });
  }
}

module.exports = DashboardController;
