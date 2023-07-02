const Axios = require('../../../config/axios');
const NewsModel = require('../../models/news.model');
const PackagesModel = require('../../models/packages.model');
const TicketModel = require('../../models/ticket.model');

class PagesController {
  static async packages(req, res, next) {
    const _packages = await Axios.get('packages/category/general')
      .then((response) =>
        response.data
          .map((_package) => new PackagesModel(_package).toJson())
          .reverse()
      )
      .catch(() => []);

    res.render('pages/packages/packages', {
      title: 'Paket Camping',
      name: 'Paket Untuk Camping',
      summary: 'Kamu dapat memilih paket camping sesuai kebutuhanmu',
      packages: _packages,
    });
  }

  static async packagesDetail(req, res, next) {
    const _package = await Axios.get(`packages/${req.params.slug}`)
      .then((response) => new PackagesModel(response.data).toJson())
      .catch(() => []);

    const _reviews = await Axios.get(`reviews/package/${_package.id}`)
      .then((response) => response.data)
      .catch(() => []);

    res.render('pages/packages/package-detail', {
      title: `Paket ${_package.title}`,
      name: 'Paket Untuk Camping',
      summary: _package.title,
      package_detail: _package,
      reviews: _reviews,
    });
  }

  static async about(req, res, next) {
    const _about = await Axios.get('pages/about')
      .then((response) => response.data)
      .catch(() => []);

    res.render('pages/about', {
      title: 'Tentang Kami',
      name: 'Tentang Kami',
      about: _about.body,
    });
  }

  static async privacyPolicy(req, res, next) {
    const _privacyPolicy = await Axios.get('pages/privacy-policy')
      .then((response) => response.data)
      .catch(() => []);

    res.render('pages/privacy-policy', {
      title: 'Kebijakan Privasi',
      name: 'Kebijakan Privasi',
      privacy_policy: _privacyPolicy.body,
    });
  }

  static async termsService(req, res, next) {
    const _termsOfService = await Axios.get('pages/terms-of-service')
      .then((response) => response.data)
      .catch(() => []);

    res.render('pages/terms-of-service', {
      title: 'Syarat dan Ketentuan',
      name: 'Syarat dan Ketentuan',
      terms_of_service: _termsOfService.body,
    });
  }

  static async contact(req, res, next) {
    res.render('pages/contact', {
      title: 'Kontak',
      name: 'Kontak',
    });
  }

  static async faq(req, res, next) {
    const _faq = await Axios.get('faq')
      .then((response) => response.data)
      .catch(() => []);

    res.render('pages/faq', {
      title: 'Frequently Asked Questions',
      name: 'Frequently Asked Questions',
      faq: _faq,
    });
  }

  static async ticket(req, res, next) {
    const _tickets = await Axios.get('tickets')
      .then((response) =>
        response.data.map((ticket) => new TicketModel(ticket).toJson())
      )
      .catch(() => []);

    res.render('pages/ticket', {
      title: 'Tiket',
      name: 'Harga Tiket',
      tickets: _tickets,
    });
  }

  static async login(req, res, next) {
    res.render('auth/login', {
      title: 'Masuk',
      name: 'Pemesanan Tiket & Alat Camping',
      summary: 'Pesan tiket dan kebutuhan alat campingmu secara online',
    });
  }

  static async news(req, res, next) {
    const _news = await Axios.get('news')
      .then((response) =>
        response.data.map((news) => new NewsModel(news).toJson())
      )
      .catch(() => []);

    res.render('news/index', {
      title: 'Berita',
      name: 'Berita',
      summary: 'Informasi terbaru wisata alam Muara Mbaduk',
      news: _news,
    });
  }

  static async newsDetail(req, res, next) {
    const _news = await Axios.get(`news/${req.params.slug}`)
      .then((response) => new NewsModel(response.data).toJson())
      .catch(() => []);

    res.render('news/single', {
      title: _news.title,
      name: _news.title,
      summary: _news.created_at_formated,
      news: _news,
    });
  }
}

module.exports = PagesController;