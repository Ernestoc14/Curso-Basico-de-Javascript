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
    Primitivos: Tipo de datos comunes (int, boolean...)
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

    Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.