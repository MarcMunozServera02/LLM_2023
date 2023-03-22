import Company from "./Company.js";
import Employe from "./Employe.js";


const container = document.querySelector("#companies-container");

function init(){
    getCompanies()
}
init();
function getCompanies() {
    fetch("./data/companies.json")
    .then(res=>res.json())
    .then(data=>{
        data.forEach(com => {            
            const employeesList = [];
            com.employees.forEach(emp => {
                const empOBJ = new Employe(emp.id, emp.name, emp.surname, emp.phone, emp.salary)
                employeesList.push(empOBJ);
            })
            const company = new Company(com.id, com.name, com.web, com.email, employeesList);
            container.innerHTML += company.render();
            
            
            
        });
    });
}