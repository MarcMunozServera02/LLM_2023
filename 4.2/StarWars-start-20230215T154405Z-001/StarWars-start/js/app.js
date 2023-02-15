// Contants amb les referencies als elements HTML
const listTag = document.querySelector('#figures-list');
const priceTag = document.querySelector('#filter-price');
const priceMinTag = document.querySelector('#filter-min-price');
const btnFiltrarTag = document.getElementById("btn-filter");

let figuresList = [];

// TODO:Petició asíncona per recuperar les figures
function getFigures() {
    fetch('./data/star-wars-figures.json')                      //Busca el JSON con "fetch"
        .then(response => response.json())                      //Con ".then" despues del "fetch" hacemos una arrow function para sacar la informacion JSON
        .then(data => {                                         //Y con otro then sacamos la informacion de json y la pones en una variable global
            // Carregan les daddes JSON a una variable global
            figuresList = data;
            printFigures(data);
        });
}


// TODO:Crea les cards HTML de cada figura 
function printFigures(listJSON) {                               //Creamos funcion
    listTag.innerHTML = "";                                     //Hacemos que listTag que en el html es la lista de figuras se vacie
    listJSON.forEach(figure => {                                //Hacemos un bucle por cada figura que haya en el JSON
                                                                //Modificamos el html para poner la informacion del JSON
        listTag.innerHTML += `                                  
            <article class="card">
                <img src="./img/${figure.photo}" alt="">
                <h3>${figure.name}</h3>
                <span>${figure.price}€</span>
                <div class="favorite">
                    <i class="fas fa-heart"></i>
                </div>
            </article>
        `;
    });
    setFavourites();
}

// TODO: Intercanvia el icone de favorit
function setFavourites() {                                                  
    const favouriteFigures = document.querySelectorAll('.fa-heart');        //Creamoss una variable con la informacion de la clase '.fa-heart' que son un cumulo de corazones
    favouriteFigures.forEach(e => {                                         //Hacemoos un bucle para recorrer todos los corazones
        e.addEventListener("click", function () {                           //Creamos un evento que cuando se haga click
            this.classList.toggle("on");                                    //"This.classList" = entra en la clase de "favouriteFigures" y con "toggle"
                                                                            //Mira si esta creado la clase "on" si no esta creado la añade y si esta creada lo elimina 
        });
    });
}

// TODO: Filtra les figures per preu i les ordena
function filterFigures() {
    let list = figuresList
        .filter(e => (e.price >= priceMinTag.value && e.price <= priceTag.value))
        .sort((a, b) => {
            // Ordena de major a menor pel nom
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });

    if (list.length === 0)
        listTag.innerHTML = "No hay figuras que coincidan con el filtro";
    else
        printFigures(list);
}
/*
// Filtre amb programació funcional
function filterFigures() {
    let list =[];
    for (let figure of figuresList){
        // El valor de la figura debe estar entre el mínimo y el máximo especificado
        if (figure.price>=priceMinTag.value && figure.price<=priceTag.value ){
            list.push(figure);
        }
    }
    if (list.length == 0) {
        listTag.innerHTML = "No hay figuras que coincidan con el filtro";
    } else {
        printFigures(list);
    }
}
*/

// Funció inicial de càrrega de la página
function init() {
    getFigures();
    btnFiltrarTag.addEventListener("click", filterFigures);
}
init();