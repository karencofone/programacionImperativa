const prompt = require("prompt-sync")({ sigint: true });

// * 1.Crear una función que reciba una edad por parámetro
// * usando prompt, si es mayor o igual a 18 , que imprima por
// * consola “ puede pasar”, si es menor a 18 que imprima “no puede pasar”,
// * si la edad es menor a 0 que imprima “vos no naciste”

//let edad = parseInt(prompt("Decime tu edad: "))

let puedePasar = (edad) => {
    
    let mensaje;
    if(edad < 0){
        mensaje = "Vos no naciste"
    }
    else if(edad < 18){
        mensaje = "No puede pasar"
    }
    if (edad >= 18){
        mensaje = "Puede pasar"
    }
    console.log(mensaje);
}

//puedePasar(edad)

// * 2.Crear una función que dado un número recibido por
// * parámetro te muestre su factorial(multiplicar todos los
// * números enteros positivos que hay entre ese número y el 1)

//let numero = parseInt(prompt("Decime un número: "))

let factorial = (numero) => {
    for (let i = 1; i <= numero; i++) {
        console.log(numero * i);
    }
}

//factorial(numero)

// * 3. Dado el siguiente array

let array = [24, 82, 98, 76, 98, 14, 16]

// * Se pide crear una función que devuelva la suma de todos ellos

let sumarArray = (array) => {
    let acc = 0;
    for (let i = 0; i < array.length; i++) {
        acc += array[i]
    }
    return acc
}

//console.log(sumarArray(array));

// * También se pide hacer una función que dado el array anterior,
// * meta a un array vacío todos los números que sean mayores a 70

let mayor70 = (array) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 70) {
            nuevoArray.push(array[i])
        }
        
    }
    return nuevoArray
}

// console.log(mayor70(array));

// * 4.Dado este array de objetos

let puntajes = [
    {
        nombre: "Salomon",
        puntaje: 10
    },
    {
        nombre: "jorgeDuje",
        puntaje: 100
    },
    {
        nombre: "lucasPasteris",
        puntaje: 2
    }
]

// * Se pide traer a la persona con el puntaje más alto y más bajo

//let tipo = prompt("Qué puntaje querés? (alto o bajo): ")

let puntaje = (puntajes, tipo) => {

    if (tipo === "alto") {
        let mayor = puntajes[0]
        for (let i = 0; i < puntajes.length; i++) {
            for (let j = 0; j < puntajes.length - 1; j++) {
                if (puntajes[i].puntaje > mayor.puntaje) {
                    mayor = puntajes[i]
                }
            }
        }
        mensaje = "El puntaje mayor es:"
        console.log(mensaje, mayor);
    }
    else if(tipo === "bajo"){
        let menor = puntajes[0]
        for (let i = 0; i < puntajes.length; i++) {
            for (let j = 0; j < puntajes.length - 1; j++) {
                if (puntajes[i].puntaje < menor.puntaje) {
                    menor = puntajes[i]
                }
            }
        }
        mensaje = "El puntaje menor es"
        console.log(mensaje, menor);
    }
    else{
        console.log("Error, ingrese un tipo válido.");
    }
}

//puntaje(puntajes, tipo)

// * 5. Dada la siguiente matriz: 

let numeros = 
[
[10, 61,14, 12],
[14, 16, 9, 18],
[3, 17, 10, 14],
[67, 82, 9, 10]
]

// * Sumar todos los elementos de la matriz

let sumarMatriz = (matriz) => {

    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
    }
    return acc
}

//console.log(sumarMatriz(numeros));

// * Sumar la diagonal secundaria

let sumarDiagS = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][matriz.length - 1 - i]
    }
    return acc
}

//console.log(sumarDiagS(numeros));

// * Sumar la diagonal principal

let sumarDiagP = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][i]
        
    }
    return acc
}

console.log(sumarDiagP(numeros));

