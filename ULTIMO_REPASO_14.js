// ! A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// * Obtener en un nuevo array las edades menores a 18.

/*
function menoresA18(array){

    let nuevoArray = []

    for(let i = 0; i < array.length; i++){
        if(array[i] < 18){
            nuevoArray.push(array[i])
        }
    }

    return nuevoArray
}

let menores18 = menoresA18(edades)
console.log(menores18);
*/

// * Obtener en un nuevo array las edades mayor o igual a 18.

/*
function mayorIgualA18(array){

    let nuevoArray = []

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 18){
            nuevoArray.push(array[i])
        }
    }

    return nuevoArray
}

let mayorIgual18 = mayorIgualA18(edades)
console.log(mayorIgual18);
*/

// * Obtener en un nuevo array las edades igual a 18.

/*
function igualA18(array){

    let nuevoArray = []

    for(let i = 0; i < array.length; i++){
        if(array[i] == 18){
            nuevoArray.push(array[i])
        }
    }

    return nuevoArray
}

let igual18 = igualA18(edades)
console.log(igual18);
*/

// * Obtener el menor

/*
function menor(array){

    let elMenor = array[0]

    for(let i = 0; i < array.length; i++){
        if(array[i] < elMenor){
            elMenor = array[i]
        }
    }

    return elMenor
}

let obtenerMenor = menor(edades)
console.log(obtenerMenor);
*/

// * Obtener el mayor.

/*
function mayor(array){

    let elMayor = array[0]

    for(let i = 0; i < array.length; i++){
        if(array[i] > elMayor){
            elMayor = array[i]
        }
    }

    return elMayor
}

let obtenerMayor = mayor(edades)
console.log(obtenerMayor);
*/

// * Obtener el promedio de edades.

/*
function promedio(array){

    let acumulador = 0

    for(let i=0; i < array.length; i++){
        acumulador+=array[i]
    }

    return acumulador / array.length
}

let obtenerPromedio = promedio(edades)
console.log(obtenerPromedio);
*/

// * Incrementar en 1 todas las edades.

/*
function incrementarEn1(array){

    for(let i = 0; i < array.length; i++){
        array[i]++
    }

    return array

}

let incrementar1 = incrementarEn1(edades)
console.log(incrementar1);
*/

// ? ------------------------------------------------------------------------------------------------

// ! Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto
// ! literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la
// ! forma que nos parezca más adecuada

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

// * Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

/*
function menorA30(array){

    let nuevoArray = []

    for(let i = 0; i < array.length; i++){
        if(array[i].edadTitular < 30){
            nuevoArray.push(array[i])
        }
    }

    return nuevoArray
}

let menor30 = menorA30(arrayCuentas)
console.log(menor30);
*/

// * Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

/*
function mayorOIgualA30(array){

    let nuevoArray = []

    for(let i=0; i<array.length; i++){
        if(array[i].edadTitular >= 30){
            nuevoArray.push(array[i])
        }
    }

    return nuevoArray
}

let mayorIgual30 = mayorOIgualA30(arrayCuentas)
console.log(mayorIgual30);
*/

// * Obtener un nuevo array de cuentas cuyas edades sean igual a 30.

/*
function igualA30(array){

    let nuevoArray = []

    for(let i=0; i < array.length; i++){
        if(array[i].edadTitular == 30){
            nuevoArray.push(array[i])
        }
    }

    return nuevoArray
}

let igual30 = igualA30(arrayCuentas)
console.log(igual30);
*/

// * Obtener la cuenta con el titular de la misma más joven.

/*
function elMasJoven(array){

    let masJoven = array[0]

    for(let i=0; i<array.length; i++){
        if(array[i].edadTitular < masJoven.edadTitular){
            masJoven = array[i]
        }
    }

    return masJoven
}

let joven = elMasJoven(arrayCuentas)
console.log(joven);
*/

// * Obtener un nuevo array por cada tipo de cuenta.

/*
function tipoDeCuenta(array){

    let cuentaSueldo = []
    let cuentaCorriente = []
    let error = []

    for(let i=0; i<array.length; i++){
        if(array[i].tipoCuenta == "sueldo"){
            cuentaSueldo.push(array[i])
        }
        else if(array[i].tipoCuenta == "corriente"){
            cuentaCorriente.push(array[i])
        }
    }

    return [cuentaSueldo, cuentaCorriente]
}

let tipoCuenta = tipoDeCuenta(arrayCuentas)
console.log(tipoCuenta);
*/

// * Obtener un nuevo array con las cuentas habilitadas.

/*
function habilitada(array){

    let nuevoArray = []

    for(let i=0; i<array.length; i++){
        if(array[i].estaHabilitada == true){
            nuevoArray.push(array[i])
        }
    }

    return nuevoArray
}

let cuentasHabilitadas = habilitada(arrayCuentas)
console.log(cuentasHabilitadas);
*/

// * Obtener un nuevo array con las cuentas deshabilitadas.

/*
function deshabilitada(array){

    let nuevoArray = []

    for(let i=0; i<array.length; i++){
        if(array[i].estaHabilitada == false){
            nuevoArray.push(array[i])
        }
    }

    return nuevoArray
}

let cuentasDeshabilitadas = deshabilitada(arrayCuentas)
console.log(cuentasDeshabilitadas);
*/

// * Obtener la cuenta con el menor saldo.


function menor(array){

    let menorSaldo = array[0]

    for(let i=1; i<array.length; i++){
        if(array[i].saldo < menorSaldo.saldo){
            menorSaldo = array[i]
        }
    }

    return menorSaldo
}

let menorSaldo = menor(arrayCuentas)
console.log(menorSaldo);


// * Obtener el mayor saldo.

/*
function mayor(array){

    let mayorSaldo = array[0]

    for(let i=0; i<array.length; i++){
        if(array[i].saldo > mayorSaldo.saldo){
            mayorSaldo = array[i]
        }
    }

    return mayorSaldo
}

let mayorSaldo = mayor(arrayCuentas)
console.log(mayorSaldo);
*/
