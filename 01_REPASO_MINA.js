const prompt = require("prompt-sync")({ sigint: true });

// ! PARTE 1

// * ● Encontrar él intruso
// * 1) Del siguiente array de “ceros” tenemos un intruso, carácter que no es “cero”

// * let array = ['0', 'O', '0', '0', '0', 'O', '0', '0', 'O']

// * nuestro trabajo será desarrollar una función que lo detecte
// * reemplazando por un “cero” y retornando él índice que se encontraba

// * 2) Ahora tenemos un caso similar, solo que esta vez tenemos más de un
// * intruso nuestro trabajo será crear una función que los reemplace por ceros y
// * retorna un array con las posiciones que se encontraban estos

/*
function encontrarIntruso(array){

    for(let i = 0; i < array.length; i++){
        if(array[i] !== "0"){
            console.log("El intruso estaba en la posición " + array.indexOf(array[i]));
            array[i] = "0"

        }
    }

    return array
}

let intruso = encontrarIntruso(array);
console.log(intruso);
*/

// ! PARTE 2

// ! ● Array de Objetos Literales

const arrayProfesionales = [
    {
      id: 0,
      estaHabilitado: false,
      nombre: "Huber Wilkins",
      email: "huberwilkins#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 3,
    },
    {
      id: 1,
      estaHabilitado: true,
      nombre: "Goldie Haley",
      email: "goldiehaley#speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 3,
    },
    {
      id: 2,
      estaHabilitado: false,
      nombre: "Pena Landry",
      email: "penalandry@speedbolt.com",
      especialidad: "Dermatologia",
      cantidadConsultas: 9,
    },
    {
      id: 3,
      estaHabilitado: false,
      nombre: "Leanne Burch",
      email: "leanneburch#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 13,
    },
    {
      id: 4,
      estaHabilitado: false,
      nombre: "Haynes Fuentes",
      email: "haynesfuentes@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 75,
    },
    {
      id: 5,
      estaHabilitado: true,
      nombre: "Tamika Fuentes",
      email: "tamikanewman@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 32,
    },
    {
      id: 6,
      estaHabilitado: true,
      nombre: "Russo Baldwin",
      email: "russobaldwin@speedbolt.com",
      especialidad: "Dermatologia",
      cantidadConsultas: 67,
    },
    {
      id: 7,
      estaHabilitado: true,
      nombre: "Dodson Shaffer",
      email: "dodsonshaffer#speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 2,
    },
    {
      id: 8,
      estaHabilitado: true,
      nombre: "Guerra Bright",
      email: "guerrabright#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 6,
    },
    {
      id: 9,
      estaHabilitado: true,
      nombre: "Dina Navarro",
      email: "dinanavarro@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 8,
    },
    {
      id: 10,
      estaHabilitado: false,
      nombre: "Stafford Watts",
      email: "staffordwatts@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 0,
    },
    {
      id: 11,
      estaHabilitado: false,
      nombre: "Joni Avery",
      email: "joniavery@speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 6,
    },
    {
      id: 12,
      estaHabilitado: true,
      nombre: "Mayra Tran",
      email: "mayratran@speedbolt.com",
      especialidad: "Oftamologia",
      cantidadConsultas: 2,
    },
    {
      id: 13,
      estaHabilitado: false,
      nombre: "Ward Dale",
      email: "warddale@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 23,
    },
];

// console.log(arrayProfesionales);

// * 1) Desarrollar una función llamada buscarPorId que reciba un array de
// * profesionales y un número que represente él identificador, realizar la búsqueda
// * de dentro del array, en caso de coincidencias retornar él objeto, caso contrario
// * retornar null

/*
let buscarPorId = (array, num) =>{

    let flag
    for(let i = 0; i < array.length; i++){
        if(array[i].id == num){
            flag = "id encontrado"
            return array[i]          
        }
    }

    return null
}

let nuevoid = buscarPorId(arrayProfesionales, 1)
console.log(nuevoid)
*/

// * 2) Desarrollar una función llamada filtrarHabilitadosPorEspecialidad que reciba
// * un array de profesionales y un string que represente la especialidad, realizar la
// * búsqueda de dentro del array deberá coincidir la especialidad y él profesional
// * debe estar habilitado, en caso de coincidencias retornar los profesionales, caso
// * contrario retorna un array vacío

/*
function filtrarHabilitadosPorEspecialidad(array, string){

    for(let i = 0; i < array.length; i++){
        if(array[i].especialidad == string && array[i].estaHabilitado == true){
            console.log(array[i]);
        }
    }

    
}

let buscar = filtrarHabilitadosPorEspecialidad(arrayProfesionales, "Cardiologia")
buscar;
*/

// ! VER QUÉ DICE JORGE

// * 3) Desarrollar una función llamada realizarConsulta que reciba un un número
// * que represente él identificador del profesional a buscar, reutilizar la función
// * buscarPorId, en caso de encontrar él objeto modificar la propiedad
// * cantidadConsultas incrementando su valor actual + 1, caso contrario retornar
// * null

/*
function realizarConsulta(num){

    for(let i = 0; i < arrayProfesionales.length; i++){
        if(arrayProfesionales[i].id == num){
            arrayProfesionales[i].cantidadConsultas++
            return arrayProfesionales[i]
        }
    }

    return null
    
}


let consulta = realizarConsulta(1);
console.log(consulta);
*/

// * 4) Desarrollar una función llamada corregirEmails que reciba un array de
// * profesionales, verificar si existe él carácter # en la propiedad email de cada
// * objeto literal introducido por error y reemplazar por @

function corregirEmails(){

    for(let i = 0; i< arrayProfesionales.length; i++){
      console.log(arrayProfesionales[i].email.replace("#", "@"));
    }

}

let corregirArroba = corregirEmails(arrayProfesionales);

