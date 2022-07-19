// * Primero vamos a crear una matriz de 2x2 con Js.

let matriz2x2 = [
    [5, 15],
    [24, 32]
]

// * ¿Cómo accedo al valor almacenado en 1-1?

console.log(matriz2x2[1][1]);

// * ¿Cómo puedo cambiar el valor almacenado en 1-0?

let cambiarValor = (matriz) => {

    let valorNuevo = 2
    matriz[1][0] = valorNuevo
    return matriz
}

console.log(cambiarValor(matriz2x2));

// * Probemos ahora crear matrices que no sean cuadradas, ¿como lo haríamos?

let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
console.table(arrayMatriz)

console.log(arrayMatriz.length)
for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i])
}

// * IMPRIMIR PRIMERA COLUMNA

for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i][0])
}

// * IMPRIMIR PRIMERA FILA

for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i][0])
}

// * Bucle que recorre el primer array
for(let i=0; i<arrayMatriz.length; i++) {
    // * Bucle que recorre el array que está en la posición i
    for(let j=0; j<arrayMatriz[i].length; j++) {
        console.log(arrayMatriz[i][j]);
    }
}


