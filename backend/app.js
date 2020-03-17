const Sequelize = require('sequelize');
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const sequelize = new Sequelize('rickymorty', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

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

app.get('/personajes/:page', (req, res) => {
    const start = req.params.page * 20;
    sequelize.query(`SELECT * FROM personajes LIMIT ${start},20`)
        .then(results => res.send(results[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send('Problema al cargar los personajes')
        })
})

app.listen(PORT, () => console.log('server runing on ' + PORT))