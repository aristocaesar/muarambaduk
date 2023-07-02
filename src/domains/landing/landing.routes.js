const Router = require('express').Router();
const LandingController = require('./landing.controller');
const PagesController = require('../pages/pages.controller');

Router.get('/', LandingController.index);

Router.get('/paket-camping', PagesController.packages);
Router.get('/paket-camping/kustom', PagesController.packagesDetail);
Router.get('/paket-camping/:slug', PagesController.packagesDetail);

Router.get('/tentang', PagesController.about);
Router.get('/kebijakan-privasi', PagesController.privacyPolicy);
Router.get('/syarat-ketentuan', PagesController.termsService);
Router.get('/kontak', PagesController.contact);
Router.get('/faq', PagesController.faq);
Router.get('/tiket', PagesController.ticket);
Router.get('/masuk', PagesController.login);
Router.get('/berita', PagesController.news);
Router.get('/berita/:slug', PagesController.newsDetail);

module.exports = Router;
