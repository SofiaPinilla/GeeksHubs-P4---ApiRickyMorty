const express = require('express');
const LocationsController = require('../controllers/LocationsController.js');
const router = express.Router();
//Endpoint
router.get('/', LocationsController.getAll);
//Filtro Locations por pagina
router.get('/:page', LocationsController.getPage);
//Filtro por id del location
router.get('/id/:id', LocationsController.getId);
//Filtro por nombre del planeta(location)
router.get('/:name', LocationsController.getName);

module.exports = router;