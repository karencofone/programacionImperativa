// * ORDENAR LOS ESTUDIANTES POR LA EDAD , DE FORMA ASCENDENETE

let estudiantes = [
  {
    nombre: "teresa",
    edad: 42,
  },
  {
    nombre: "zaul",
    edad: 12,
  },
  {
    nombre: "antonella",
    edad: 22,
  },
];

let ordenarEdad = (array) => {
  let aux;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].edad > array[j+1].edad) {
        aux = array[j]
        array[j] = array[j+1]
        array[j+1] = aux
      }
    }
  }
}

//ordenarEdad(estudiantes)
//console.log(estudiantes);

// * MULTIPLICAR LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL
// * PERO SOLO LOS MULTIPLOS DE 5
  
let matriz = [
  [25, 11, 31],
  [9, 15, 27],
  [29, 11, 14],
];

let multiplicarDP = (matriz) => {
  let acc = 1;
  for (let i = 0; i < matriz.length; i++) {
      if(matriz[i][i] % 5 === 0){
        acc *= matriz[i][i]
      }
    }
  return acc
}
  
//console.log(multiplicarDP(matriz));

// * RECORRER LA COLUMNA DE LA POSICION 0 Y SUMAR LOS 
// * NUMEROS QUE SEAN PARES Y MAYORES QUE  15
  
let matriz2 = [
  [25, 31],
  [9, 27],
  [30, 14],
  [58, 16],
];

let recorrerCol0 = (matriz) => {
  let acc = 0
  for (let i = 0; i < matriz.length; i++) {
    if ((matriz[i][0] % 2 == 0) && (matriz[i][0] > 15)) {
      acc += matriz[i][0]
    }
  }
  return acc
}

//console.log(recorrerCol0(matriz2));

// * ORDENAR EL SIGUIENTE ARREGLO DE FORMA DESCENDENTE 
// * UNICAMENTE SI RECIBIMOS POR PARAMETROS LA INDICACION,
// * SI NO, DEJAREMOS EL ALGORITMO LISTO PARA LA PROXIMA
  
let numeros = [ 522, 122, 2, 155, 741]

let ordearArray = (array, indicacion) => {
  if (indicacion === undefined) {
    console.log("Lo siento, no recibi la indicacion");
    return array
  }
  
  let aux;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j+1]) {
        aux = array[j]
        array[j] = array[j+1]
        array[j+1] = aux
      }
    }
  }
}

//ordearArray(numeros, 5)
//console.log(numeros);

// * SUMAR LOS ELEMENTOS IMPARES DE LA DIAGONAL SECUNDARIA
  
let matriz3 = [
  [25, 31, 12],
  [10, 27, 13],
  [10, 27, 21],
];

let sumarDiagSecun = (matriz) => {
  let acc = 0;
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i][matriz.length - 1 - i] % 2 !== 0) {
      acc += matriz[i][matriz.length - 1 - i]
    }
  }
  return acc
}

//console.log(sumarDiagSecun(matriz3));

// * CAMBIAR TODOS LOS ELEMENTOS NEGATIVOS DE LA MATRIZ
// * POR SU IGUAL PERO POSITIVO

let matrix = [
  [25, -31, 12],
  [-10, 27, -13],
  [10, -27, -21],
];

let positivizar = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] < 0) {
        matriz[i][j] *= -1
      }
    }
  }
}

// positivizar(matrix)
// console.log(matrix);



