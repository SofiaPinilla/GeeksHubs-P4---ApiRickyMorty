// const axios = require('axios')
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('rickymorty', 'root', 'null', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// for (let i = 0; i < 5; i++) {
//     axios.get('https://rickandmortyapi.com/api/location/?page=' + i)
//         .then(res => {
//             const locations = res.data.results;
//             for (const location of locations) {
//                 sequelize.query(`INSERT INTO locations (name, type, dimension,createdAt,updatedAt)
//         VALUES ('${location.name}', '${location.type}', '${location.dimension}',null,null);`)
//             }
//         })

// }