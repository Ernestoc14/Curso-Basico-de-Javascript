//Piedra papel o tijera en JS
var opcion1 = "piedra";
var opcion2 = "papel";
var opcion3 = "tijera";

var resultado = function juego(user , pc){
    if(user === pc ){
        return "Hay empate";
    } else if( user === "piedra" && pc ==="tijera"){
        return "Gano el user con "+user;
    } else if( user === "papel" && pc === "piedra"){
        return "Gano el user con "+user;
    } else if( user === "tijera" && pc === "papel"){
        return "Gano el user con "+user;
    } else {
        return "Perdiste, te gano pc con "+pc;
    }
}
resultado = juego(opcion1,opcion2); // Pierdes con piedra vs papel
console.log(resultado);

resultado = juego(opcion2,opcion1); // Ganas con papel vs piedra
console.log(resultado);

resultado = juego(opcion2,opcion3); // Pierdes con papel vs tijera
console.log(resultado);