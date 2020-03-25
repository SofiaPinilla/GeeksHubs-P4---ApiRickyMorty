const express = require('express');
const EpisodesController = require('../controllers/EpisodesController.js');
const router = express.Router();

//Endpoint
router.get('/', EpisodesController.getAll);
//Filtro por id del episodio
router.get('/id/:id', EpisodesController.getId);
//Filtro por nombre del episodio
router.get('/:name', EpisodesController.getName);
//Post Episodes
router.post('/', EpisodesController.postEpisode);

module.exports = router;