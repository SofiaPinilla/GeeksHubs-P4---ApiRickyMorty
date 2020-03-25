const { sequelize } = require('../models/index');
const LocationsController = {
    getAll(req, res) {
        sequelize.query(`SELECT * FROM locations`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los locations')
            })
    },
    getId(req, res) {
        const id = req.params.id;
        sequelize.query(`SELECT * FROM locations WHERE id=${id}`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los ids de los locations')
            })
    },
    getName(req, res) {
        const nombre = req.params.name;
        sequelize.query(`SELECT * FROM locations WHERE name LIKE'%${nombre}%'`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los names de los locations')
            })
    },
    getPage(req, res) {
        const start = req.params.page * 20;
        sequelize.query(`SELECT * FROM locations LIMIT ${start},20`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('We had a problem trying to load the locations')
            })
    }

}

module.exports = LocationsController