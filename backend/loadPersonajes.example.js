// const axios = require('axios')
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('rickymorty', 'root', '123456', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// for (let i = 0; i < 26; i++) {
//     axios.get('https://rickandmortyapi.com/api/character/?page=' + i)
//         .then(res => {
//             const personajes = res.data.results;
//             for (const personaje of personajes) {
//                 sequelize.query(`INSERT INTO personajes (id,name, status, species, gender, image_path)
//         VALUES (${personaje.id},'${personaje.name}', '${personaje.status}', '${personaje.species}','${personaje.gender}','${personaje.image}');`)
//             }
//         })

// }