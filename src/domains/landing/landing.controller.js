const Axios = require('../../../config/axios');
const NewsModel = require('../../models/news.model');
const PackagesModel = require('../../models/packages.model');

class LandingController {
  static async index(req, res, next) {
    const _packages = await Axios.get('packages/category/general')
      .then((response) =>
        response.data
          .map((_package) => new PackagesModel(_package).toJson())
          .reverse()
      )
      .catch(() => []);

    const _news = await Axios.get('news')
      .then((response) =>
        response.data.map((news) => new NewsModel(news).toJson())
      )
      .catch(() => []);

    res.render('landing/index', {
      title: 'Beranda',
      name: 'Beranda',
      packages: _packages,
      news: _news,
    });
  }
}

module.exports = LandingController;
