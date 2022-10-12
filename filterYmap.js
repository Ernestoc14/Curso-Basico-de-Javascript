//Creamos un array de objetos
var articulos = [
    { nombre : "Bici", costo : 3000},
    { nombre : "Tv", costo : 2500},
    { nombre : "Celular", costo : 10000},
    { nombre : "Laptop", costo : 20000},
    { nombre : "Teclado", costo : 500},
    { nombre : "Audifonos", costo : 1700},
];

//Filter
//Creamos un var para almacenar el array que devuelve filter
//A filter le pasamos una funcion con el nombre del item individual
//Regresara el articulo cuando costo es menor a 500
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <=500
});
// Resultado 
articulosFiltrados; // {nombre: 'Teclado', costo: 500}


//Map
//Regresara el nombre de cada articulo
var nombreArticulos = articulos.map(function (articulo){
    return articulo.nombre;
});
//Resultado
nombreArticulos; // ["Bici", "Tv", "Celular", "Laptop", "Teclado","Audifonos"]


//Find
//Regresa solo el primer elemento de array que cumple la condicion
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" 
    //Regresa el articulo que tenga como nombre "Laptop"
});
//Resultado
encuentraArticulo; // {nombre: 'Laptop', costo: 20000}


//ForEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre); 
    //Imprimira el nombre de cada articulo del array
});

//Some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=500;
});
//Resultado
articulosBaratos; // true porque existen articulos con costo <=500