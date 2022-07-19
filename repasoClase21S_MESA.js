// * Escribir una función que reciba un array de elementos
// * e indique si se encuentran ordenados de menor a mayor o no
// * La función debe retornar un booleano: true si el array esta ordenado, false, si no.

let pruebaA = [4, 3, 1, 7, 9, 0, 4, 2];
let pruebaB = [1, 2, 3, 4, 5, 6, 7, 8];

let estanOrdenados = (array) => {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]){
            return false
        }
    }
    return true
}

//console.log(estanOrdenados(pruebaB));

// * Escribir una función que
// * reciba un array con nombres,
// * y para cada nombre imprima el mensaje:
// * Estimado (nombre) , vote por mí.

let nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

const votePorMi = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log("Estimado " + array[i] + ", vote por mi");
    }
}

//votePorMi(nombres)

// * Implementar un algoritmo que imprima por consola una pirámide inversa de los números del 1 al número que
// * indique el usuario de la siguiente forma: (suponiendo que indica 6). 

// * 666666 
// * 55555 
// * 4444 
// * 333 
// * 22 
// * 1

function piramide(numBases) {
    for (let i = numBases; i > 0; i--) {
      let acc = "";
      for (let j = 0; j < i ; j++) {
        acc = acc + " " + i; 
      }
      console.log(acc) 
    }
  }
  
//piramide(6);

// * Teniendo 3 arrays:

fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]

// * Crea una matriz con esta forma:

const crearMat3x3 = (array1, array2, array3) => {
    let matriz = []
    matriz.push(array1, array2, array3)
    return matriz
}

//console.table(crearMat3x3(fila1, fila2, fila3));

let matriz3x3 = crearMat3x3(fila1, fila2, fila3)

// * Luego, a partir de esta matriz, realiza lo siguiente:

// * -Imprimir la suma de cada fila,

const sumarFilas = (matriz) => {
    let sumaDeFilas = []
    for (let i = 0; i < matriz.length; i++) {
        let acc = 0
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][i]
        }
        sumaDeFilas.push(acc)
        
    }
    return sumaDeFilas
}

//console.log(sumarFilas(matriz3x3));

// * -Imprimir la multiplicación de cada columna (es decir, los 3 valores multiplicados entre sí)
// * sólo si el resultado es par.

const multiplicarColumna = (matriz) => {
    let multiplicarCol = []
    for (let j = 0; j < matriz.length; j++) {
        let acc = 1
        for (let i = 0; i < matriz[j].length; i++) {
            acc *= matriz[i][j]
        }
        if (acc % 2 === 0) {
            multiplicarCol.push(acc)
        }
    }
    return multiplicarCol
}

//console.log(multiplicarColumna(matriz3x3));

// * - Imprimir la suma de ambas diagonales por separado

let sumaDiagonales = (matriz) => {
    let accP = 0;
    let accS = 0;

    for (let i = 0; i < matriz.length; i++) {
        accP += matriz[i][i]
    }

    console.log("La suma de la diagonal principal es " + accP);

    for (let i = 0; i < matriz.length; i++) {
        accS += matriz[i][matriz.length - 1 - i]
    }

    console.log("La suma de la diagonal principal es " + accS);

}

sumaDiagonales(matriz3x3);




