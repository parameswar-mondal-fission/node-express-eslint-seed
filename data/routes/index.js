'use strict';

const app = require('express').Router();
const { isAuthenticated } = require('../middlewares/authorization');
const { home } = require('../controllers');

app.get('/', isAuthenticated, home.isHome);

module.exports = app;
