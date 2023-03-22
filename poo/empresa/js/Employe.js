import Company from "./Company.js";

class Employe {
    constructor(id, name, surname, phone, salary){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.phone=phone;
        this.salary=salary
    }
    render(){
        
        return `<br>
        <p>${this.id} ${this.name} ${this.surname} (${this.phone}) ${this.salary}€</p>`;
    }
}

export default Employe;