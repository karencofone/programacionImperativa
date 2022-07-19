const prompt = require("prompt-sync")({ sigint: true });

// ! FUNCIONES SIMPLES

// * 1. Crear una función que convierta pulgadas en centímetros.
// * Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
/*
function pulgadasACentimetros(pulgadas){
    return pulgadas * 2.54;
}

// ! EXPRESADA
let pulgadasACentimetros = function(pulgadas){
    return pulgadas * 2.54;
}

// ! ARROW
let pulgadasACentimetros = (pulgadas) => pulgadas * 2.54;

console.log(pulgadasACentimetros(2));
*/
// * 2. Crear una función que recibe un string y lo convierte en una URL.
// * Ej: “pepito” es devuelto como “http://www.pepito.com”
/*
function url(string){
    return "http://www." + string + ".com"
}

// ! EXPRESADA
let url = function(string){
    return "http://www." + string + ".com"
}

// ! ARROW
let url = (string) => "http://www." + string + ".com";
console.log(url("mipaginaweb"));
*/
// * 3. Crear una función que recibe un string y devuelve la misma frase pero con
// * admiración.
/*
function admiracion(string1){
    return ("¡" + string1 + "!");
}

// ! EXPRESADA
let admiracion = function(string1){
    return ("¡" + string1 + "!");
}

// ! ARROW
let admiracion = (string1) => "¡" + string1 + "!";

console.log(admiracion("Estoy aprendiendo funciones"));
*/
// * 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// * para nosotros son 7 de ellos.
/*
function edadPerros(anio){
    return anio * 7
}

// ! EXPRESADA
let edadPerros = function edadPerros(anio){
    return anio * 7
}

// ! ARROW
let edadPerros = (anio) => anio * 7;
console.log(edadPerros(25));
*/
// * 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// * sueldo mensual como parámetro.
// * PD: considerá que tu mes de trabajo tiene 40 horas.
/*
//let sueldo = parseInt(prompt("Ingresa tu sueldo "));
function valorHora(sueldo){
    return sueldo / 40;
}

// ! EXPRESADA
let valorHora = function{
    return sueldo / 40;
}

// ! ARROW
let valorHora = (sueldo) => sueldo / 40;

console.log(valorHora(40000));
*/
// * 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// * kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// * probando diferentes valores.
/*
//let altura = parseFloat(prompt("Ingrese su altura (en metros)"));
//let peso = parseFloat(prompt("Ingrese su peso (en kilos)"));

function calculadorIMC(altura, peso){
    return peso / (altura * altura)
}

// ! EXPRESADA
let calculadorIMC = function calculadorIMC(altura, peso){
    return peso / (altura * altura)
}

// ! ARROW
let calculadorIMC = (altura, peso) => peso / (altura * altura);
console.log(calculadorIMC(150, 60));
*/

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

// * 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// * y lo retorne. Investigá qué hace el método de strings .toUpperCase()
/*
function convertirMayuscula(string){
    return string.toUpperCase()
}

console.log(convertirMayuscula("hola"));
*/
// * 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// * parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof.
/*
function parametro(dato){
    return  dato;
}

console.log(typeof(parametro(true)));
*/
// * 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
// * Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.
/*
function circunferencia(radio){
    return Math.PI * radio * 2;
}

console.log(circunferencia(10));
*/
