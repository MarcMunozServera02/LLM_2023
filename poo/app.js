import { Book } from "./Book.js";
import { Author } from "./Author.js";

const auhtorsHarryPotter=[
    new Author(1, "Joanne", "Rowling", "", 1974)
];
const auhtorsViaje=[
    new Author(1, "Joanne", "Rowling", "", 1974),
    new Author(2, "Emilo", "Mordor", "", 1979)
];
const booksList =[
    new Book("1231231", "Harry Potter", 2009, 10.99, auhtorsHarryPotter),
    new Book("1231251", "Harry Potter 2", 2010, 10.99, auhtorsHarryPotter),
    new Book("1231271", "Harry Potter 3", 2011, 12.99,auhtorsHarryPotter),
    new Book("1231281", "Viaje al centro de la tierra", 2012, 11.99, auhtorsViaje),
]

const comicContainer = document.querySelector('#comic-container');
booksList.forEach(book => {
    comicContainer.innerHTML += book.render();
});