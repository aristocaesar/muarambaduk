class LandingController {
  static async index(request, response, next) {
    response.render('landing/index', {
      title: 'Beranda',
    });
  }
}

module.exports = LandingController;
