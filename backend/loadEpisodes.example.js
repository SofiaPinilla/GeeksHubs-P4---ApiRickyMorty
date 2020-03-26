// const axios = require('axios')
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('rickymorty', 'root', 'null', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// for (let i = 0; i < 3; i++) {
//     axios.get('https://rickandmortyapi.com/api/episode/?page=' + i)
//         .then(res => {
//             const episodes = res.data.results;
//             for (const episode of episodes) {
//                 sequelize.query(`INSERT INTO episodes (id,name, air_date, episode,createdAt,updatedAt)
//         VALUES (${episode.id},'${episode.name}', '${episode.air_date}', '${episode.episode}',null,null);`)
//             }
//         })

// }