const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json())

//error del cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/personajes', require('./routes/personajes'));
app.use('/locations', require('./routes/locations'));
app.use('/episodes', require('./routes/episodes'));

app.listen(PORT, () => console.log('server runing on ' + PORT))