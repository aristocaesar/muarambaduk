class Authentication {
  static checkLogin(req, res, next) {
    if (!req.user) {
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
