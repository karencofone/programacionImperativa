const prompt = require("prompt-sync")({ sigint: true });

// * 1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
/*
function diezSiguientes(valor) {
    for (let i = valor + 1; i <= (valor + 10); i++) {
        console.log("Mostrando " + i); 
    }
}

diezSiguientes(1);
*/

// * 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

/*
function de3en3(valor){
    for (let i = 5; i <=20; i+=3){
        console.log(i);
    }
}

de3en3(5);
*/

// * 3) Escribir un programa que muestre la sumatoria de todos los números
// * entre el 0 y el 100

/*
function sumatoriaCeroACien(){
    let suma = 0;
    for(let i = 0; i<= 100; i++){
        suma = suma + i
    }
    console.log(suma);
}

sumatoriaCeroACien(0);
*/

// * 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// * un número se obtiene multiplicando todos los números enteros
// * positivos que hay entre el 1 y ese número.
/*
function factorial(numero){
    multiplicacion = 1;
    for(i = 1; i <= numero; i++){
        multiplicacion = multiplicacion * i;
        console.log(multiplicacion);
    }
}

factorial(5);
*/

// * 5) Crear una función que muestre todos los números de la secuencia de
// * fibonacci hasta el valor ingresado por parámetro.
/*

let valorIngresado = prompt("Dame un numero: ");
let fibonacci = 0; // CONTADOR

function fibonacci1(valorIngresado){
    console.log(0);
    for(let i=1; i<=valorIngresado; i = i + fibonacci){
        console.log(i);
        fibonacci = fibonacci + i;
        fibonacci <= valorIngresado ? console.log(fibonacci) : " "
        
    }
}

fibonacci1(valorIngresado);
*/