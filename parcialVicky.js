const prompt = require("prompt-sync")({ sigint: true });

// * 1. Deberás crear una función llamada loopDePares que reciba como parámetro un número y
// * haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número
// * de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola:
// * “El número X es par”.

//let numero = parseInt(prompt("Decime un número: "))

let loopDePares = (numero) => {
  for (let i = 0; i <= 100; i++) {
    if ((i + numero) % 2 == 0) {
      console.log(i);
      let suma = i + numero
      console.log("El número " + suma + " es par.");
    }
    else{
      console.log(i);
    }
  }
}

//loopDePares(numero)

// * --------------------------------

// * 2. Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva
// * un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// * nuevoArreglo(5) debe retornar [1,2,3,4,5]
// * nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

let nuevoArreglo = (numero) => {

  let nuevoArreglo = []
  for (let i = 1; i < numero; i++) {
    nuevoArreglo.push(i)
  }
  return nuevoArreglo
}

//console.log(nuevoArreglo(numero));

// * --------------------------------

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

  // * 3 Obtener un nuevo array por cada tipo de cuenta.

  let tipoCuenta = (array) => {

    let arraySueldo = []
    let arrayCorriente = []

    for (let i = 0; i < array.length; i++) {
      if (array[i].tipoCuenta == "sueldo") {
        arraySueldo.push(array[i])
      }
      else if (array[i].tipoCuenta == "corriente") {
        arrayCorriente.push(array[i])
      }
    }

    console.log(arraySueldo);
    console.log(arrayCorriente);
  }

//tipoCuenta(arrayCuentas);

  // * 3.1 Obtener la cuenta con el titular de la misma más joven.

  let titularJoven = (array) => {
    let joven = array[0]
    for (let i = 0; i < array.length; i++) {
      if (array[i].edadTitular < joven.edadTitular) {
        joven = array[i]
      }
    }
    return joven
  }

  //console.log(titularJoven(arrayCuentas));

  // * 3.2 Obtener el mayor saldo.

  let mayorSaldo = (array) => {
    let mayor = array[0]
    for (let i = 0; i < array.length; i++) {
      if (array[i].saldo > mayor.saldo) {
        mayor = array[i]
      }
    }
    return mayor
  }

  //console.log(mayorSaldo(arrayCuentas));

  // * --------------------------------

  // * 4 Crear una función que genere una matriz de 25x25.
  // * Cada fila debe tener solo 25 números.

  let matCuadrada = (numero) => {
    let matriz = []
    let valor = 0;
    for (let i = 0; i < numero; i++) {
      let filas = []
      for (let j = 0; j < numero; j++) {
        valor++
        filas.push(valor)
      }
      matriz.push(filas)
    }
    return matriz
  }

  //console.table(matCuadrada(numero));
  //let matrizCreada = matCuadrada(numero)
  //console.table(matrizCreada)

  // * 4.1 Sumar la diagonal principal

  let sumarDP = (matriz) => {

    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
      acc += matriz[i][i]
    }
    return acc
  }

  //console.log(sumarDP(matrizCreada));

  // * 4.2 Sumar la diagonal secundaria

  let sumarDS = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
      acc += matriz[i][matriz.length - 1 - i]
    }
    return acc
  }

  //console.log(sumarDS(matrizCreada));

  // * --------------------------------

  gastos = [
    [2, 5, 6, 4, 1, 11, 14],
    [22, 45, 56, 64, 81, 1, 4],
    [26, 52, 64, 43, 71, 101, 154],
    [25, 59, 76, 43, 14, 116, 14],
]

// * 5  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa
// * una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que
// * las matrices comienzan siempre en posición 0.

let sumarFila = (numero, matriz) => {
  if(numero < matriz.length){
    let acc = 0;
    for (let i = 0; i < matriz[numero].length; i++) {
      acc += matriz[numero][i]
    }
    return acc
  }
  else{
    return "Ese número no es una fila"
  }
}

//console.log(sumarFila(numero, gastos));
// * 5.1 Obtener cuál fue la semana que más gastos se realizaron.

let compararSemanas = (matriz) => {
  let gastosSemanas = []
  let acc = 0;
  let numero = 0;

  for (let i = 0; i < matriz[numero].length; i++) {
    acc = acc + matriz[numero][i]
    gastosSemanas.push(acc)
    numero++
  }

  return gastosSemanas
  
}

console.log(compararSemanas(gastos));

// * 5.2 Obtener cuál fue el día de la semana que más gastos se realizaron (sumando los gastos de cada día/columa).

// * --------------------------------

const numeros = [33, 27, 34, 30, 34, 25, 56, 3];

// * 6 Desarrolar una función a la cual se le pase por parámetro un array con números
// * y un tipo de orden, y que ordene dichos números según el tipo de orden pasado.

// * --------------------------------

// * 7 El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// * objeto temperatura donde registra día —valor numérico del día—, mes —valor
// * numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// * día. Cargar los siguientes día en un array, usando una función.

let dia1 = {
    dia: 1,
    mes: 1,
    temperaturaMax: 35,
    temperaturaMin: 25
}

let dia2 = {
    dia: 2,
    mes: 1,
    temperaturaMax: 30,
    temperaturaMin: 23
}

let dia3 = {
    dia: 2,
    mes: 1,
    temperaturaMax: 45,
    temperaturaMin: 20
}

// * 7.1 Ordenar por temperatura mínima de menor a mayor.

// * --------------------------------

// * 8 Crear una función que imprima los números entre el 100 y el 250, saltando de
// * dos en dos.

// * --------------------------------

// * 9 Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// * contenido sea igual a la original pero invertida.