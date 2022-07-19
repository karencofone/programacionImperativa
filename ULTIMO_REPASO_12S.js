const prompt = require("prompt-sync")({ sigint: true });

// ! EJERCICIO CONCURSO


const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso = {
    etapas: [1, 2, 3],
    encontrarGanador: function(nombreA, nombreB) {

        let jugadorA = prompt("Ingrese el nombre del jugador A: ")
        let jugadorB = prompt("Ingrese el nombre del jugador B: ")
        let puntosA = 0;
        let puntosB = 0;
        let empate = "EMPATE"
        

        for(let i=0; i < this.etapas.length; i++){

            let ronda = ("RONDA " + ((nombreA.indexOf(nombreA[i])) + 1)+ ". ");

            if(nombreA[i] > nombreB[i]){
                puntosA++
                console.log(ronda + jugadorA + " recibe un punto. Su puntuación es " + puntosA + ".");
            }
            else if(nombreA[i] < nombreB[i]){
                puntosB++
                console.log(ronda + jugadorB + " recibe un punto. Su puntuación es " + puntosB );
            }
            else{
                console.log(ronda + "EMPATE DE RONDA");
            }
        }
    
        if(puntosA > puntosB){
            return jugadorA
        } else if(puntosB > puntosA){
            return jugadorB
        } else{
            return empate
        }
    },
    ganador: this.encontrarGanador
}

console.log("El ganador es... " + concurso.encontrarGanador(alicia, bob));


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


let numero1 = parseInt(prompt("Ingrese un número: "))
let numero2 = parseInt(prompt("Ingrese otro número: "))

function digitalHouse(numero1, numero2){

    for(let i=0; i<=100; i++){
        console.log(i);
        if((i % numero1 === 0) && (i % numero2 === 0)){
            console.log("Digital House");
        }
        else if(i % numero1 === 0){
            console.log("Digital");
        }
        else if(i % numero2 === 0){
            console.log("House");
        }
    }
}

let dh = digitalHouse(numero1, numero2);



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
let arrayDeX = [100, 150, 350, 5000]

function sumaArray(arr5){

        let sumatoria = 0
        for(i = 0; i < arr5.length; i++){
            sumatoria += arr5[i]
        }
        console.log("La suma es " + sumatoria);

}

sumaArray(arrayDeX);
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
string = prompt("Ingrese un string: ")

function split(string){

    let nuevoArreglo = []

    for(let i=0; i<string.length; i++){
        nuevoArreglo.push(string[i])
    }

    return nuevoArreglo
    
}

let soyUnArreglo = split(string)
console.log(soyUnArreglo);

function join(string){

    let nuevoArreglo = split(string)
    let sumatoria ="";
    for(i = 0; i < nuevoArreglo.length; i++){
        sumatoria += nuevoArreglo[i]
    }
    return sumatoria
}

let saludos = join(string)
console.log(saludos);
*/
