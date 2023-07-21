const Router = require('express').Router();
const LandingController = require('./landing.controller');
const PagesController = require('../pages/pages.controller');
const Authentication = require('../../middleware/authentication');
const passport = require('passport');

Router.get('/', LandingController.index);

Router.get('/paket-camping', PagesController.packages);
Router.get(
  '/paket-camping/kustom',
  Authentication.checkLogin,
  PagesController.packageCustom
);
Router.post(
  '/paket-camping/kustom',
  Authentication.checkLogin,
  PagesController.requestPackageCustom
);
Router.get('/paket-camping/:slug/checkout', PagesController.packageCheckout);
Router.get('/paket-camping/:slug', PagesController.packagesDetail);

Router.get('/tentang', PagesController.about);
Router.get('/kebijakan-privasi', PagesController.privacyPolicy);
Router.get('/syarat-ketentuan', PagesController.termsService);
Router.get('/kontak', PagesController.contact);
Router.get('/faq', PagesController.faq);
Router.get('/tiket', PagesController.ticket);

Router.get('/masuk', Authentication.isLogin, PagesController.login);
Router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);
Router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/masuk',
    failureFlash: true,
  })
);

Router.get('/berita', PagesController.news);
Router.get('/berita/:slug', PagesController.newsDetail);

module.exports = Router;
