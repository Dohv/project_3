const express = require('express');
const cityController = require('../controllers/cityController');

const cityRoutes = express.Router();

cityRoutes.get('/', cityController.index);
cityRoutes.get('/:id', cityController.show);

module.exports = cityRoutes;