// * A partir de él siguiente array de edades nos solicitan realizar lo siguiente
 
const edades = [33, 27, 34, 30, 34, 25];
 

// * Desarrollar una función que ordene internamente de forma ascendente las edades,
// * la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// * [25, 27, 30, 33, 34, 34]

let ordenarEdades = (array) =>{ 
    let aux;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] > array[j + 1]){ // 150, 25
                aux = array[j] // guarda el 150
                array[j] = array[j + 1] // el 150 ahora es 25
                array[j + 1] = aux // el que antes era 25 ahora es 150
            }
            
        }
        
    }

    return array
}

//console.log(ordenarEdades(edades));

// * Desarrollar una función que ordene internamente de forma descendente las edades,
// * la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// * [34, 34, 33, 30, 27, 25]

let ordenarEdadesDesc = (array) =>{ 
    let aux;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] < array[j + 1]){ 
                aux = array[j] 
                array[j] = array[j + 1] 
                array[j + 1] = aux 
            }
            
        }
        
    }

    return array
}

//console.log(ordenarEdadesDesc(edades));


// * ORDENAR PERO EN UNA SOLA FUNCIÓN

let ordenarEdades2 = (array, tipoOrden) => {

    let aux;
        
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(tipoOrden == "ascendente"){
                if(array[j] > array[j + 1]){ 
                    aux = array[j] 
                    array[j] = array[j + 1] 
                    array[j + 1] = aux 
                }
            }
            else if(tipoOrden == "descendente"){
                if(array[j] < array[j + 1]){ 
                    aux = array[j] 
                    array[j] = array[j + 1] 
                    array[j + 1] = aux 
                }
            }
                    
        }
                
    }
        
    return array
}

//console.log(ordenarEdades2(edades, "descendente"));

// * 3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

// * Desarrollar una función que ordene internamente de forma ascendente según
// * él saldo de cada cuenta, la misma deberá retornar él array ordenado .

let ordenarSaldo = (array) => {
    let aux;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].saldo > array[j+1].saldo){
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux
            }
            
        }
        
    }

    return array
}

//console.log(ordenarSaldo(arrayCuentas));

// * Desarrollar una función que ordene internamente de forma ascendente según la
// * edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

let ordenarEdad = (array) => {
    let aux;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].edadTitular > array[j+1].edadTitular){
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux
            }
            
        }
        
    }

    return array
}

console.log(ordenarEdad(arrayCuentas));

