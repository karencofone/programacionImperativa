// * Ejercicio 1
// * En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// * likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// * los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// * obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// * que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likes = [12, 325, 42, 2, 5, 7, 9, 6, 4, 54, 85, 65, 32, 10, 47]

let ordenarLikes = (array) =>{
    
    let aux;
    let nuevoArray = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] < array[j + 1]){
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
        
    }

    nuevoArray.push(array[0], array[1], array[2], array[array.length - 1])
    return nuevoArray
}

//console.log(ordenarLikes(likes));

// * Ejercicio 2
// * El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// * objeto temperatura donde registra día —valor numérico del día—, mes —valor
// * numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// * día. Las temperaturas —objeto temperatura— están cargados en un array.


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

let subirDias = (dia1, dia2, dia3) => {
    let temperatura = []
    temperatura.push(dia1)
    temperatura.push(dia2)
    temperatura.push(dia3)
    return temperatura
}

//console.log(subirDias(dia1, dia2, dia3));
let arrayDias = subirDias(dia1, dia2, dia3)

// * a) Ordenar por temperatura mínima de menor a mayor.

let ordenarTemperaturaAsc = (array) =>{
    let aux;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].temperaturaMin > array[j + 1].temperaturaMin){
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
        
    }

    return array
}

//console.log(ordenarTemperaturaAsc(arrayDias));

// * b) Ordenar por temperatura máxima de mayor a menor.

let ordenarTemperaturaDesc = (array) =>{
    let aux;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].temperaturaMax < array[j + 1].temperaturaMax){
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
        
    }

    return array
}

console.log(ordenarTemperaturaDesc(arrayDias));

