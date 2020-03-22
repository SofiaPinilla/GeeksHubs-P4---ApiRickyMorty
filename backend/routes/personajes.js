const express = require('express');
const { sequelize } = require('../models/index');
const router = express.Router();

router.get('/', (req, res) => {
    sequelize.query(`SELECT * FROM personajes`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los personajes')
        })
})

//Filtro por id del personaje
router.get('/id/:id', (req, res) => {
        const id = req.params.id;
        sequelize.query(`SELECT * FROM personajes WHERE id=${id}`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los ids de los personajes')
            })
    })
    //Filtro por nombre del personaje
router.get('/:name', (req, res) => {
    const nombre = req.params.name;
    sequelize.query(`SELECT * FROM personajes WHERE name LIKE'%${nombre}%'`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los nombres de los personajes')
        })
})

module.exports = router;