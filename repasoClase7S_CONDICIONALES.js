const prompt = require("prompt-sync")({ sigint: true });

// ! IF

/*
if (edad>=18){
    console.log("Puede pasar")
} else{
    console.log("No puede pasar")
}
*/

// ! edad()

// * Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// * inválida. Por favor ingrese un número válido."

// * Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// * la mayoría de edad.

// * Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
// * edad es impar?".

/*
let edad = parseInt(prompt("Ingrese su edad "));

if (edad < 0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else if (edad < 18) {
    console.log("No puede pasar al bar.")
} else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else if (edad === 21){
    console.log("Puede pasar al bar, bienvenidx. Felicitaciones por haber llegado a la mayoría de edad.")
} else {
    console.log("Puede pasar al bar y tomar alcohol.")
}

if (edad % 2 !== 0){
    console.log("¿Sabías que tu edad es impar?");
}
*/

// ! totalAPagar()

// * Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos.
// * A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// * cuenta las siguientes consideraciones:

// * ● Si el vehículo es “coche”, el precio por litro es de $86.
// * ● Si es “moto”, ha de ser $70.
// * ● Si es “autobús”, ha de ser $55.
// * ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// * ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

/*
function totalAPagar(vehiculo, litrosConsumidos){
    let total = 0;
    if(vehiculo === "coche"){
        total = 86 * litrosConsumidos;
        litrosConsumidos <= 25 && litrosConsumidos > 0 ? total += 50 : total += 25;
    } else if(vehiculo === "moto"){
        total = 70 * litrosConsumidos;
        litrosConsumidos <= 25 && litrosConsumidos > 0 ? total += 50 : total += 25;
    } else if(vehiculo === "autobús"){
        total = 55 * litrosConsumidos;
        litrosConsumidos <= 25 && litrosConsumidos > 0 ? total += 50 : total += 25;
    }

    return total;
}

console.log(totalAPagar("coche",5));
*/

// ! Local de sándwiches

// * Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
// * eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
// * el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
// * vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
// * que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
// * Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
// * donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
// * recibiremos los datos de la siguiente manera.

// * Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
// * diferente por cada selección:

// * ● Pollo = $150 (“pollo”)
// * ● Carne = $200 (“carne”)
// * ● Vegetariano (verduras asadas) = $100 (“veggie”)

// * Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
// * otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
// * deseado:

// * ● Blanco c/orégano y parmesano = $50 (“blanco”)
// * ● Negro c/avena = $60 (“negro”)
// * ● Sin gluten = $75 (“s/gluten”)

// * Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// * adicionales:

// * ● Queso = $20
// * ● Tomate = $15
// * ● Lechuga = $10
// * ● Cebolla = $15
// * ● Mayonesa = $5
// * ● Mostaza = $5

// * Cada uno de estos adicionales están representados por booleanos —es decir, true o
// * false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
// * total de seis valores booleanos, uno por cada adicional—.
// * Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
// * para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
// * función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
// * tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
// * Finalmente, deberá retornar el valor numérico del total a pagar del cliente.

/*
let sanguche = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let total = 0;

    switch (base) {
        case "pollo":
            total += 150
            break;
        case "carne":
            total += 200
            break;
        case "veggie":
            total += 100
            break;
        default:
            break;
    }

    switch (pan) {
        case "blanco":
            total += 50
            break;
        case "negro":
            total += 60
            break;
        case "s/gluten":
            total += 75
            break;
        default:
            break;
    }

    queso === true ? total += 20 : total += 0;
    tomate === true ? total += 15 : total += 0;
    lechuga === true ? total += 10 : total += 0;
    cebolla === true ? total += 15 : total += 0;
    mayonesa === true ? total += 5 : total += 0;
    mostaza === true ? total += 5 : total += 0;

    return total;
}

console.log(sanguche("pollo", "blanco", true, false, true, true, false, false));
*/

// ! Extra bonus

// ! ¿Cuál es el número secreto?

// * Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// * número secreto. El número secreto deberá ser seleccionado de manera random de
// * entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// * retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// * mensaje de aliento junto con el número ingresado y el secreto.

/*
let numero = parseInt(prompt("Ingrese un número del 1 al 10: "));

function adivinar(numero){
    let inicio = 1;
    let fin = 10;
    let numeroSecreto = inicio+ Math.floor(Math.random()*fin);
    
    if (numero === numeroSecreto){
        console.log("Felicidades!! Adivinaste :)");
    }
    else{
        console.log("Seguí participando. El número secreto era " + numeroSecreto);
    }
}

adivinar(numero);
*/

// ! abrirParacaidas()
// * Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// * altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// * siguiente:

// * ● La velocidad debe ser menor a 1000 km/h.
// * ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
/*
function abrirParacaidas(velocidad, altura){
    if (velocidad < 1000 && (2000 <= altura < 3000)){
        console.log("Abrí el paracaídas");
    }
    else{
        console.log("No abras el paracaídas");
    }
}

abrirParacaidas(5000, 2500);
*/

// ! Traductor condicional

// * Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// * "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// * inglés. En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// * informe que la palabra ingresada es incorrecta.

/*
let palabra = prompt("Ingrese una palabra: ");

function traductorCondicional(palabra){
    
    switch (palabra) {
        case "casa":
            console.log("house");
            break;

        case "perro":
            console.log("dog");
            break;
        
        case "pelota":
            console.log("ball");
            break;
        
        case "arbol":
            console.log("tree");
            break;

        case "genio":
            console.log("genius");
            break;

        default:
            console.log("La palabra ingresada es incorrecta.");
            break;
    }
}

traductorCondicional(palabra);
*/

// ! Valoración de películas

// * Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// * según la siguiente escala:

// * ● Muy mala.
// * ● Mala.
// * ● Mediocre.
// * ● Buena.
// * ● Muy buena.

// * Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// * por su valoración. Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// * En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
// * inválido". Cuando el usuario haya valorado la película, agradecerle su visita.

/*
let valor = prompt("Valore la película (Muy mala | Mala | Mediocre | Buena | Muy buena): ")

function valoracionPelicula(valor){
    let gracias = " Gracias por tu visita."
    switch (valor) {
        case "Muy mala":
            console.log("Calificaste la película como " + valor + ". Lo lamentamos mucho." + gracias);
            break;

        case "Mala":
            console.log("Calificaste la película como " + valor + ". Lo lamentamos mucho." + gracias);
            break;

        case "Mediocre":
            console.log("Calificaste la película como " + valor + ". Lo lamentamos mucho." + gracias);
            break;

        case "Buena":
            console.log("Calificaste la película como " + valor + ". Nos alegra que te haya gustado." + gracias);
            break;

        case "Muy buena":
            console.log("Calificaste la película como " + valor + ". Nos alegra que te haya gustado." + gracias);
            break;
    
        default:
            console.log("Ingresaste un valor inválido");
            break;
    }
}

valoracionPelicula(valor);
*/