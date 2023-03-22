import { Author } from "./Author.js";
export class Book {
    static stock=10;

    #active=false;

    constructor(isbn, title, release, price, authorsList){
        this.isbn=isbn;
        this.title=title;
        this.release=release;
        this.price=price;
        this.authorsList=authorsList;
        Book.stock=Book.stock-1;
    }

    priceWithTax(){
        return this.price * 1.1;
    }

    render(){
        let authors=""
        this.authorsList.forEach(author => {
            authors+=author.render();
        });

        return `
            <article>
                <h3>${this.isbn}</h3>
                <h2>${this.title}</h2>
                <p>${this.release}</p>
                <p class="price">${this.price} €</p>
                <p>${authors}</p>
            </article>
        `;
    }

    sale(){
        if(this.#active){
            console.log("Se puede vender");
        }else{
            console.log("no se puede vender");
        }
    }

    // static tax(){

    //     return "10%";
    // }
}

// class Comic extends Book{

//     constructor(isbn, title, release, price,  number){
//         // Ejecurar el constructor del padre BOOK
//         super(isbn, title, release, price)
//         this.number=number;
//     }
// }

