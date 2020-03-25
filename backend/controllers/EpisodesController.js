const { Episode, sequelize } = require('../models/index');
const EpisodesController = {
    getAll(req, res) {
        sequelize.query(`SELECT * FROM episodes`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los episodes')
            })
    },
    getId(req, res) {
        const id = req.params.id;
        sequelize.query(`SELECT * FROM episodes WHERE id=${id}`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los ids de los episodes')
            })
    },
    getName(req, res) {
        const nombre = req.params.name;
        sequelize.query(`SELECT * FROM episodes WHERE name LIKE'%${nombre}%'`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los episodios')
            })
    },
    postEpisode(req, res) {
        Episode.create({...req.body })
            .then(episode => res.status(201).send(episode))
    }
}



module.exports = EpisodesController