class Authentication {
  static checkLogin(req, res, next) {
    if (!req.user) {
      const path = req.path;
      if (path == '/paket-camping/kustom') {
        req.flash(
          'error',
          'Harap masuk terlebih dahulu untuk membuat pesanan.'
        );
      }
      return res.redirect('/masuk');
    }
    next();
  }

  static isLogin(req, res, next) {
    if (req.user) {
      return res.redirect('/dashboard');
    }
    next();
  }
}

module.exports = Authentication;
