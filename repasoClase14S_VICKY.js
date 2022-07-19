// ! A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// * Obtener en un nuevo array las edades menores a 18.
/*
function menores(array){

    let menores18 = []

    for(let i = 0; i < array.length; i++){
        if(array[i] < 18){
            menores18.push(array[i])
        }
    }

    return menores18

}

let menorA18 = menores(edades)
console.log(menorA18);
*/

// * Obtener en un nuevo array las edades mayor o igual a 18.
/*
function mayorIgual18(array){

    let mayorIgual18 = []

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 18){
            mayorIgual18.push(array[i])
        }
    }

    return mayorIgual18

}

let mayorOIgualA18 = mayorIgual18(edades)
console.log(mayorOIgualA18);
*/

// * Obtener en un nuevo array las edades igual a 18.
/*
function igual18(array){

    let igualA18 = []

    for(let i = 0; i < array.length; i++){
        if(array[i] === 18){
            igualA18.push(array[i])
        }
    }

    return igualA18

}

let igualDieciocho = igual18(edades)
console.log(igualDieciocho);
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

let obtenerElMenor = menor(edades);
console.log(obtenerElMenor);
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

let obtenerElMayor = mayor(edades);
console.log(obtenerElMayor);
*/

// * Obtener el promedio de edades.
/*
function obtenerPromedio(array){

    let acumulador = 0;
    for(let i = 0; i < array.length; i++){
        acumulador += array[i]
    }

    let promedio = acumulador / array.length

    return Math.round(promedio)

}

let prom = obtenerPromedio(edades);
console.log(prom);
*/

// * Incrementar en 1 todas las edades.
/*
function incrementarEnUno(array){
    for(let i = 0; i < array.length; i++){
        array[i]++
    }
    return array
}

let incrementarEn1 = incrementarEnUno(edades);
console.log(incrementarEn1);
*/

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
  function menor30(array){
    let menorA30 = []
    for(let i = 0; i < array.length; i++){
        if(array[i].edadTitular < 30){
            menorA30.push(array[i])
        }
    }
    return menorA30
  }

  let menoresA30 = menor30(arrayCuentas);
  console.log(menoresA30);
  */

  // * Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
/*
  function mayorOIgualA30(array){
    let mayorIgual30 = []
    for(let i = 0; i < array.length; i++){
        if(array[i].edadTitular >= 30){
            mayorIgual30.push(array[i])
        }
    }
    return mayorIgual30
  }

  let mayorOIgualTreinta = mayorOIgualA30(arrayCuentas);
  console.log(mayorOIgualTreinta);
  */

  // * Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
/*
  function igualA30(array){
    let igual30 = []
    for(let i = 0; i < array.length; i++){
        if(array[i].edadTitular === 30){
            igual30.push(array[i])
        }
    }
    return igual30
  }

  let igualTreinta = igualA30(arrayCuentas);
  console.log(igualTreinta);
  */

// * Obtener la cuenta con el titular de la misma más joven.
/*
function masJoven(array){
    let menor = array[0]

    for(let i = 0; i < array.length; i++){
        if(array[i].edadTitular < menor.edadTitular){
            menor = array[i]
        }
    }

    return menor
}

let elMasJoven = masJoven(arrayCuentas);
console.log(elMasJoven);
*/

// * Obtener un nuevo array por cada tipo de cuenta.
/*
function tipoDeCuenta(array){

    let sueldo = []
    let corriente = []

    for(let i = 0; i < array.length; i++){
        if(array[i].tipoCuenta === "corriente"){
            corriente.push(array[i])
        }
        else if(array[i].tipoCuenta === "sueldo"){
            sueldo.push(array[i])
        }
    }

    return [sueldo, corriente]
}

let tipoCuenta = tipoDeCuenta(arrayCuentas);
console.log(tipoCuenta);
*/

// ? CON SWICHT
/*
function tipoDeCuenta(array){

    let sueldo = []
    let corriente = []

    for(let i = 0; i < array.length; i++){
        switch (array[i].tipoCuenta) {
            case "corriente":
                corriente.push(array[i])
                break;
            
            case "sueldo":
                sueldo.push(array[i])
                break;
        
            default:
                console.log("No existe ese tipo de cuenta");
                break;
        }
        
    }

    return [sueldo, corriente]
}

let tipoCuenta = tipoDeCuenta(arrayCuentas);
console.log(tipoCuenta);
*/

// * Obtener un nuevo array con las cuentas habilitadas.
/*
function cuentaHabilitada(array){
    let habilitada = []

    for(let i = 0; i < array.length; i++){
        if(array[i].estaHabilitada === true){
            habilitada.push(array[i])
        }
    }

    return habilitada
}

let cuentasHabilitadas = cuentaHabilitada(arrayCuentas);
console.log(cuentasHabilitadas);
*/

// * Obtener un nuevo array con las cuentas deshabilitadas.
/*
function cuentaDeshabilitada(array){
    let deshabilitada = []

    for(let i = 0; i < array.length; i++){
        if(array[i].estaHabilitada === false){
            deshabilitada.push(array[i])
        }
    }

    return deshabilitada
}

let cuentasdesHabilitadas = cuentaDeshabilitada(arrayCuentas);
console.log(cuentasdesHabilitadas);
*/

// * Obtener la cuenta con el menor saldo.
/*
function menor (array){

    let menorSaldo = array[0]

    for(let i = 0; i < array.length; i++){
        if(array[i].saldo < menorSaldo.saldo){
            menorSaldo = array[i]
        }
    }

    return menorSaldo
}

let buscarMenor = menor(arrayCuentas);
console.log(buscarMenor);
*/

// * Obtener el mayor saldo.

function mayor (array){

    let mayorSaldo = array[0]

    for(let i = 0; i < array.length; i++){
        if(array[i].saldo > mayorSaldo.saldo){
            mayorSaldo = array[i]
        }
    }

    return mayorSaldo
}

let buscarMayor = mayor(arrayCuentas);
console.log(buscarMayor);





