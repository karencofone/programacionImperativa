// * Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
// * de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
// * forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
// * tiene la siguiente información:

// * ● N.o de cuenta (solo números).
// * ● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en pesos).
// * ● Saldo en pesos (solo la cantidad).
// * ● Titular de la cuenta (nombre completo).

// * Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:

// * 1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
// * (cuentas bancarias).

// ? la lista de clientes.


let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];


//   2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.

// 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.

// 5. Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.
/*
let banco = {
    cliente: arrayCuentas,
    consultarCliente: function(titular){

        for(let i = 0; i < this.cliente.length; i++){
            
            if(this.cliente[i].titularCuenta == titular){
                console.log(this.cliente[i]); 
            }
            // else{
            //     console.log("Cliente no encontrado"); 
            // }
        }
        
    },
    deposito: function(titular, monto){

        for(let i = 0; i < this.cliente.length; i++){
            
            if(this.cliente[i].titularCuenta == titular){
                console.log("Su saldo era: $" + this.cliente[i].saldoEnPesos);
                let saldo = this.cliente[i].saldoEnPesos += monto
                console.log("Depósito realizado, su nuevo saldo es: $" + saldo)
            }
        }

    },
    extraccion: function(titular, monto){
        for(let i = 0; i < this.cliente.length; i++){
            
            if(this.cliente[i].titularCuenta == titular){
                console.log("Saldo: $" + this.cliente[i].saldoEnPesos);
                let saldo = this.cliente[i].saldoEnPesos -= monto
                saldo < 0 ? console.log("Fondos insuficientes.") : console.log("Extracción realizada correctamente, su nuevo saldo es: $" + saldo);
            }
        }

    }
}

// banco.consultarCliente("Jacki Shurmer");
// banco.deposito("Jacki Shurmer", 2000)
banco.extraccion("Jacki Shurmer", 200)
*/

// ! Bonus extra

// ! Propiedad única

// * Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
// * parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
// * parámetro la propiedad que fue pasada como string.
// * Ejemplo:

// * propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// * propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]

/*
let array = [{ nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49}]

const propiedadUnica = (arrobjetos,str) =>{

    let nuevoArray =[]

    for (let i=0 ; i<arrobjetos.length ; i++){
      nuevoArray.push({[str]: arrobjetos[i][str]})
    }
    return nuevoArray
}

let prueba = propiedadUnica(array, 'edad')
console.log(prueba)
*/

// ! Calculador de notas

// * Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:

// * ● Nombre
// * ● Número de legajo
// * ● Lista de notas

// * Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// * nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// * todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// * correctamente de la manera solicitada.

/*
let alumno = {
    nombre: "Jorge",
    numLegajo: 1010,
    notas: [7, 8, 9],
    promedio: function(){

        let sumatoria = 0
        for(let i = 0; i < this.notas.length; i++){
            sumatoria += this.notas[i]
            
        }
        return sumatoria / this.notas.length
    }
}

console.log(alumno.promedio(alumno.notas));
*/
