var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2016
};

miAuto.marca

//Funcion como propiedad de Objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2016,
    detalleDelAuto: function(){
        console.log('Auto ${this.modelo} ${this.anio}');
        //this hace referencia al objeto padre
    }
};

// Funcion constructora

function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
var autoNuevo = new auto("Tesla","Model 3", 2020); //Instancia creada con new
var autoNuevo2 = new auto("Lamborghini","Adventador",2015);