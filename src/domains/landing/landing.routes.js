const Router = require('express').Router();
const LandingController = require('./landing.controller');

Router.get('/', LandingController.index);

module.exports = Router;
