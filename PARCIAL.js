// Ejercicio 1: 
// Desarrollar una función para cada uno de las siguientes apartados: 
// Que reciba por parámetro un número entero y retorne su doble.

function duplicar(numero){
    return (numero * 2)
}

let elDoble = duplicar(2)
console.log(elDoble);

// Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  

function multiplicar(numero1, numero2){
    return (numero1 * numero2)
}

let multiplicacion = multiplicar(10, 2)
console.log(multiplicacion);

// Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 

function dividir(numero1, numero2){
    if((numero1 !== 0) && (numero2 !== 0)){
        return (numero1 / numero2)
    }
}

let division = dividir(50, 2)
console.log(division);

// Ejercicio 2:
// 1. Deberás escribir un objeto literal llamado ciclista que contenga las siguientes propiedades
// que deberás completar con tus datos:
// nombre
// apellido 
// edad
// tiene Bici (TRUE/FALSE)

let ciclista = {
    nombre: "Karen",
    apellido: "Cofone",
    edad: 25,
    tieneBici: true
}

// 2. Teniendo en cuenta los datos del punto número 1.
// Crear una función que reciba por parámetro el objeto y retorne un string
// en base a las siguientes condiciones: 
// si edad es mayor o igual a 18 y tiene bici  “puede competir”
// si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
// si no tiene bici “No podrá competir ” 
// Deberás realizar la invocación de la función de forma que se pueda ver el resultado

function puedeCompetir(ciclista){

    if((this.edad >= 18) && (this.tieneBici === true)){
        return "puede competir"
    }
    else if((this.edad < 18) && (this.tieneBici === true)){
        return "podra competir pero con un adulto acompañante"
    }
    else if(this.tieneBici === false){
        return "No podrá competir"
    }
}

let competencia = puedeCompetir(ciclista)
console.log(competencia);

// Ejercicio 3:
// 1. Crear un array VACÍO llamado competidores.
// 2. Dados estos tres objetos
    // a. Agregarlos al array. (utilizando un método JS, pensa cual podrías utilizar)
    // b. Mostrar por consola el array para ver que contenga esos objetos.
// 3. Crea una función que reciba el array competidores como parámetro, e incremente en
// 100 la cantidad de kilómetros recorridos de cada uno de los competidores,
// llámala competencia100Km. Debes utilizar alguna estructura de repetición vista en la materia.
// 4. Mostrar por consola el array de competidores antes y después de
// la ejecución de la función.

let competidores = []

let competidor1 = {
    nombre: 'Juan',
    edad: 42,
    kilometrosRecorridos: 80,
   }

let competidor2 = {
    nombre: 'Sofia',
    edad: 22,
    kilometrosRecorridos: 90
   }

let competidor3 = {
    nombre: 'Maria',
    edad: 45,
    kilometrosRecorridos: 70
    }

function agregoAlArray(elemento1, elemento2, elemento3){

    competidores.push(elemento1)
    competidores.push(elemento2)
    competidores.push(elemento3)

    return competidores

}

let agregandoCompetidores = agregoAlArray(competidor1, competidor2, competidor3)
console.log(agregandoCompetidores);

function competencia100Km(array){

    for(let i=0; i<array.length; i++){
        array[i].kilometrosRecorridos += 100
    }

    return array
}

let sumoCien = competencia100Km(competidores)
console.log(sumoCien);
