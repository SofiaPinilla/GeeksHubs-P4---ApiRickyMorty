const Sequelize = require('sequelize');
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const { sequelize, Episode } = require('./models/index');

app.use(express.json())

//error del cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Endpoints
app.get('/personajes', (req, res) => {
    sequelize.query(`SELECT * FROM personajes`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los personajes')
        })
})

app.get('/episodes', (req, res) => {
    sequelize.query(`SELECT * FROM episodes`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los episodes')
        })
})

app.get('/locations', (req, res) => {
    sequelize.query(`SELECT * FROM locations`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los locations')
        })
})
app.get('/locations/:page', (req, res) => {
    const start = req.params.page * 20;
    sequelize.query(`SELECT * FROM locations LIMIT ${start},20`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('We had a problem trying to load the locations')
        })
})

//Filtro por id del personaje
app.get('/personajes/id/:id', (req, res) => {
        const id = req.params.id;
        sequelize.query(`SELECT * FROM personajes WHERE id=${id}`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los ids de los personajes')
            })
    })
    //Filtro por nombre del personaje
app.get('/personajes/:name', (req, res) => {
    const nombre = req.params.name;
    sequelize.query(`SELECT * FROM personajes WHERE name LIKE'%${nombre}%'`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los nombres de los personajes')
        })
})

//Filtro por id del episodio
app.get('/episodes/id/:id', (req, res) => {
        const id = req.params.id;
        sequelize.query(`SELECT * FROM episodes WHERE id=${id}`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los ids de los episodes')
            })
    })
    //Filtro por nombre del episodio
app.get('/episodes/name/:name', (req, res) => {
    const nombre = req.params.name;
    sequelize.query(`SELECT * FROM episodes WHERE name LIKE'%${nombre}%'`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los episodios')
        })
})

//Filtro por id del location
app.get('/locations/id/:id', (req, res) => {
        const id = req.params.id;
        sequelize.query(`SELECT * FROM locations WHERE id=${id}`)
            .then(results => res.send(results[0]))
            .catch(error => {
                console.error(error)
                res.status(500).send('Problema al cargar los ids de los locations')
            })
    })
    //Filtro por nombre del planeta(location)
app.get('/locations/:name', (req, res) => {
    const nombre = req.params.name;
    sequelize.query(`SELECT * FROM locations WHERE name LIKE'%${nombre}%'`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los names de los locations')
        })
})
app.post('/user', (req, res) => {
    User.create({...req.body })
        .then(user => res.status(201).send(user))
})
app.post('/episodes', (req, res) => {
    Episode.create({...req.body })
        .then(episode => res.status(201).send(episode))
})

app.listen(PORT, () => console.log('server runing on ' + PORT))