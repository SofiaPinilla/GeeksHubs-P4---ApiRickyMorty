const express = require('express');
const PersonajesController = require('../controllers/PersonajesController.js');
const router = express.Router();
//Endpoint
router.get('/', PersonajesController.getAll);
//Filtro por id del personaje
router.get('/id/:id', PersonajesController.getId);
//Filtro por nombre del personaje
router.get('/:name', PersonajesController.getName);

module.exports = router;