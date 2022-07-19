// * 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
// * sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// * “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// * por la palabra “fizzbuzz”. Visiten este sandbox

let fizzbuzz = () => {

    for (let i = 0; i < 100; i++) {
        
        let mensaje

        if(i % 3 === 0 && i % 5 === 0){
            mensaje = "El número es " + i + " FIZZBUZZ"
            console.log(mensaje);
        }
        else if(i % 3 == 0){
            mensaje = "El número es " + i + " FIZZ"
            console.log(mensaje);
        }
        else if(i % 5 == 0){
            mensaje = "El número es " + i + " BUZZ"
            console.log(mensaje);
        }
        else{
            console.log(i);
        }
    }
}

// fizzbuzz();

// * Escriban una función que reciba dos parámetros: un array y un índice. La
// * función deberá de mostrar por consola el valor del elemento según el
// * índice dado. Por ejemplo, dada la siguiente array e índice, la función
// * imprimirá '6'.

let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let index = 654;

let decimeTuValor = (array, index) => {

    if(index >= 0 && index < array.length){
        return array[index]
    }
    else {
        return "ERROR"
    }
}

//console.log(decimeTuValor(array, index));

// * 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// * de días de ese mes —suponiendo que no es un año bisiesto—.

let cantidadMes = (numero) => {
    switch (numero) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;

        case 4:
        case 6:
        case 9:
        case 11:
            return 30

        case 2:
            return 28
    
        default:
            return "ESE NO ES UN MES";
            break;
    }
}

//console.log(cantidadMes(6));

// * 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
// * si x = 32443, la salida debería ser 34423.
// * DE NUMBER A STRING

// * PROMPT
const prompt = require("prompt-sync")({ sigint: true });

let invertirNumero = (numero) => {

    // 32
    // ? PARTIMOS EL STRING
    let numeroPartido = numero.split("")
    // "3" "2"

    // ? DAMOS VUELTA EL STRING
    let numeroStringInverso = numeroPartido.reverse()
    // "2" "3"

    // ? JUNTAMOS EL NUMERO INVERSO PARTIDO
    let inversoJuntado = numeroStringInverso.join("")
    // 23

    //? CONVERTIMOS A NUMBER
    let juntadoNumber = parseInt(inversoJuntado)
    // 23 en number

    return juntadoNumber
}


// let numero2 = prompt("Ingrese un número ")
// console.log(invertirNumero(numero2))

// * 5) Escribir una función que reciba una array y solo imprima los valores que
// * se repiten. Por ejemplo, dada la siguiente array e índice, la función
// * imprimirá '6,23,33,100'.

let array1 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];


function imprimir(array) {
    let nuevoArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(array[i]) !== i) {
        console.log(array.indexOf(array[i]));
        console.log(i);
        nuevoArray.push(array[i]);
        
      }
    }
  
    return nuevoArray;
}
  
console.log(imprimir(array1));