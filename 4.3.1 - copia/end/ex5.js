const productsList = [
    {
      "id": 1,
      "name": "TV Cinema plus",
      "price": 300.5,
      "stock": true,
      "category": "ELEC",
      "brand": "Samsung",
      "onSale": true,
      "discount": 10,
    },
    {
      "id": 2,
      "name": "TV Panoramic colors",
      "price": 490,
      "stock": true,
      "category": "ELEC",
      "brand": "Samsung",
      "onSale": true,
      "discount": 10,
    },
    {
      "id": 3,
      "name": "TV Family Cinema Max",
      "price": 800,
      "stock": true,
      "category": "ELEC",
      "brand": "Samsung",
      "onSale": false,
      "discount": 0,
    },
    {
      "id": 4,
      "name": "TV HD8 REALISTIC",
      "price": 1000,
      "stock": true,
      "category": "ELEC",
      "brand": "Samsung",
      "onSale": false,
      "discount": 0,
    },
  
    {
      "id": 5,
      "name": "HP 17'' premium",
      "price": 500.33,
      "stock": false,
      "category": "LAPTOP",
      "brand": "HP",
      "onSale": false,
      "discount": 0,
    },
    {
      "id": 6,
      "name": "MSI 15'' gaming pro",
      "price": 750,
      "stock":true,
      "category": "LAPTOP",
      "brand": "MSI",
      "onSale": true,
      "discount": 20,
    },  
    {
      "id": 7,
      "name": "HP 14'' office",
      "price": 580,
      "stock": false,
      "category": "LAPTOP",
      "brand": "HP",
      "onSale": false,
      "discount": 0,
    },  
    {
      "id": 8,
      "name": "Samsung 17'' premium",
      "price": 500,
      "stock": true,
      "category": "LAPTOP",
      "brand": "Samsung",
      "onSale": false,
      "discount": 0,
    }, 
    {
      "id": 9,
      "name": "HP snow special",
      "price": 600,
      "stock": true,
      "category": "COMPUTER",
      "brand": "HP",
      "onSale": false,
    },
    {
      "id": 10,
      "name": "MSI-3456RW gaming presario total graphic",
      "price": 750,
      "stock":true,
      "category": "COMPUTER",
      "brand": "MSI",
      "onSale": true,
      "discount": 30,
    },  
    {
      "id": 11,
      "name": "HP TOWER GAMING",
      "price": 980,
      "stock": false,
      "category": "COMPUTER",
      "brand": "HP",
      "onSale": true,
      "discount": 50,
    },  
    {
      "id": 12,
      "name": "Tower superior",
      "price": 530,
      "stock": true,
      "category": "COMPUTER",
      "brand": "Samsung",
      "onSale": false
    },
    {
      "id": 13,
      "name": "My  big OPPO",
      "price": 150,
      "stock": true,
      "category": "MOBILE",
      "brand": "OPPO",
      "onSale": false,
    },
    {
      "id": 14,
      "name": "Samsung revolution 20222",
      "price": 350,
      "stock":true,
      "category": "MOBILE",
      "brand": "Samsung",
      "onSale": true,
      "discount": 30,
    },  
    {
      "id": 15,
      "name": "Moto 3D for you",
      "price": 280,
      "stock": true,
      "category": "MOBILE",
      "brand": "Motorola",
      "onSale": true,
      "discount": 20,
    },  
    {
      "id": 16,
      "name": "SamgungHR special gaming",
      "price": 830,
      "stock": true,
      "category": "MOBILE",
      "brand": "Samsung",
      "onSale": false
    },      
    {
      "id": 17,
      "name": "The Witcher",
      "price": 30,
      "stock": true,
      "category": "GAME",
      "brand": "PLAYSTATION",
      "onSale": false,
    },
    {
      "id": 18,
      "name": "Assassin's Creed",
      "price": 50,
      "stock":true,
      "category": "GAME",
      "brand": "PLAYSTATION",
      "onSale": true,
      "discount": 30,
    },  
    {
      "id": 19,
      "name": "FIFA 2022",
      "price": 40,
      "stock": true,
      "category": "GAME",
      "brand": "PC",
      "onSale": true,
      "discount": 20,
    },  
    {
      "id": 20,
      "name": "The edge of camelor",
      "price": 30,
      "stock": true,
      "category": "GAME",
      "brand": "XBOX",
      "onSale": false
    },      
  ];
  
  // Funció que torni la suma total del preus dels productes que es trobin en stock 
  function calculateTotalEx1(list) {
    let total = 0;
    for(let product of list){
      if (product.stock) total +=product.price;
    }
    return total;
  }

  console.log("Ex.1:", calculateTotalEx1(productsList));

  // Funció que torni el nombre de productes de la categoria “GAME” i preu superior a 10€. 
  function calculateTotalEx2(list) {
    let total = 0;
    for(let product of list){
      if(product.category==="GAME" && product.price>10){
        total++; //  total= total+1
      }
    }
    return total;
  }

  console.log("Ex.2:", calculateTotalEx2(productsList));

  /*
  Funció que torni el nombre de productes en oferta que es troben entre els rangs de preus següents:
  - Entre 10 i 80 euros
  - Entre 600 i 1000 euros
*/

function calculateTotalEx3(list) {
  let total = 0;
  for(let product of list){
    if( (product.price>=10 && product.price<=80) ||
        (product.price>=600 && product.price<=1000)
    ){
      total++; 
    }
  }
  return total;
}

console.log("Ex.3:", calculateTotalEx3(productsList));

// Funció que torni la suma total del preus dels productes de la marca “Samsung”
function calculateTotalEx4(list) {
  let total = 0;
  for(let product of list){
    if( product.brand==="Samsung"){
      total+=product.price;
    }
  }
  return total;
}

console.log("Ex.4:", calculateTotalEx4(productsList));

// Funció que torni la suma total del preus dels productes, aplicant el descompte corresponent si en té, 
// de la categoria “MOBILE” i “LAPTOP”.
function calculateTotalEx5(list) {
  let total = 0;
  for(let product of list){
    if(product.onSale && 
      (product.category==="MOBILE" || product.category==="LAPTOP")
    ){
      // product.discount pot ser per exemple 20%
      let priceDiscount = product.price * (product.discount/100);
      total+= (product.price - priceDiscount );
    }
  }
  return total;
}

console.log("Ex.5:", calculateTotalEx5(productsList));

// Funció que torni la suma total del preus dels productes que es trobin en stock  
function calculateTotalEx1Funcional(list) {
  //return list.reduce( (total, pro)=> (pro.stock)?total+pro.price:total , 0); 
  // return list.reduce( (total, pro)=>{
  //   if (pro.stock) return (total+pro.price);
  //   else return total;
  // }, 0); 

  return list.filter(p=>p.stock).reduce((total,pro) => total+pro.price, 0);

}
console.log("Ex.1-funcional:", calculateTotalEx1Funcional(productsList));