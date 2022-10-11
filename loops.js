var estudiantes = ["maria", "sergio", "rosa"];
function saludarEstudiantes (estudiante){
    console.log('Hola, ${estudiante}');
}
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// Otra forma
var estudiantes = ["maria", "sergio", "rosa"];
function saludarEstudiantes (estudiante){
    console.log('Hola, ${estudiante}');
}
for(var i=0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//While
var estudiantes = ["maria", "sergio", "rosa"];
function saludarEstudiantes (estudiante){
    console.log('Hola, ${estudiante}');
}
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
        saludarEstudiantes(estudiante);
}