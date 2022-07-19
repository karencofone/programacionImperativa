const prompt = require("prompt-sync")({ sigint: true });

// ! Loop de pares

// * Deberás crear una función llamada loopDePares que reciba como parámetro un número y
// * haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número
// * de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola:
// * “El número X es par”.

/*
numero = parseInt(prompt("Ingresa un número: "))

function loopDePares(numero){

    let suma = 0
    for(let i = 0; i <= 100; i++){

        console.log(i);

        let suma = i + numero
        if(suma % 2 == 0){
            console.log(`La suma entre el número de iteracón ${i} y el ingresado ${numero} es ${suma}. Es par. `);
        }
    }

    //return suma // ? PUEDE IR O NO 
}

loopDePares(numero)
*/

// ! Loop de impares con palabra

// * Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga
// * un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso
// * de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

/*
numero = parseInt(prompt("Ingresa un número: "))
palabra = prompt("Ingrese una palabra: ")

function loopDeImpares(numero, palabra){

    let suma = 0

    for(let i = 0; i <= 100; i++){
        console.log(i);
        suma = i + numero
        if(suma % 2 != 0){
            console.log(`La suma es ${suma} y como es impar, te muestro ${palabra}`);
        }
    }
}

loopDeImpares(numero, palabra)
*/

// ! Sumatoria

// * Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria
// * de todos sus números anteriores, incluso ese mismo. Ejemplo:
// * sumatoria(3) debe retornar 6 porque hace (1+2+3)
// * sumatoria(8) debe retornar 36 1+2+3+4+5+6+7+8

/*
numero = parseInt(prompt("Ingresa un número: "))

function sumatoria(numero){

    let acumulador = 0
    for(let i = 1; i <= numero; i++){
        acumulador += i
    }

    return acumulador
}

let sumando = sumatoria(numero);
console.log(sumando);
*/

// ! Nuevo arreglo

// * Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva
// * un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// * nuevoArreglo(5) debe retornar [1,2,3,4,5]
// * nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

/*
numero = parseInt(prompt("Ingresa un número: "))

function nuevoArreglo(numero){

    let nuevoArr = []

    for(let i = 1; i <= numero; i++){
        nuevoArr.push(i)
    }

    return nuevoArr
}

let nuevoArre = nuevoArreglo(numero);
console.log(nuevoArre);
*/

// ! Similar String.split()

// * Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original.
// * Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// * split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// * split(“chau”) debe retornar [“c”,”h”,”a”,”u”]


// ? Esto no es así pero está bueno
/*
string = prompt("Ingrese un string: ")

function split(string){

    let nuevoArr = []

    for(let i = 0; i < string.length; i++){
        nuevoArr.push(string.slice(i))
    }

    return nuevoArr
    

}

let separar = split(string);
console.log(separar);
*/

/*
string = prompt("Ingrese un string: ")

let split = (string) =>{

    let arreglon = [];

    for(let i = 0; i < string.length; i++){
        arreglon.push(string[i]);
    }
    return arreglon;
}

let separar = split(string);
console.log(separar);
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
array2 = prompt("Ingrese un string: ")
array1 = prompt("Cuente los elementos del string anterior y detallelos, sin espacios: ")

let split = (array) =>{

    let arreglon = [];

    for(let i = 0; i < array.length; i++){
        arreglon.push(array[i]);
    }
    return arreglon;
}

let separar = split(array2);
array2Bis = separar
console.log(array2Bis);

let separar1 = split(array1);
array1Bis = separar1
console.log(array1Bis);

function arrayHandler(arr1, arr2){

    if(arr1.length == arr2.length){
        for(let i = 0; i < arr1.length; i++){
            console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
        }
    }
}

let decimeQuienSos = arrayHandler(array1Bis, array2Bis)
*/

// ! Palíndromo

// * Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true”
// * en caso de que lo sea, y “false” en caso de que no. Ejemplo:

// * palindromo(“anilina”) debe retornar true
// * palindromo(“Ana”) debe retornar true
// * palindromo(“Enrique”) debe retornar false

function palindromo(stringer){

    let array=[]

    for(let x=0;x<stringer.length;x++)
    {
        array[x]=stringer[x]
    }

    let inverso=array.reverse();

    letrafinal=""

    for(let x=0; x<inverso.length;x++)
    {
     letrafinal= letrafinal+inverso[x]
    }

     if(letrafinal==stringer)
     {
       return "es palindromo"
     }
     else
     {
       return "no es palindromo"
     }

}

console.log(palindromo("anilina"))
