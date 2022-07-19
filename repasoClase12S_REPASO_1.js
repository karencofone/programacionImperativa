const prompt = require("prompt-sync")({ sigint: true });

/*
const alicia = [10, 80, 75];
const bob = [90, 20, 25];

function encontrarGanador(a, b) {

    let puntosA = 0;
    let puntosB = 0;
    let nombreA = prompt("Nombre del jugador A: ");
    let nombreB = prompt("Nombre del jugador B: ");
     

    for(let i = 0; i <= 2; i++){

        let ronda = ("RONDA " + ((a.indexOf(a[i])) + 1));

        if(a[i] > b[i]){
            puntosA += 1
            console.log(ronda);
            console.log(nombreA + " ganó un punto. Tiene " + puntosA + " en total.");
        }
        else if(a[i] < b[i]){
            puntosB += 1
            console.log(ronda);
            console.log(nombreB + " ganó un punto. Tiene " + puntosB + " en total.");
        }
        else {
            console.log(ronda);
            console.log("Empate.");
        }
    }

    let ganador = "El ganador es... "

    if(puntosA > puntosB){
        console.log(ganador + nombreA);
    }
    else if(puntosB > puntosA){
        console.log(ganador + nombreB);
    }
    else{
        console.log(ganador + "... nadie, hubo empate. Se juega de nuevo.");
    }

}

// * FORMAS DE EJECUTAR, SIN UNDEFINED
// encontrarGanador(alicia, bob)

// let jugar = encontrarGanador(alicia, bob);
// jugar

// * FORMAS DE EJECUTAR, CON UNDEFINED
// let jugar = encontrarGanador(alicia, bob);
// console.log(jugar);
*/
// ! EXTRAS

// ! digitalHouse()
// * Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
// * deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
// * siguientes criterios:
// * ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
// * mostrar el string “Digital” en lugar del número.
// * ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
// * mostrar el string “House” en su lugar del número.
// * ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
// * “Digital House” en lugar del número.

/*
let numero1 = parseInt(prompt("Ingresa un número del 1 al 100: "))
let numero2 = parseInt(prompt("Ingresa otro número del 1 al 100: "))

let inicio = 1;
let fin = 100;
let numeroRandom = inicio+ Math.floor(Math.random()*fin);



function digitalHouse(numero1, numero2){

    if((numeroRandom % numero1 === 0) && (numeroRandom % numero2 === 0)){
        console.log("Digital House");
        console.log("Digital es múltiplo de " + numero1 + ". House es múltiplo de " + numero2);
    }
    else if(numeroRandom % numero1 === 0){
        console.log("Digital");
        console.log("Digital es múltiplo de " + numero1);
    }
    else if(numeroRandom % numero2 === 0){
        console.log("House");
        console.log("House es múltiplo de " + numero2);
    }
    else{
        console.log("El número " + numeroRandom + " no es múltiplo de ningún parámetro.");
    }

}

digitalHouse(numero1, numero2);
*/

// ! sumArray()... Reloaded

// * Vamos a retomar el ejercicio sumArray() que hicimos en la clase de arrays, pero esta vez
// * lo modificaremos para que pueda recibir un array de números de cualquier cantidad de
// * elementos.
// * Si no recordás el enunciado original: deberás crear una función sumaArray que acepte
// * un arreglo de números y devuelva la suma de todos ellos.
// * Ejemplo:

// * ● sumArray([1,2,3]) // 6
// * ● sumArray([10, 3, 10, 4]) // 27
// * ● sumArray([-5,100]) // 95

/*
let arrayDeX = [100, 150, 350, 200]

function sumaArray(arr5){

    let sumatoria = 0

    for(i = 0; i < arr5.length; i++){
        sumatoria += arr5[i]
    }

    console.log("La suma es " + sumatoria);

}
*/

// ! sumaArray(arrayDeX);


// * Ya que estamos retocando funciones, hagamos lo propio con la función del ejercicio
// * simulación join(). Deberás modificar la función join() de manera que pueda recibir un
// * array de strings de cualquier cantidad de elementos.
// * Importante: no podés usar el método Array.join() original.
// * Por ejemplo:
// * join(["h","o","l","a"]) debe retornar el string "hola".
// * join(["c","h","a,"u"]) debe retornar el string "chau".

/*
let holaJorge = ["h", "o", "l", "a", " ", "j", "o", "r", "g", "e"]
let hola = ["h", "o", "l", "a"]

function join(arr6){
    let sumatoria ="";
    for(i = 0; i < arr6.length; i++){
        sumatoria += arr6[i]
    }
    return sumatoria
}

let saludos = join(hola)
console.log(saludos);
*/