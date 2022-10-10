# Basic-Javascript-Course
Link: https://platzi.com/clases/1814-basico-javascript/26290-que-es-javascript/

Javascript brinda la interaccion en una aplicacion web
Caracteristicas:
    -Debilmente tipado
    -Dinamico e Interpretado
    -Orientado a Objetos

Javascript y Sus valores
Valores Primitivos y Valores No Primitivos
Codigo en valores.js
    Primitivos: Tipo de datos comunes (int, boolean, null, undef...)
    No primitivos: Objetos (Arrays, Diccionarios...)

Funciones 

    Llevan parametros o datos necesarios para su ejecucion
    Funciones Declarativas
        Sintaxis: function miFuncion(){
            return x;
        }

        Call o llamado: miFuncion(); // Nombre de la Function

    Funciones de Expresion = Guardamos la funcion en una variable
        Sintaxis: var miFuncion = function(){
            return a + b;
        }

        Call o llamado: miFuncion(); //Nombre de Var

    Diferencias:
    Hoisting: Es poder llamar a la funcion antes de 
    definirla mas abajo

    A las funciones declarativas se les aplica hoisting 
    a la expresión de función, no. Ya que el hoisting 
    solo se aplica en las palabras reservadas var y function.

    Lo que quiere decir que con las funciones declarativas,
    podemos mandar llamar la función antes de que ésta sea
    declarada, y con la expresión de función, no, tendríamos que
    declararla primero, y después mandarla llamar.

Scope: Alcance que tiene la variable, contexto donde las vars
        son visibles y pueden ser accedidas
        Determina el conjunto de variables que podemos acceder
        -Scope Lexico: El scope de cada variable se determina
        leyendo el codigo sin ejecutarlo
    Puede ser:
        Global: Declaraciones hechas fuera de funciones 
                no tiene acceso a lo local
        Local: Tiene acceso a lo declarado global
                Declaraciones hechas en funciones
                -de Bloque: es lo mismo que local pero solo 
                se accede dentro del bloque donde fue declarada
        Ejemplo------------
        var miNombre = "Ernesto";

        function nombreCompleto(){
            var miApellido = "Crespo";
            console.log(miNombre + " "+ miApellido)
        }
        nombreCompleto(); //Mostrara Ernesto Crespo
    
Hoisting: Las vars y functions se declaran antes que se procese
            cualquier tipo de codigo
        -Solo sucede con var y function
        -Cuando se usa let y const NO AFECTA
    Si mandamos llamar una funcion ANTES de Declararla si vamos a 
    obtener el resultado esperado siempre y cuando las variables 
    esten declaradas e inicializadas, ANTES de mandar llamar a fun

    Buenas practicas es Declarar Vars y Function al inicio del
    Codigo para evitar los UNDEFINED y Hoisting

Coercion: Cambiar un tipo de valor a otro
    -Coercion Implicita: El lenguaje nos ayuda a cambiar el tipo de valor
    -Coercion Explicita: Forzamos a cambiar el tipo de valor 

Truthy y Falsy
    Falsy  => Boolean (0, null, NaN, undefined, false, "")
    Truthy => Boolean (1-9, "a", [], {}, function(){})

Operadores
    -Binarios + - * / 
    -Unarios !false 
    -Asignacion = 
    -Compara el valor entre vars ==  o !=
        -Compara el valor y TIPO === o !==(Estrictamente igual)
        || OR && AND 

Condicionales 