API_URL = "http://localhost:3001/"
const personajesDiv = document.querySelector('.personajes')
let page = 0
const getPersonajes = () => {
    if (event.key === 'Enter') {
        const busqueda = event.target.value
        axios.get(API_URL + 'personajes/' + busqueda)
            .then(res => {
                const personajes = res.data;
                personajesDiv.innerHTML = '';
                personajes.forEach(personaje => {
                    personajesDiv.innerHTML += `
                <div class="card col-lg-3 col-xs-12 col-md-6">
                    <div class="personaje">
                    <div class="card-body">
                    <h3 class="card-header">${personaje.name}</h3>
                    <h5 class="card-title">${personaje.species}</h5>
                    <h5 class="card-title">${personaje.status}</h5>
                    <h6 class="card-subtitle text-muted">${personaje.gender}</h6>
                    <img style="height: 200px; width: 100%; display: block;" src="${personaje.image_path}"  alt="Card image">
                    </div>
                    </div>
                    </div>
                     `
                });

            })
    }
}
const buscar = document.getElementById('buscar').addEventListener('keyup', getPersonajes)