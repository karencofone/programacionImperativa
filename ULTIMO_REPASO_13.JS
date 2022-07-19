const prompt = require("prompt-sync")({ sigint: true });

// ! Loop de pares

// * Deberás crear una función llamada loopDePares que reciba como parámetro un número y
// * haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número
// * de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola:
// * “El número X es par”.

/*
numero = parseInt(prompt("Ingrese un número: "))

function loopDePares(numero){

    let suma
    for(let i=0; i<=100; i++){
        console.log(i);
        suma = i + numero
        if(suma % 2 == 0){
            console.log(`El número de iteración ${i} más el número ${numero} suman ${suma}. El resultado es par.`);
        }    
    }
}

let loopPares = loopDePares(numero)
*/

// ! Loop de impares con palabra

// * Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga
// * un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso
// * de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

/*
numero = parseInt(prompt("Ingrese un número: "))
palabra = prompt("Ingrese una palabra: ")

function loopDeImpares(numero, palabra){

    let suma
    for(let i=0; i<=100; i++){
        console.log(i);
        suma = i + numero
        if(suma % 2 != 0){
            console.log(`La suma entre ${i} y ${numero} es ${suma}, el resultado es impar. Por eso te digo... ${palabra}`);
        }
    }
}

let loopImpar = loopDeImpares(numero, palabra)
*/

// ! Sumatoria

// * Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria
// * de todos sus números anteriores, incluso ese mismo. Ejemplo:
// * sumatoria(3) debe retornar 6 porque hace (1+2+3)
// * sumatoria(8) debe retornar 36 1+2+3+4+5+6+7+8

/*
numero = parseInt(prompt("Ingrese un número: "))

function sumatoria(numero){

    let acumulador = 0 // ! RECORDAR DEFINIR EL ACUMULADOR COMO 0 NO OLVIDAR    
    for(let i=0; i<=numero; i++){
        acumulador += i
    }

    return acumulador
}

let sumando = sumatoria(numero)
console.log(sumando);
*/

// ! Nuevo arreglo

// * Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva
// * un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// * nuevoArreglo(5) debe retornar [1,2,3,4,5]
// * nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

/*
numero = parseInt(prompt("Ingrese un número: "))

function nuevoArreglo(numero){

    let nuevoArreglo = []

    for(let i=1; i<=numero; i++){
        nuevoArreglo.push(i)
    }

    return nuevoArreglo
}

let agregandoNumeros = nuevoArreglo(numero)
console.log(agregandoNumeros);
*/

// ! Similar String.split()

// * Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original.
// * Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// * split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// * split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

/*
string = prompt("Ingrese un string: ")

function split(string){

    let nuevoArreglo = []

    for(let i=0; i<string.length; i++){
        nuevoArreglo.push(string[i])
    }

    return nuevoArreglo
}

let cortandoPalabras = split(string)
console.log(cortandoPalabras);
*/

// ! Manejando dos arreglos

// * Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros
// * y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// * arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// * Soy 1 y yo soy h
// * Soy 2 y yo soy o
// * Soy 3 y yo soy l
// * Soy 4 y yo soy a

/*
string = prompt("Ingrese un string: ")
numero = prompt("Cuente los elementos del string e ingrese cada número, sin espacios: ")

function split(string){

    let nuevoArreglo = []

    for(let i=0; i<string.length; i++){
        nuevoArreglo.push(string[i])
    }

    return nuevoArreglo
}


let array1 = split(numero)
console.log(array1);

let array2  = split(string)
console.log(array2);

function arrayHandler(array1, array2){

    if(array1.length == array2.length){
        for(let i=0; i<array1.length; i++){
            console.log("Soy " + array1[i] + " y yo soy " + array2[i]);
        }
    } else{
        console.log("Contaste mal los elementos!!!! Intentá de nuevo.");
    }
}

let decimeQuienSos = arrayHandler(array1, array2)
*/

// ! Palíndromo

// * Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true”
// * en caso de que lo sea, y “false” en caso de que no. Ejemplo:

// * palindromo(“anilina”) debe retornar true
// * palindromo(“Ana”) debe retornar true
// * palindromo(“Enrique”) debe retornar false

function palindromo(string){

    // ? CONVIERTE STRING EN ARRAY INVERSO
    let array=[]

    for(let i=0; i<string.length; i++){ // HOLA

        array[i]=string[i]
    }

    let inverso=array.reverse(); // ["A", "L", "O", "H"]

    // ? CONVIERTE ARRAY INVERSO EN STRING INVERSO

    letrafinal=""

    for(let i=0; i<inverso.length; i++){
     letrafinal= letrafinal+inverso[i] // ALOH
    }

    // ? COMPARA STRING CON STRING INVERSO

    if(letrafinal==string){ // * ALOH == HOLA
       return true
    } else {
       return false // ! CON HOLA DA QUE NO ES
    }
}

console.log(palindromo("hola"))
