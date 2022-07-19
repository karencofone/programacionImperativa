// 1 .
// Tenés una lista de estudiantes con su desempeño académico actual.
// Crear una función que incremente 2 puntos  la nota de contenido a aquellos alumnos
// cuya nota de concepto sea mayor o igual a 6.

const listado = [
    { Estudiante: "Juan", notaConcepto: 6, notaContenido: 6 },
    { Estudiante: "Mario", notaConcepto: 8, notaContenido: 8 },
    { Estudiante: "Julia", notaConcepto: 8, notaContenido: 5 },
    { Estudiante: "Sofia", notaConcepto: 2, notaContenido: 4 },
];
  
let aumentarDos = (array) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i].notaConcepto >= 6) {
            array[i].notaContenido += 2
        }
    }
    return array
}

console.log(aumentarDos(listado));

// 2 .
// Desarrollar una función que reciba por parámetro él array de
// países y ordene de forma ascendente según su población

const paises = [
    {
      nombre: "venezuela",
      continente: "Sudamerica",
      poblacion: 25000000,
    },
    {
      nombre: "australia",
      continente: "oceania",
      poblacion: 18000000,
    },
    {
      nombre: "tailandia",
      continente: "asia",
      poblacion: 32000000,
    },
    {
      nombre: "vietnam",
      continente: "asia",
      poblacion: 23000000,
    },
    {
      nombre: "francia",
      continente: "europa",
      poblacion: 65000000,
    },
];

let ordenarPoblacion = (array) => {
    let aux
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].poblacion > array[j+1].poblacion) {
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux
            }
        }
    }
}

ordenarPoblacion(paises)
console.log(paises);

// 3.
// Dada la matriz

const matriz = [
 
    //mínima  // máxima
    [10,         25],     // lunes
    [8,          27],     // martes
    [-1,         19],     // miércoles
    [7,          19],     // jueves
    [2,          22],     // viernes
    [4,          26],     // sábado
    [5,          21],     // domingo
 
];

// 3.A Crear una función reciba a la matriz y un dia por parámetro y que calcule
// el promedio de temperatura del día recibido por parámetro. La función debe
// retornar el promedio. Recuerda imprimir el resultado por consola.

let promedioDia = (matriz, dia) => {
    let acc = 0;
    let cantTemperaturas = matriz[dia].length
    let promedio;
    for (let i = 0; i < matriz[dia].length; i++) {
        acc += matriz[dia][i]
    }
    promedio = acc / cantTemperaturas
    return promedio
}

let sacarPromedio = promedioDia(matriz, 3)
console.log(sacarPromedio);

// 3.B Crear una función que reciba por parámetro una matriz y que retorne en un
// nuevo array todas las temperaturas máximas que sean menores a 22 grados.

let maxMenor22 = (matriz) => {
    let nuevoArray = []
    for (let i = 0; i < matriz.length; i++) {
        let maxima = matriz[i][1]
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] >= maxima) { // acá quiero chequear la máxima (por si hay un error en la carga de datos),
                                          // y en caso de que ambas temperaturas sean iguales quiero que
                                          // tome una de las dos, por eso el >=
                maxima = matriz[i][j]
                if (maxima < 22) {
                    nuevoArray.push(maxima)
                }
            }
            
        }
    }
    return nuevoArray
}

console.log(maxMenor22(matriz));

// 3.C Crear una función que acepte por parámetro una matriz y que retorne
// el promedio de temperatura de toda la semana.

let promedioSemanal = (matriz) => {
    let acc = 0;
    let cantidadDias = matriz.length
    let promedio;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
    }
    promedio = acc / cantidadDias
    return promedio
}

console.log(promedioSemanal(matriz));