const Axios = require('../../../config/axios');
const CheckinModel = require('../../models/checkin.model');
const { PaymentModel } = require('../../models/payment.model');
const { PaymentDetailModel } = require('../../models/payment_detail.model');
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

  static async historyPayment(req, res, next) {
    const { id_user: user } = req.user;
    const _paymentsHistory = await Axios.get(`payments/user/${user}`)
      .then((response) =>
        response.data.map((transaction) =>
          new PaymentModel(transaction).toJson()
        )
      )
      .catch(() => []);

    res.render('dashboard/payment-history', {
      title: 'Riwayat Pemesanan',
      name: 'Riwayat Pemesanan',
      history: _paymentsHistory,
    });
  }

  static async showHistoryPayment(req, res, next) {
    const { id: order_id } = req.params;
    const _paymentHistory = await Axios.get(`payments/${order_id}`)
      .then((response) => new PaymentDetailModel(response.data).toJson())
      .catch(() => []);

    if (_paymentHistory.length == 0)
      return res.redirect('/dashboard/riwayat-pemesanan');

    const _reviews = await Axios.get(`reviews/payment/${_paymentHistory.id}`)
      .then((response) => response.data)
      .catch(() => []);

    res.render('dashboard/payment-detail', {
      title: `Pembayaran - ${order_id}`,
      name: 'Pembayaran',
      summary: order_id,
      history: _paymentHistory,
      review: _reviews,
      message: req.flash('message'),
    });
  }

  static async reviewStore(req, res, next) {
    const { id: order_id } = req.params;
    const { id_package, id_payment, star, description } = req.body;
    const { id_user } = req.user;

    await Axios.post(`reviews`, {
      id_package: id_package.split('_'),
      id_payment,
      id_user,
      star,
      description,
    })
      .then(() => req.flash('message', 'Berhasil menambahkan sebuah ulasan!'))
      .catch(() => []);

    res.redirect(`/dashboard/riwayat-pemesanan/${order_id}`);
  }

  static async reviewUpdate(req, res, next) {
    const { id: order_id } = req.params;
    const { id_payment, star, description } = req.body;

    await Axios.put(`reviews/${id_payment}`, {
      star,
      description,
    })
      .then(() => req.flash('message', 'Berhasil memperbarui ulasan!'))
      .catch(() => []);

    res.redirect(`/dashboard/riwayat-pemesanan/${order_id}`);
  }

  static async identity(req, res, next) {
    res.render('dashboard/ticket-identity', {
      title: 'Detail Wisatawan',
      name: 'Detail Wisatawan',
    });
  }

  static async overview(req, res, next) {
    res.render('dashboard/payment-overview', {
      title: 'Rincian Pemesanan',
      name: 'Rincian Pemesanan',
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

  static async handleCheckin(req, res, next) {
    const { date, date_types, camping, ...ticketsPackages } = req.body;
    const tickets = Object.keys(ticketsPackages).reduce((acc, key) => {
      if (key.includes('ticket')) {
        const newKey = key.substring(7);
        acc[newKey] = ticketsPackages[key];
      }
      return acc;
    }, {});
    const packages = Object.keys(ticketsPackages).reduce((acc, key) => {
      if (key.includes('package')) {
        const newKey = key.substring(8);
        acc[newKey] = ticketsPackages[key];
      }
      return acc;
    }, {});

    res.cookie(
      'checkin',
      {
        date,
        date_types,
        camping,
        tickets,
        packages,
      },
      {
        maxAge: 3600000,
      }
    );

    if (camping == 'true') {
      res.redirect('/dashboard/pemesanan/identity');
    } else {
      res.redirect('/dashboard/pemesanan/overview');
    }
  }
}

module.exports = DashboardController;
