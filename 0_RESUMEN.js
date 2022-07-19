// * PROMPT
const prompt = require("prompt-sync")({ sigint: true });


// * TIPOS DE FUNCIONES
// ! DECLARADAS
function saludar(nombre){
    return "Hola " + nombre;
}
//console.log(saludar("karen"));

// ! EXPRESADAS
let triplicar = function(numero){
    return numero *3;
}
//console.log(triplicar(10));

// ! ARROW O FLECHA
let sumar = (a, b) => a + b;
//console.log(sumar(2, 4));


// * NÚMERO ALEATORIO
let inicio = 1;
let fin = 10;
let numeroSecreto = inicio+ Math.floor(Math.random()*fin);
