let matriz = [
    [55, 15, 24],
    [24, 32, 54],
    [2, 32, 10]
];

// ! RECORRER UNA FILA

let recorrerFila = (matriz, fila) => {
    for (let i = 0; i < matriz[fila].length; i++) {
        matriz[fila][i]
    }
}

// ! RECORRER UNA FILA Y SUMARLA

let sumarFila = (matriz, fila) => {
    let acc = 0
    for (let i = 0; i < matriz[fila].length; i++) {
        acc += matriz[fila][i]
    }
    return acc
}

//console.log(sumarFila(matriz, 0));

// ! RECORRAR TODAS LAS FILAS, SUMARLAS Y DECIR CUÁL ES LA MAYOR/MENOR

let sumasFilas = (matriz) => {
    let suma = []
    for (let i = 0; i < matriz.length; i++) {
        let acc = 0
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
        suma.push(acc)
    }

    let elMayor = suma[0]
    for (let i = 0; i < suma.length; i++) {
        if (suma[i] > suma[0]) {
            elMayor = suma[i]
        }
    }

    let elMenor = suma[0]
    for (let i = 0; i < suma.length; i++) {
        if (suma[i] < suma[0]) {
            elMenor = suma[i]
        }
    }

    return [elMayor, elMenor]

}

//console.log(sumaFilas(matriz));

// ! RECORRAR TODAS LAS FILAS, SUMARLAS Y ORDENARLAS EN FORMA ASC/DESC EN UN ARRAY

let sumaFilasOrden = (matriz, tipoOrden) => {
    let nuevoArray = [];
    for (let i = 0; i < matriz.length; i++) {
        let acc = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
        nuevoArray.push(acc)
    }

    let aux;
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - 1; j++) {
            if (tipoOrden == "asc") {
                if (nuevoArray[j] > nuevoArray[j+1]) {
                    aux = nuevoArray[j]
                    nuevoArray[j] = nuevoArray[j+1]
                    nuevoArray[j+1] = aux
                }
            }
            else if(tipoOrden == "desc"){
                if (nuevoArray[j] < nuevoArray[j+1]) {
                    aux = nuevoArray[j]
                    nuevoArray[j] = nuevoArray[j+1]
                    nuevoArray[j+1] = aux
                }
            }
            
        }
        
    }
    
    return nuevoArray

}

//console.log(sumaFilasOrden(matriz, "desc"));

// ? ------------------------------------------------------------------------------

// ! RECORRER UNA COLUMNA

let recorrerColumna = (matriz, numero) => {
    for (let i = 0; i < matriz.length; i++) {
        matriz[i][numero]
    }
}

// ! RECORRER UNA COLUMNA Y SUMARLA

let sumarColumna = (matriz, numero) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][numero]
    }
    return acc
}

//console.log(sumarColumna(matriz, 0));

// ! RECORRAR TODAS LAS COLUMNAS, SUMARLAS Y DECIR CUÁL ES LA MAYOR/MENOR

let sumaColumnas = (matriz) => {
    let suma = []
    for (let i = 0; i < matriz.length; i++) {
        let acc = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[j][i]
        }
        suma.push(acc)
    }

    let mayor = suma[0]
    for (let i = 0; i < suma.length; i++) {
        if (suma[i] > mayor) {
            mayor = suma[i]
        }
    }

    let menor = suma[0]
    for (let i = 0; i < suma.length; i++) {
        if (suma[i] < menor) {
            menor = suma[i]
        }
    }

    return [mayor, menor]
}

//console.log(sumaColumnas(matriz));

// ! RECORRAR TODAS LAS COLUMNAS, SUMARLAS Y ORDENARLAS EN FORMA ASC/DESC EN UN ARRAY

let sumaColumnasOrden = (matriz, tipoOrden) => {
    let suma = []
    for (let i = 0; i < matriz.length; i++) {
        let acc = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[j][i]
        }
        suma.push(acc)
    }

    let aux;
    for (let i = 0; i < suma.length; i++) {
        for (let j = 0; j < suma.length - 1; j++) {
            if (tipoOrden == "asc"){
                if (suma[j] > suma[j+1]) {
                    aux = suma[j]
                    suma[j] = suma[j+1]
                    suma[j+1] = aux
                }
            }
            else if(tipoOrden == "desc"){
                if (suma[j] < suma[j+1]) {
                    aux = suma[j]
                    suma[j] = suma[j+1]
                    suma[j+1] = aux
                }
            }
        }
    }
    return suma
}

//console.log(sumaColumnasOrden(matriz, "asc"));

// ? ------------------------------------------------------------------------------

// ! CREAR UNA MATRIZ SUBIÉNDOLE N ARRAYS DE NUMEROS CONSECUTIVOS

let crearMatrizConsecutiva = (numero) => {
    let matriz = []
    let valor = 1
    for (let i = 0; i < numero; i++) {
        matriz.push([])
        for (let j = 0; j < numero; j++) {
            matriz[i].push(valor)
            valor++
        }
    }
    return matriz
}

//console.table(crearMatrizConsecutiva(3));
let matriz2 = crearMatrizConsecutiva(3);

// ! CREAR UNA MATRIZ SUBIÉNDOLE N ARRAYS DE NUMEROS IGUALES PARA CADA FILA

let crearMatrizIgual = (numero) => {
    let matriz = []
    let valor = 1
    for (let i = 0; i < numero; i++) {
        matriz.push([])
        for (let j = 0; j < numero; j++) {
            matriz[i].push(valor)
            
        }
        valor++
    }
    return matriz
}

//console.table(crearMatrizIgual(5))

// ! CREAR UNA MATRIZ SUBIÉNDOLE N ARRAYS DE NUMEROS IGUALES PARA TODA LA MATRIZ

let crearMatrizIdentica = (numero) => {
    let matriz = []
    for (let i = 0; i < numero; i++) {
        matriz.push([])
        for (let j = 0; j < numero; j++) {
            matriz[i].push(numero)
        }
    }
    return matriz
}

//console.table(crearMatrizIdentica(4))

// ! CREAR UNA MATRIZ SUBIÉNDOLE N ARRAYS DE NUMEROS IGUALES DE UN NÚMERO

let crearMatrizNoTanIdentica = (numero, valor) => {
    let matriz = []
    for (let i = 0; i < numero; i++) {
        matriz.push([])
        for (let j = 0; j < numero; j++) {
            matriz[i].push(valor)
        }
    }
    return matriz
}

//console.table(crearMatrizNoTanIdentica(4, 12))
//let matriz1 = crearMatrizNoTanIdentica(4, 12);

// ! CREAR UNA MATRIZ SUBIÉNDOLE N ARRAYS DE NUMEROS RÁNDOM

let crearMatrizRandom = (numero) => {
    let matriz = []
    for (let i = 0; i < numero; i++) {
        matriz.push([])
        for (let j = 0; j < numero; j++) {
            let inicio = 1;
            let fin = 100;
            let random = inicio+ Math.floor(Math.random()*fin);
            matriz[i].push(random)
        }
    }
    return matriz
}

//console.table(crearMatrizRandom(5))
let matrizRandom = crearMatrizRandom(3);

// ! RECORRER UNA MATRIZ Y SUMARLA

let sumarMatriz = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
    }
    return acc
}

//console.log(sumarMatriz(matrizRandom));

// ! RECORRER LA DIAGONAL PRINCIPAL Y SUMARLA

let sumarDiagP = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][i]
    }
    return acc
}

// console.log(matriz1);
// console.log(sumarDiagP(matriz1));

// ! RECORRER LA DIAGONAL SECUNDARIA Y SUMARLA

let sumarDiagS = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][matriz.length -1 -i]
    }
    return acc
}

//console.log(sumarDiagS(matriz1));

// ! RECORRER AMBAS DIAGONALES, SUMARLAS

let sumarDiagonales = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][i] + matriz[i][matriz.length-1-i]
    }
    return acc
}

// console.table(matriz2);
// console.log(sumarDiagonales(matriz2));

// ! RECORRER AMBAS DIAGONALES, SUMAR C/U Y SUBIR LOS RESULTADOS A UN ARRAY,
// ! ORDENARLO EN FORMA ASC/DESC

let matriz3 = [
    [ 80, 73, 18 ],
    [ 59, 77, 31 ],
    [ 39, 47, 15 ]
];

let sumarDiagonalesOrden = (matriz, tipoOrden) => {
    let acc = 0
    let nuevoArray = []
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][i]
    }
    nuevoArray.push(acc)
    acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][matriz.length -1 -i]
        
    }
    nuevoArray.push(acc)

    let aux
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - 1; j++) {
            if (tipoOrden == "asc") {
                if (nuevoArray[j] > nuevoArray[j+1]) {
                    aux = nuevoArray[j]
                    nuevoArray[j] = nuevoArray[j+1]
                    nuevoArray[j+1] = aux
                }
            }
            else if(tipoOrden == "desc"){
                if (nuevoArray[j] < nuevoArray[j+1]) {
                    aux = nuevoArray[j]
                    nuevoArray[j] = nuevoArray[j+1]
                    nuevoArray[j+1] = aux
                }
            }
        }
    }
    return nuevoArray
}

//console.log(sumarDiagonalesOrden(matriz3, "desc"));

// ? ------------------------------------------------------------------------------

// ! ORDENAR LOS OBJETOS LITERALES DE UN ARRAY SEGÚN ALGUNO DE SUS VALORES
// ! DE MANERA DESC Y ASC

let objeto = [
    {
    valor: 58,
    total: [1, 0, 4]
    },
    {
    valor: 43,
    total: [9, 4, 7]
    },
    {
    valor: 74,
    total: [5, 2, 0]
    },
    {
    valor: 20,
    total: [7, 5, 1]
    }
]


let ordenarValorAsc = (objeto) => {
    let aux
    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < objeto[i].valor.length; j++) {
            if (objeto[j].valor > objeto[j+1].valor) {
                aux  = objeto[j]
                objeto[j] = objeto[j+1]
                objeto[j+1] = aux
            }
            
        }
    }
}

// ordenarValorAsc(objeto)
// console.log(objeto);

let ordenarValorDesc = (objeto) => {
    let aux
    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < objeto[i].valor.length; j++) {
            if (objeto[j].valor < objeto[j+1].valor) {
                aux  = objeto[j]
                objeto[j] = objeto[j+1]
                objeto[j+1] = aux
            }
            
        }
    }
}

// ordenarValorDesc(objeto)
// console.log(objeto);

// ! ORDENAR LOS ARRAYS DE LOS OBJETOS DE MENOR A MAYOR

// * PRUEBAS
/*
let ordenarArrayO = (objeto, tipoOrden) => {
    let aux
    let aux2
    for (let i = 0; i < objeto.length; i++) { // ? RECORRE EL ARRAY GRANDE
        for (let j = 0; j < objeto[i].total.length; j++){ // ? ENTRA AL ARRAY DE CADA OBJETO
            for (let k = 0; k < objeto[i].total.length - 1; k++) { // ? COMPARA LOS VALORES DEL ARRAY CHICO
                if(tipoOrden == "desc"){
                    if (objeto[i].total[k] < objeto[i].total[k+1]) {
                        aux = objeto[i].total[k]
                        objeto[i].total[k] = objeto[i].total[k+1]
                        objeto[i].total[k+1] = aux
                    }
                }
                else if(tipoOrden == "asc"){
                    if (objeto[i].total[k] > objeto[i].total[k+1]) {
                        aux = objeto[i].total[k]
                        objeto[i].total[k] = objeto[i].total[k+1]
                        objeto[i].total[k+1] = aux
                    }
                }
            }
        }
    }
    return objeto
}

//console.log(ordenarArrayO(objeto, "asc"));

let ordenarArrayO2 = (objeto, tipoOrden) => {
    let aux
    let aux2
    for (let i = 0; i < objeto.length; i++) { // ? RECORRE EL ARRAY GRANDE
        for (let j = 0; j < objeto.length - 1; j++){ // ? ENTRA AL ARRAY DE CADA OBJETO
            if (objeto[j].valor > objeto[j+1].valor) {
                aux2 = objeto[j].valor
                objeto[j].valor = objeto[j+1].valor
                objeto[j+1].valor = aux2
            }
            for (let k = 0; k < objeto[i].total.length - 1; k++) { // ? COMPARA LOS VALORES DEL ARRAY CHICO
                if(tipoOrden == "desc"){
                    if (objeto[i].total[k] < objeto[i].total[k+1]) {
                        aux = objeto[i].total[k]
                        objeto[i].total[k] = objeto[i].total[k+1]
                        objeto[i].total[k+1] = aux
                    }
                }
                else if(tipoOrden == "asc"){
                    if (objeto[i].total[k] > objeto[i].total[k+1]) {
                        aux = objeto[i].total[k]
                        objeto[i].total[k] = objeto[i].total[k+1]
                        objeto[i].total[k+1] = aux
                    }
                }
            }
        }
    }
    return objeto
}

//console.log(ordenarArrayO2(objeto, "asc"));
*/
let ordenarArrayO1 = (objeto, tipoOrden, tipoOrden2) => {
    let aux
    let aux2
    for (let i = 0; i < objeto.length; i++) { // ? RECORRE EL ARRAY GRANDE
        for (let j = 0; j < objeto.length - 1; j++){ // ? ENTRA AL ARRAY DE CADA OBJETO
            if (tipoOrden2 == "desc") {
                if (objeto[j].valor < objeto[j+1].valor) {
                    aux2 = objeto[j].valor
                    objeto[j].valor = objeto[j+1].valor
                    objeto[j+1].valor = aux2
                }
            }
            else if(tipoOrden2 == "asc"){
                if (objeto[j].valor > objeto[j+1].valor) {
                    aux2 = objeto[j].valor
                    objeto[j].valor = objeto[j+1].valor
                    objeto[j+1].valor = aux2
                }
            }
            for (let k = 0; k < objeto[i].total.length - 1; k++) { // ? COMPARA LOS VALORES DEL ARRAY CHICO
                if(tipoOrden == "desc"){
                    if (objeto[i].total[k] < objeto[i].total[k+1]) {
                        aux = objeto[i].total[k]
                        objeto[i].total[k] = objeto[i].total[k+1]
                        objeto[i].total[k+1] = aux
                    }
                }
                else if(tipoOrden == "asc"){
                    if (objeto[i].total[k] > objeto[i].total[k+1]) {
                        aux = objeto[i].total[k]
                        objeto[i].total[k] = objeto[i].total[k+1]
                        objeto[i].total[k+1] = aux
                    }
                }
            }
        }
    }
    return objeto
}

//console.log(ordenarArrayO1(objeto, "asc", "desc"));

// ! DADO UN ARRAY DE OBJETOS LITERALES DECIR CUÁL ES EL QUE TIENE LA MAYOR
// ! PROPIEDAD Y LA MENOR (COMPARARLOS)

let mayorValor = (objeto) => {
    let mayor = objeto[0].valor
    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < objeto.length - 1; j++) {
            if (objeto[i].valor > mayor) {
                mayor = objeto[i]
            }
            
        }
        
    }
    return mayor
}

console.log(mayorValor(objeto));