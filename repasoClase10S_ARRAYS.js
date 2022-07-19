// ! Arrays y colecciones
/*
let arr = [5, 10, 25, 35, 45, 55, 65, 75, 85, 95, 105]
*/
// * A. Acceder a elementos específicos de un array.
//console.log(arr[4]);

// * B. Modificar cada uno de sus elementos e imprimirlos.
/*
function modificar(array){
    for(i = 0; i < array.length; i++){
        array[i] += 1
    }
    return array
}
*/
//console.log(modificar(arr));

// * C. Agregar elementos a un array.
/*
function agregar(agrego){
    agrego.push(115, 125, 135)
    return agrego
}
*/
//console.log(agregar(arr));

// * D. Extraer elementos de un array.
/*
function extraerUltimo(){
    let extraido = arr.pop()
    console.log(arr);
    console.log(extraido);
}
extraerUltimo()
*/

// * E. Comparar elementos de un array con los elementos de otro.
/*
let arr2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function comparar(array1, array2){

    for(i = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            console.log("Esta es la posición " + i +". Son iguales");
        }
        else{
            console.log("Esta es la posición " + i + ". Son diferentes");
        }
    }
}
*/
//comparar(arr, arr2);

// ! Colecciones de películas (y más...)

// * El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
// * Para esto, deberás:

// * 1. Crear la estructura adecuada para guardar las siguientes películas:
// * "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// * Importante: verificá que todo funciona correctamente accediendo a alguna de
// * las películas una vez creada la estructura correspondiente.

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

//console.log(peliculas[3]);

// * 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// * en mayúsculas. Para esto solicitan que crees una función que reciba por
// * parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// * Pista: revisá qué hace el método de strings .toUpperCase().

/*
function mayuscula(arr){
    for(i = 0; i < arr.length; i++){
        let minuscula = arr[i]
        arr[i] = minuscula.toUpperCase()
        //console.log(arr[i].toUpperCase());
    }
    //console.log(arr);
}

mayuscula(peliculas);
*/

// * 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// * crear otra estructura similar a la primera, pero con las siguientes películas
// * animadas:
// * "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// * Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// * para poder agregar los elementos contenidos en el segundo array dentro del
// * primero, y así retornar un solo array con todas las películas como sus elementos.
// * Importante: las películas animadas también deberían convertirse a mayúsculas.

// * 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// * array de películas animadas es un videojuego. Ahora tenés que editar el código y
// * modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// * contenido al array que contenga todas las películas.
// * PD: por precaución, guardá el elemento que vas a eliminar en una variable.

/*
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function agregarArray(array1, array2){

    // ! PUNTO 4
    let extraido = array2.pop()
    //console.log(extraido);

    for(let i = 0; i < array2.length; i++){
        array1.push(array2[i].toUpperCase())
    }
    
    return array1
}

// console.log(agregarArray(peliculas, peliculasAnimadas));
agregarArray(peliculas, peliculasAnimadas);
*/

// * 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// * del mundo sobre las películas con el siguiente formato:

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// * Te piden crear una función que compare las calificaciones e indique si son iguales
// * o diferentes. Te confirman que están en el orden adecuado y que solo traen
// * valores numéricos del 1 al 10.
// * PD: los elementos de los scores tanto de Asia como de Europa corresponden en
// * orden al del array resultante de combinar películas con películas animadas. Es
// * decir, el primer elemento del array de películas general corresponde al primer
// * elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.

/*
function comparar(array1, array2, pelicula){

    for(i = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            console.log("Juan puntuó a la película " + pelicula[i] + " con " + array1[i] + ", Lucas con " + array2[i] + ". Esta es la posición " + i + ". Los puntajes son iguales. ");
        } else {
            console.log("Juan puntuó a la película " + pelicula[i] + " con " + array1[i] + ", Lucas con " + array2[i] + ". Esta es la posición " + i + ". Los puntajes son diferentes");
        }
    }

}

comparar(asiaScores, euroScores, peliculas)
*/

// ! EXTRAS

// ! Array inverso
// * En este ejercicio deberás crear una función que devuelva un array con sus elementos
// * invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
// * el orden de sus elementos.

// * 1. Creá la función imprimirInverso que tome un array como argumento y que
// * imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// * array).

/*
let arr3 = [1, 2, 3, 4]

function imprimirInverso(array){
    console.log(array.reverse());
}

imprimirInverso(arr3)
*/

// * 2. Creá la función inversor que tome un array como argumento y devuelva uno
// * nuevo invertido.
/*
let arr4 = [];

function inversor(array){
    array.push(1, 2, 3, 4, 5)
    console.log(array.reverse());
}

inversor(arr4)
*/

// ! sumaArray()
// * En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// * números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:

// * ● sumArray([1,2,3]) // 6
// * ● sumArray([10, 3, 10]) // 23
// * ● sumArray([-5,100, 19]) // 114

/*
let arrayDe3 = [100, 150, 350]

function sumaArray(arr5){

    if(arr5.length === 3){ // ! LENGTH CUENTA LOS ELEMENTOS, NO LA POSICIÓN
        let sumatoria = 0
        for(i = 0; i <= 2; i++){
            sumatoria += arr5[i]
        }
        console.log("La suma es " + sumatoria);
    } else {
        console.log("Error 404. Te dijimos array de 3");
    }

}

sumaArray(arrayDe3);
*/

// ! Simulación Array.join()

// * En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// * strings de 4 elementos y simule el comportamiento del método Array.join().
// * Importante: no podés usar el método Array.join() original.
// * Ejemplo:
// * ● join(["h","o","l","a"]) debe retornar el string "hola".
// * ● join(["c","h","a,"u"]) debe retornar el string "chau".

/*
let holaJorge = ["h", "o", "l", "a", " ", "j", "o", "r", "g", "e"]

function join(arr6){
    let sumatoria ="";
    for(i = 0; i < arr6.length; i++){
        sumatoria += arr6[i]
    }
    return sumatoria
}

let saludos = join(holaJorge)
console.log(saludos);
*/
