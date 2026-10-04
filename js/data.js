// Array de categorías 
const categorias = ["Hamburguesas", "Pizzas", "Papas Fritas", "Bebidas"]; 
const productos = [ 
   { 
       id: 1, 
       nombre: "Hamburguesa Triple", 
       descripcion: "Triple carne, cheddar y bacon", 
       precio: 25000, 
       imagen: "img/hamburguesa.jpg", 
       categoria: "Hamburguesas" 
   }, 
   { 
       id: 2, 
       nombre: "Pizza Muzzarella", 
       descripcion: "Salsa casera y orégano", 
       precio: 18000, 
       imagen: "img/pizza.jpg", 
       categoria: "Pizzas" 
   },  

   {
        id: 3,
        nombre: "Papas con Cheddar",
        descripcion: "Papas fritas crocantes con abundante queso cheddar y panceta.",
        precio: 8000,
        imagen: "img/papas.jpg",
        categoria: "Papas Fritas"
    },

    {
        id: 4,
        nombre: "Coca Cola 1.5L",
        descripcion: "Gaseosa línea Coca Cola bien helada.",
        precio: 2500,
        // Usamos la imagen de relleno que sugiere tu profe hasta que consigas una real
        imagen: "img/cocacola.jpg", 
        categoria: "Bebidas"
    }
];

// Comprobación de que todo funciona
console.log("Categorías cargadas:", categorias);
console.log("Productos cargados:", productos);