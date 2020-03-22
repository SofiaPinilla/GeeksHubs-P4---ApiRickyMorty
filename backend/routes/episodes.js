const express = require('express');
const { sequelize } = require('../models/index');
const router = express.Router();

router.get('/', (req, res) => {
    sequelize.query(`SELECT * FROM episodes`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los episodes')
        })
})



//Filtro por id del episodio
router.get('/id/:id', (req, res) => {
        const id = req.params.id;
        sequelize.query(`SELECT * FROM episodes WHERE id=${id}`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los ids de los episodes')
            })
    })
    //Filtro por nombre del episodio
router.get('/name/:name', (req, res) => {
    const nombre = req.params.name;
    sequelize.query(`SELECT * FROM episodes WHERE name LIKE'%${nombre}%'`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los episodios')
        })
})

router.post('/', (req, res) => {
    Episode.create({...req.body })
        .then(episode => res.status(201).send(episode))
})

module.exports = router;