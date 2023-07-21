const Axios = require('../../../config/axios');
const NewsModel = require('../../models/news.model');
const PackagesModel = require('../../models/packages.model');
const ProductModel = require('../../models/product.model');
const TicketModel = require('../../models/ticket.model');
const Dates = require('../../utils/date');

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

  static async packageCheckout(req, res, next) {
    const { packages } = req.query;
    req.flash(
      'error',
      'Untuk melanjutkan pemesanan, harap mengisi informasi kunjungan dibawah ini.'
    );
    res.redirect(`/dashboard/pemesanan/visit?checkout=${packages}`);
  }

  static async packageCustom(req, res, next) {
    const _products = await Axios.get(`products`)
      .then((response) =>
        response.data.map((product) => new ProductModel(product).toJson())
      )
      .catch(() => []);

    res.render('pages/packages/custom', {
      title: 'Kustom Paket',
      name: 'Buat Rencana Campingmu Sendiri',
      products: _products,
      dateNow: new Dates().now(),
    });
  }

  static async requestPackageCustom(req, res, next) {
    const { date, fullname, note, ...products } = req.body;
    const email = req.user.emails[0].value;

    const productSelected = Object.keys(products)
      .filter((key) => products[key] !== '0')
      .map(
        (key, index) => `${index + 1}. ${key} ( Quantity : ${products[key]})`
      )
      .join('\n');

    res.redirect(
      301,
      `https://api.whatsapp.com/send?phone=${process.env.NUMBER_PHONE}&text=Halo%20Muarambaduk%2C%20Saya%20${fullname}%20(%20${email}%20).%0A%0ASaya%20ingin%20melakukan%20pemesanan%20paket%20camping%20untuk%20tanggal%20${date}.%20Berikut%20adalah%20daftar%20peralatan%20yang%20ingin%20saya%20pesan%3A%0A%0A${productSelected}%0A%0ACatatan%20%3A%20${note}%0A%0AMohon%20konfirmasi%20ketersediaan%20peralatan%20dan%20total%20biaya%20pemesanannya.%0ATerima%20kasih.`
    );
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
      title: 'Informasi dan Bantuan',
      name: 'Informasi dan Bantuan',
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
      error: req.flash('error'),
    });
  }

  static async handleLogin(req, res, next) {
    const { token } = req.body;
    return await Axios.post('users/login', { token })
      .then(async (user) => {
        await Axios.post('users/account', {
          token: user.data,
        })
          .then((success) => {
            req.session.user = success.data;
            return;
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        return error;
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
