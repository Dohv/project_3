const express = require('express');
const tadaController = require('../controllers/tadaController');

const todoRoutes = express.Router();


todoRoutes.get('/', tadaController.index);
todoRoutes.get('/:id', tadaController.show);
todoRoutes.post('/', tadaController.create);
todoRoutes.put('/:id', tadaController.update);
todoRoutes.delete('/:id', tadaController.destroy);

module.exports = todoRoutes;