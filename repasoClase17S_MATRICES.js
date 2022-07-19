// * Declara una variable que contenga una matriz
// * de 5x5 llena de puros numeros enteros y positivos

let matriz5x5 = [
    [2, 25, 6, 0, 3],
    [32, 125, 63, 89, 7],
    [36, 54, 11, 9, 21],
    [12, 8, 3, 96, 1],
    [3, 24, 78, 56, 48]
]

// * Luego, escribe un algoritmo para sumar todos
// * los numeros en la matriz.

let sumarMatriz = (matriz) => {
    let acc = 0;

    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            
            acc += matriz[i][j]
            
        }
        
    }

    return acc
}

//console.log(sumarMatriz(matriz5x5));

// * 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 números.

let crearMatriz10x10 = () => {
    let matriz = []
    let valor = 1

    for (let i = 0; i < 10; i++) {
        matriz.push([])

        for (let j = 0; j < 10; j++) {
            matriz[i].push(valor)
            valor++
            
        }
        
    }

    return matriz
}

console.table(crearMatriz10x10());

// * 3) Por último, vamos a generar dos funciones:
// * a) Una va a sumar los valores en la diagonal marcada en rojo.

let matriz10x10 = crearMatriz10x10()

let sumarDiagonalP = (matriz) => {
    let acc = 0;

    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][i]
        
    }

    return acc
}

//console.log(sumarDiagonalP(matriz10x10));

// * b) La otra va a marcar los valores de la diagonal marcada en verde.

let sumarDiagonalS = (matriz) => {
    let acc = 0;

    for (let i = 0; i < matriz.length; i++) {
        
        acc += matriz[i][matriz.length - 1 - i]
        
    }

    return acc
}

console.log(sumarDiagonalS(matriz10x10));
console.table(matriz10x10)