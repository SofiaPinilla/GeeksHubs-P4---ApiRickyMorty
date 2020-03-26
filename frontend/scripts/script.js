API_URL = "http://localhost:3001/"
const personajesDiv = document.querySelector('.personajes')
const locationsDiv = document.querySelector('.locations')
const episodesDiv = document.querySelector('.episodes')
const formEpisode = document.querySelector('#formEpisode')
const formBuscar = document.getElementById('formBuscar')
let page = 0

//función para añadir episodio
formEpisode.addEventListener('submit', (event) => {
        event.preventDefault();
        saveEpisode();
    })
    //función para buscar personajes con el botón
formBuscar.addEventListener('submit', (event) => {
        event.preventDefault();
        const busqueda = event.target.buscar.value
        axios.get(API_URL + 'personajes/' + busqueda)
            .then(res => {
                const personajes = res.data;
                renderPersonajes(personajes);
            })
            .catch(err => console.error(err))
    })
    //función principal para renderizar los personajes
const renderPersonajes = personajes => {
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

    }
    //función para buscar personajes con intro
const getPersonajes = () => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const busqueda = event.target.value
        axios.get(API_URL + 'personajes/' + busqueda)
            .then(res => {
                const personajes = res.data;
                renderPersonajes(personajes);
            })
            .catch(err => console.error(err))

    }
}
const buscar = document.getElementById('buscar').addEventListener('keyup', getPersonajes)

//función principal para renderizar loocations
const getLocations = (page) => {
    axios.get(API_URL + 'locations/' + page)
        .then(res => {
            const locations = res.data;
            locationsDiv.innerHTML = '';
            locations.forEach(location => {
                locationsDiv.innerHTML += `
            <div class="card col-lg-3 col-xs-12 col-md-6">
                <div class="personaje">
                <div class="card-body">
                <h3 class="card-header">${location.name}</h3>
                <h5 class="card-title">${location.type}</h5>
                <h6 class="card-subtitle text-muted">${location.dimension}</h6>
                </div>
                </div>
                </div>
                 `
            });
        })
        .catch(err => console.error(err))
}

getLocations(page)

//eventos para la paginación
document.querySelector('.previousPage').addEventListener('click', event => {
    if (page > 0) {
        getLocations(--page)
    }
})
document.querySelector('.nextPage').addEventListener('click', event => {
        if (page < 9) {
            getLocations(++page)
        }
    })
    //función principal para renderizar los episodios
const getEpisodes = () => {
    axios.get(API_URL + 'episodes/')
        .then(res => {
            const episodes = res.data;
            episodesDiv.innerHTML = '';
            episodes.forEach(episode => {
                episodesDiv.innerHTML += `
            <div class="card col-lg-3 col-xs-12 col-md-6">
                <div class="personaje">
                <div class="card-body">
                <h3 class="card-header">${episode.name}</h3>
                <h5 class="card-title">${episode.air_date}</h5>
                <h6 class="card-subtitle text-muted">${episode.episode}</h6>
                </div>
                </div>
                </div>
                 `
            });
        })
        .catch(err => console.error(err))
}

getEpisodes()


//menu navegación
const homeBtn = document.getElementById('homeBtn');
const locationBtn = document.getElementById('locationBtn');
const episodesBtn = document.getElementById('episodesBtn')
const home = document.getElementById('home')
const ubicacion = document.getElementById('location');
const episode = document.getElementById('episode');

const quitarDiv = () => {
    home.className = 'invisible'
    ubicacion.className = 'invisible'
    episode.className = 'invisible'
}

const verHome = () => {
    quitarDiv()
    home.className += 'visible';
}

const verUbicacion = () => {
    quitarDiv()
    ubicacion.className += 'visible';
}

const verEpisodes = () => {
    quitarDiv()
    episode.className += 'visible';
}

homeBtn.addEventListener('click', verHome);
locationBtn.addEventListener('click', verUbicacion);
episodesBtn.addEventListener('click', verEpisodes);

//Formulario para añadir episodios

const btn = document.getElementById('btn');
const name = document.getElementById('name')
const air_date = document.getElementById('air_date')
const episodeInput = document.getElementById("episodeInput")


const saveEpisode = () => {
    axios.post('http://localhost:3001/episodes', {
            name: name.value,
            air_date: air_date.value,
            episode: episodeInput.value,
        })
        .then(res => {
            const episode = res.data;
            episodesDiv.innerHTML += `
            <div class="card col-lg-3 col-xs-12 col-md-6">
                <div class="personaje">
                <div class="card-body">
                <h3 class="card-header">${episode.name}</h3>
                <h5 class="card-title">${episode.air_date}</h5>
                <h6 class="card-subtitle text-muted">${episode.episode}</h6>
                </div>
                </div>
                </div>
                 `
        })
        .catch(err => console.error(err))
}