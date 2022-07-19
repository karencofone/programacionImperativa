//Ejercicio 1
// a. Es un array de objetos de alumnos
// b. Las propiedades son: id, nombre, apellido, legajo y notas.

const alumnos = [
    {
        id: 0,
        nombre: "Leandro",
        apellido: "Borrelli",
        legajo: 20210308,
        notas: [],
    },
    {
        id: 1,
        nombre: "Esteban",
        apellido: "Piazza",
        legajo: 20210211,
        notas: [],
    },
    {
        id: 2,
        nombre: "Martin",
        apellido: "Cejas",
        legajo: 20210218,
        notas: [],
    },
    {
        id: 3,
        nombre: "Karina",
        apellido: "Borgna",
        legajo: 20210516,
        notas: [],
    },
    {
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [],
    },
];
// console.log(alumnos)

// * Cargas las notas en los arrays de cada alumno

let cargarNotas = (objeto, cantidad) => {
    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < cantidad; j++) {
            let inicio = 1;
            let fin = 10;
            let nota = inicio+ Math.floor(Math.random()*fin);
            objeto[i].notas.push(nota)
        }
    }
    return objeto
}

//console.log(cargarNotas(alumnos, 5));

// * Ordenar los legajos de forma ascendiente

let ordenarAscendente = (array) => {
    let aux
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].legajo > array[j+1].legajo) {
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux
            }
        }
    }
}

// ordenarAscendente(alumnos)
// console.log(alumnos);

// * Calcular el promedio del objeto literal alumno

let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10, 9, 8, 7, 9]
}

let promedioAlumno = (objeto) => {
    let acc = 0;
    for (let i = 0; i < objeto.notas.length; i++) {
        acc += objeto.notas[i]
    }
    return (acc / objeto.notas.length)
}

//console.log(promedioAlumno(alumno));


//* Ordenar las notas del alumno en forma descendiente

let ordenarNotas = (objeto) => {
    let aux;
    for (let i = 0; i < objeto.notas.length; i++) {
        for (let j = 0; j < objeto.notas.length - 1; j++) {
            if (objeto.notas[j] < objeto.notas[j+1]) {
                aux = objeto.notas[j]
                objeto.notas[j] = objeto.notas[j+1]
                objeto.notas[j+1] = aux
            }   
        }  
    }
}

// ordenarNotas(alumno)
// console.log(alumno);

// * Crear una matriz de 3x3 con números iguales en cada fila

let crearMatriz = (numero) => {
    let matriz = []
    let valor = 1
    for (let i = 0; i < numero; i++) { 
        matriz.push([]) // ! LA CANTIDAD DE FILAS
        for (let j = 0; j < numero; j++) {
            matriz[i].push(valor) // ! EL VALOR DE CADA FILA
        }
        valor++ // ! INCREMENTAMOS EL VALOR DE CADA FILA
    }
    return matriz
}

//console.log(crearMatriz(3));
let matriz3x3 = crearMatriz(3);

// * Sumar los números que sean múltiplos de 3 y retornar la suma

let sumaMultiplos3 = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 3 === 0) {
                acc += matriz[i][j]
            }
        }
    }
    return acc
}

//console.log(sumaMultiplos3(matriz3x3));

// * Sumar los números de la matriz

let sumarMatriz = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
    }
    return acc
}

//console.log(sumarMatriz(matriz3x3));

// * Sumar los numeros si son pares

let sumarPares = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 === 0) {
                acc += matriz[i][j]
            }
        }
    }
    return acc
}

//console.log(sumarPares(matriz3x3));

// * Sumas ambas diagonales

let sumarDiagonales = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][i] + matriz[i][matriz.length - 1 - i]  
    }
    return acc
}

//console.log(sumarDiagonales(matriz3x3));