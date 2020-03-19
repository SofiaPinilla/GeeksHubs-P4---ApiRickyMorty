const Sequelize = require('sequelize');
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const { sequelize } = require('./models/index');

app.use(express.json())

//error del cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/personajes', (req, res) => {
    sequelize.query(`SELECT * FROM personajes`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los personajes')
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

app.get('/episodes', (req, res) => {
    sequelize.query(`SELECT * FROM episodes`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los episodes')
        })
})
app.get('/episodes', (req, res) => {
    const nombre = req.params.name;
    sequelize.query(`SELECT * FROM episodes WHERE name LIKE'%${nombre}%'`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los episodios')
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