const express = require('express');
const { sequelize } = require('../models/index');
const router = express.Router();

router.get('/', (req, res) => {
    sequelize.query(`SELECT * FROM locations`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los locations')
        })
})
router.get('/:page', (req, res) => {
    const start = req.params.page * 20;
    sequelize.query(`SELECT * FROM locations LIMIT ${start},20`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('We had a problem trying to load the locations')
        })
})

//Filtro por id del location
router.get('/id/:id', (req, res) => {
        const id = req.params.id;
        sequelize.query(`SELECT * FROM locations WHERE id=${id}`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los ids de los locations')
            })
    })
    //Filtro por nombre del planeta(location)
router.get('/:name', (req, res) => {
    const nombre = req.params.name;
    sequelize.query(`SELECT * FROM locations WHERE name LIKE'%${nombre}%'`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los names de los locations')
        })
})

module.exports = router;