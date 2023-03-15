const grid = document.querySelector("#grid-movies");

function init(){
    getMovies()

}
init()
async function getMovies(){
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-ES");
    const data = await res.json();

    data.results.forEach(movie => {
        grid.innerHTML+=`
        <article>
            <img class="poster"
                src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
                     
            <h3>${movie.title}</h3>
        </article>
        
        
        `
    });
}


/*
const cargarPeliculas = async () => {

    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-ES');
    if(respuesta.status === 200){
        const datos = await respuesta.json();
        pintarPeliculas(datos.results)
    }
    else if (respuesta.status===401) console.log("Error en la llave");
    else if (respuesta.status===404) console.log("pelicula no encontrada");
    else console.log("Error critico");

    }
    catch(error){
        console.log("error")
    }
}*/



init()