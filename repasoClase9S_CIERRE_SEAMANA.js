const prompt = require("prompt-sync")({ sigint: true });

// * 1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
// * Recordá que para pedirle al usuario que escriba una frase
// * debés utilizar el método prompt() y para escribir en la consola
// * debés utilizar el método console.log().
/*
function decirFrase(){
    console.log(prompt("Ingrese una frase: "));
}
decirFrase();
*/

// * 2) Escribí un programa que le pregunte al usuario su nombre e
// * imprima "Hola " seguido del nombre y un signo de exclamación.
// * Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// * imprimir en la consola "Hola Pedro!".
/*
let nombre = prompt("¿Cómo es tu nombre? ");

function decirFrase(){
    console.log(`Hola ${nombre}!`);
}
decirFrase();
*/

// * 3) Escribí un programa que le pida al usuario ingresar un número,
// * luego le pida un segundo número, e imprima en la consola la
// * suma de los dos números que ingresó el usuario.
/*
let numero1 = parseInt(prompt("Ingrese un número: "))
let numero2 = parseInt(prompt("Ingrese otro número: "))

function suma(numero1, numero2){
    return numero1 + numero2
}

console.log("La suma es " + suma(numero1, numero2));
*/

// * 4) Escribí un programa que le pida al usuario su año de
// * nacimiento e imprima su edad actual en la consola con la frase
// * "Tienes X años" (siendo X la cantidad de años).
// * Por ejemplo, asumiendo que el año actual es 2019 y el usuario
// * ingresa 1999, el programa debe imprimir en la consola: “Tienes
// * 20 años”.
/*
let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "))
let anioActual = parseInt(prompt("Ingrese el año actual: "))

function calcularEdad(anioNacimiento, anioActual){
    return anioActual - anioNacimiento
}

console.log(`Tienes ${calcularEdad(anioNacimiento, anioActual)} años`);
*/

// * 5) Escribí un programa que piense un número de forma aleatoria
// * del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// * número es correcto debe imprimir en la consola "Felicitaciones,
// * ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// * nuevamente!"
/*
let numero = parseInt(prompt("Ingrese un número: "))

function adivinarNumero(numero){
    let inicio = 1;
    let fin = 10;
    let numeroSecreto = inicio+ Math.floor(Math.random()*fin);

    if(numero === numeroSecreto){
        console.log("Felicitaciones, adivinaste!!!!");
    } else{
        console.log(`Seguí participando. El número secreto era ${numeroSecreto}`);
    }
}

adivinarNumero(numero)
*/

// * 6) Escribí un programa que imprima los números pares del 0 al 100.
/*
function delCeroAlCienPares(){
    
    for(i=0; i<= 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

delCeroAlCienPares()
*/

// * 7) Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en la consola:
/*
const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
function nombre(){
    for(i = 0; i < nombres.length; i++){
        console.log(nombres[i]);
    }
}
nombre()
*/

// * 8) Construí un pseudocódigo que permita ingresar un número, si
// * el número es mayor de 500, se debe calcular y mostrar en
// * pantalla el 18% de este.
/*
let numero = parseInt(prompt("Ingresa un número: "))

function mayor500(numero){
    if(numero > 500){
        return numero * 18 / 100
    }
}

console.log(mayor500(numero));
*/

// * 9) Escribí una función llamada elemento que recibe un arreglo
// * como parámetro. La función debe devolver el valor que se
// * encuentra en la tercera posición. Si el arreglo no tiene al menos
// * 3 elementos deberá retornar -1.
/*
let numeros = [10, 20, 30, 40]

function elemento(numeros){
    if(numeros.length <= 3){
        console.log(-1);
    }
    else{
    console.log(numeros[3]); 
    }
}

elemento(numeros)
*/

// * 10) Se ingresa por teclado un número natural de hasta 2 cifras, si
// * tiene una cifra que muestre lo mínimo que le falta para ser un
// * número de 2 cifras; de lo contrario, que muestre lo mínimo que
// * le falta para ser un número de 3 cifras. Considerar que el
// * usuario ingresa números de hasta dos cifras.
/*
let numero = parseInt(prompt("Ingresa un número natural de hasta 2 cifras: "))

function cifras(){
    if(numero < 10){
        let dosCifras = 10 - numero
        console.log(`Tenés una cifra. Te faltan ${dosCifras} para llegar a 2 cifras`);
    }
    else if(numero < 100){
        let tresCifras = 100 - numero
        console.log(`Tenés dos cifras. Te faltan ${tresCifras} para llegar a 3 cifras`);
    }
    else{
        console.log("Te dijimos de hasta 2 cifras y natura, pensa de nuevo");
    }
}

cifras(numero)
*/

// * 11) Hacer un algoritmo que muestre el promedio de varias
// * notas o de N notas ingresadas, se debe definir el valor de N
// * para conocer la cantidad de notas a ingresar.
/*
let N = parseInt(prompt("La cantidad de notas a ingresar es: "));

function calcularPromedio(){
    let sumatoria = 0;
    for(let i = 0; i<N; i++){
        sumatoria = sumatoria + parseFloat(prompt("Decime la nota: "));
    }
    return sumatoria/N
}

console.log(calcularPromedio());
*/

// * 12) Hacer un programa que calcule la suma de los N primeros
// * números naturales, dónde N es el número límite ingresado por
// * teclado.
/*
let N = parseInt(prompt("¿Cuántos números naturales querés? "));

function calcularPrimeros(){
    let sumatoria = 0;
    for(i = 0; i <= N; i++){
        sumatoria += i
    }
    return sumatoria
}

console.log(calcularPrimeros());
*/